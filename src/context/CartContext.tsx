import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  price: string;
  image: string;
  category: string;
  rating?: number;
  ingredients?: string;
  usage?: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  // prices are stored as strings like "٣٩٫٥٠", converting to numbers for total
  const cartTotal = cart.reduce((total, item) => {
    // English number conversion for math, assuming arabic numbers can just be treated generically or we use a fixed map if they are arabic chars.
    // The prompt prices are like "٣٩٫٥٠". Let's convert them mapping char codes or using a simple map.
    const arabicToEng = (s: string) => s.replace(/[٠-٩]/g, d => '0123456789'[d.charCodeAt(0) - 1632]).replace('٫', '.');
    const priceNum = parseFloat(arabicToEng(item.price)) || 0;
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
