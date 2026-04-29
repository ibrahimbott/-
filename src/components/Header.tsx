import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, Heart, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "المتجر", href: "/shop" },
  { name: "الفئات", href: "/shop" },
  { name: "العروض الخاصة", href: "/offers" },
  { name: "من نحن", href: "/about" },
  { name: "اتصل بنا", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { cartCount } = useCart();
  const { wishlist } = useStore();
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = query.trim() ? products.filter(p => p.name.includes(query) || p.category.includes(query)).slice(0, 5) : [];

  return (
    <>
      <div className="bg-brand-emerald text-white text-center py-2 text-sm flex justify-center items-center gap-4 relative z-50">
        شحن مجاني للطلبات بـ <span dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> ٢٠٠</span> أو أكثر  |  اكسب نقاط مع كل عملية شراء ✨
      </div>

      <nav className="sticky top-0 z-40 bg-white border-b border-black/5 h-[80px] flex flex-col justify-center shadow-sm">
        <div className="w-full px-5 md:px-10">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex flex-col justify-center cursor-pointer">
              <span className="text-[28px] font-[800] text-brand-emerald tracking-[-1px] leading-[1]">الهارون</span>
              <span className="text-[10px] text-brand-gold font-[600] tracking-[1px] pl-1">NOOR AL-TARTEEB</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-6 list-none text-[15px] font-[600]">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-brand-dark hover:text-brand-gold transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button 
                  className="text-brand-dark hover:text-brand-emerald transition-colors appearance-none bg-transparent rounded-full p-2 hover:bg-gray-50"
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                {searchOpen && (
                  <div className="absolute top-[120%] left-0 md:left-auto md:right-0 w-[300px] bg-white border border-gray-100 shadow-xl rounded-[4px] p-4 animate-in fade-in slide-in-from-top-2">
                    <input 
                      type="text" 
                      placeholder="ابحث عن منتج..." 
                      className="w-full bg-[#F9F9F9] border border-gray-200 px-4 py-2 rounded-[2px] outline-none focus:border-brand-emerald text-[14px]"
                      autoFocus
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                    />
                    {query.trim() !== '' && (
                      <div className="mt-2 flex flex-col gap-2 max-h-[300px] overflow-y-auto">
                        {searchResults.length > 0 ? searchResults.map(p => (
                          <Link 
                            key={p.id} 
                            to={`/product/${p.id}`} 
                            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-[4px]"
                            onClick={() => setSearchOpen(false)}
                          >
                            <img src={p.image} className="w-10 h-10 object-contain bg-[#F9F9F9] mix-blend-multiply" />
                            <div className="text-[13px] font-[600] text-brand-dark truncate">{p.name}</div>
                          </Link>
                        )) : (
                          <div className="text-[13px] text-gray-500 p-2 text-center">لا توجد نتائج</div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link to="/shop" className="relative text-brand-dark hover:text-brand-emerald transition-colors appearance-none bg-transparent rounded-full p-2 hover:bg-gray-50 hidden sm:flex">
                <Heart className="w-5 h-5 text-brand-dark" />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* User */}
              <button className="text-brand-dark hover:text-brand-emerald transition-colors appearance-none bg-transparent rounded-full p-2 hover:bg-gray-50 hidden sm:flex" aria-label="User account">
                <User className="w-5 h-5" />
              </button>

              {/* Cart */}
              <Link to="/cart" className="relative text-brand-dark hover:text-brand-emerald transition-colors appearance-none bg-transparent rounded-full p-2 hover:bg-gray-50 flex items-center gap-2" aria-label="Cart">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button className="lg:hidden text-brand-dark ml-2 appearance-none bg-transparent p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[100] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-100">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-brand-dark transition-colors"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-[20px] font-[800] text-brand-emerald tracking-[-1px]">الهارون</span>
              </div>
              <div className="p-4 space-y-2 overflow-y-auto flex-1">
                 {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="block px-4 py-3 text-base font-[600] text-brand-dark hover:text-brand-emerald hover:bg-gray-50 rounded-[4px] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
