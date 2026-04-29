import { Link } from "react-router-dom";
import { Star, Heart, Eye } from "lucide-react";
import { motion } from "motion/react";
import { type Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { useStore } from "../context/StoreContext";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { setQuickViewProduct, toggleWishlist, isInWishlist } = useStore();

  return (
    <motion.div 
      initial={{ opacity: 1, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      
      className="bg-white border border-[#F0F0F0] rounded-[4px] overflow-hidden group hover:shadow-xl transition-shadow relative flex flex-col h-full"
    >
      <div className="absolute top-3 left-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => toggleWishlist(product)}
          className="w-8 h-8 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors shadow-sm"
        >
          <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current text-red-500' : 'text-[#777]'}`} />
        </button>
        <button 
          onClick={() => setQuickViewProduct(product)}
          className="w-8 h-8 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center hover:bg-gray-50 hover:text-brand-dark transition-colors shadow-sm"
        >
          <Eye className="w-4 h-4 text-[#777]" />
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="block h-[200px] bg-[#F9F9F9] relative overflow-hidden flex items-center justify-center p-4">
        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
      </Link>
      
      <div className="p-4 border-t border-[#F0F0F0] flex flex-col flex-1">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-[700] text-[15px] mb-1 line-clamp-1 hover:text-brand-emerald transition-colors">{product.name}</h3>
          </Link>
          <div className="flex text-brand-gold mb-2">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className={`w-3 h-3 ${i < (product.rating || 5) ? 'fill-current' : 'text-gray-300'}`} />
             ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-3">
          <div className="text-[18px] font-[800] text-brand-emerald leading-[1]" dir="ltr">
            <span className="icon-saudi_riyal mr-1 text-[22px]"></span>{product.price}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="bg-brand-emerald text-white w-8 h-8 rounded-[2px] flex items-center justify-center text-[20px] font-bold hover:bg-[#043629] transition-colors leading-[0] pb-1 shadow-sm shadow-brand-emerald/20"
          >
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
}
