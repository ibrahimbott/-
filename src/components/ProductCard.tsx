import React from "react";
import { Link } from "react-router-dom";
import { Star, Heart, Eye, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { type Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { useStore } from "../context/StoreContext";
import { useApp } from "../context/AppContext";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const { setQuickViewProduct, toggleWishlist, isInWishlist } = useStore();
  const { language } = useApp();

  const displayName = language === 'en' ? (product.name_en || product.name) : product.name;
  const displayCategory = language === 'en' ? (product.category_en || product.category) : product.category;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] overflow-hidden group hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full transform translate-y-0 hover:-translate-y-2"
    >
      <div className="absolute top-4 left-4 flex flex-col gap-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product); }}
          className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-[#EAE5DD] dark:border-white/10 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors shadow-lg"
          aria-label="Add to Wishlist"
        >
          <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current text-red-500' : 'text-[#777]'}`} />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuickViewProduct(product); }}
          className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-[#EAE5DD] dark:border-white/10 rounded-full flex items-center justify-center hover:bg-brand-emerald hover:text-white transition-colors shadow-lg"
          aria-label="Quick View"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="block h-[260px] bg-[#F9F9F9] dark:bg-gray-800/50 relative overflow-hidden flex items-center justify-center p-6">
        <img 
          src={product.image} 
          alt={displayName} 
          className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <span className="text-brand-gold text-[12px] font-[800] uppercase tracking-widest mb-1 block">
            {displayCategory}
          </span>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-[900] text-[17px] text-brand-dark dark:text-white mb-2 line-clamp-1 hover:text-brand-emerald transition-colors leading-snug">
              {displayName}
            </h3>
          </Link>
          <div className="flex text-brand-gold gap-0.5">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className={`w-3.5 h-3.5 ${i < (product.rating || 5) ? 'fill-current' : 'text-gray-200 dark:text-gray-700'}`} />
             ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50 dark:border-white/5">
          <div className="text-[20px] font-[900] text-brand-emerald dark:text-emerald-400 leading-[1]" dir="ltr">
            {product.price} <span className="text-[12px] ml-0.5 font-[700]">SAR</span>
          </div>
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
            className="w-12 h-12 bg-brand-emerald dark:bg-emerald-600 text-white rounded-[10px] flex items-center justify-center hover:bg-brand-emerald-light transition-all shadow-xl active:scale-90"
            aria-label="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
