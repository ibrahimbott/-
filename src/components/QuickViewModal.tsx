import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../context/StoreContext';
import { useCart } from '../context/CartContext';
import { X, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, toggleWishlist, isInWishlist } = useStore();
  const { addToCart } = useCart();
  const product = quickViewProduct;

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        
        {/* Modal */}
        <motion.div 
          initial={{ opacity: 1, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-[4px] shadow-2xl relative z-10 w-full max-w-4xl overflow-hidden flex flex-col md:flex-row"
        >
          <button 
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-gray-100 z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Image */}
          <div className="w-full md:w-1/2 bg-[#F9F9F9] flex items-center justify-center p-8 relative">
            <img src={product.image} alt={product.name} className="w-full max-h-[300px] object-contain mix-blend-multiply" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-8 flex flex-col">
            <span className="text-brand-gold text-[12px] font-[700] mb-2">{product.category}</span>
            <h2 className="text-[24px] font-[800] text-brand-dark mb-2">{product.name}</h2>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < (product.rating || 5) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>

            <p className="text-[#555] text-[14px] leading-[1.6] mb-6 line-clamp-3">
              {product.longDescription || product.description}
            </p>

            <div className="text-[24px] font-[800] text-brand-emerald mb-6 flex items-center" dir="ltr">
              <span className="icon-saudi_riyal mr-2 text-[22px]"></span> {product.price}
            </div>

            <div className="flex gap-4 mt-auto">
              <button 
                onClick={() => {
                  addToCart(product, 1);
                  setQuickViewProduct(null);
                  alert("تمت الإضافة للسلة!"); // Will replace with toast later
                }}
                className="flex-1 bg-brand-emerald text-white py-3 rounded-[2px] font-[600] border-b-[3px] border-[#043629] hover:bg-[#043629] transition-colors"
              >
                أضف إلى السلة
              </button>
              
              <button 
                onClick={() => toggleWishlist(product)}
                className={`w-12 h-12 flex items-center justify-center border rounded-[2px] transition-colors ${isInWishlist(product.id) ? 'bg-red-50 border-red-200 text-red-500' : 'bg-white border-[#EAE5DD] text-[#777] hover:bg-gray-50'}`}
              >
                <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <Link 
              to={`/product/${product.id}`}
              onClick={() => setQuickViewProduct(null)}
              className="text-center mt-4 text-[13px] text-brand-emerald hover:underline font-[600]"
            >
              عرض التفاصيل كاملة
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
