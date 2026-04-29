import productFlatlay from '../assets/images/flat-lay-composition-of-6-different-skincare-produ.jpeg';
import pumpBottle from '../assets/images/photorealistic-premium-pump-bottle-of-body-lotion-.jpeg';
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShieldCheck, Heart, Truck, RefreshCcw, Share2, Facebook, Twitter, Instagram, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useStore } from "../context/StoreContext";

export function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist, addRecentlyViewed } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product) {
      addRecentlyViewed(product);
      window.scrollTo(0, 0);
    }
  }, [product, addRecentlyViewed]);

  if (!product) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-[24px] font-[800] text-brand-dark mb-4">المنتج غير موجود</h2>
        <Link to="/shop" className="text-brand-emerald hover:underline font-[600]">العودة للمتجر</Link>
      </div>
    );
  }

  // Generate some mock images based on the main image for the gallery
  const images = [
    product.image,
    productFlatlay, // generic cream
    pumpBottle, // generic texture
  ];

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#FDFBF7] border-b border-[#F0E6D2] py-4">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center text-[13px] text-[#777] overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-brand-emerald">الرئيسية</Link>
          <ChevronLeft className="w-4 h-4 mx-2" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-brand-emerald">{product.category}</Link>
          <ChevronLeft className="w-4 h-4 mx-2" />
          <span className="text-brand-dark font-[600]">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-16">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#F9F9F9] rounded-[4px] border border-[#F0F0F0] overflow-hidden mb-4 relative aspect-[4/5] md:aspect-square flex items-center justify-center p-8 group">
               <button 
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center shadow-sm z-10 transition-colors hover:bg-red-50 hover:text-red-500 hover:border-red-200"
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current text-red-500' : 'text-[#777]'}`} />
               </button>
               <motion.img 
                 key={currentImageIndex}
                 initial={{ opacity: 1 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.3 }}
                 src={images[currentImageIndex]} 
                 alt={product.name} 
                 className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
               />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 shrink-0 border-[2px] rounded-[4px] overflow-hidden bg-[#F9F9F9] p-2 flex items-center justify-center transition-colors ${currentImageIndex === idx ? 'border-brand-emerald' : 'border-[#F0F0F0] hover:border-[#CCC]'}`}
                >
                  <img src={img} alt="" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col pt-2 md:pt-0">
            <span className="text-brand-gold text-[13px] font-[700] mb-2">{product.category}</span>
            <h1 className="text-[28px] md:text-[36px] font-[800] text-brand-dark mb-4 leading-[1.2]">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < (product.rating || 5) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-[#777] text-[14px] underline cursor-pointer">٤٢ تقييم</span>
            </div>

            <div className="text-[32px] font-[800] text-brand-emerald mb-6 flex items-center bg-[#FDFBF7] p-4 rounded-[4px] border border-[#F0E6D2] w-fit" dir="ltr">
              <span className="icon-saudi_riyal mr-2 text-[28px]"></span> {product.price}
              <span className="text-[13px] text-[#777] line-through font-[500] ml-4 mt-1"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> {(parseFloat(product.price)*1.3).toFixed(2)}</span>
            </div>

            <p className="text-[#555] text-[16px] leading-[1.8] mb-8 font-[500]">
              {product.description}
            </p>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[14px] font-[600] text-brand-dark">الكمية:</span>
                <div className="flex items-center border border-[#EAE5DD] rounded-[2px] bg-white w-32">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-[20px] text-[#555] hover:bg-[#F9F9F9] transition-colors">-</button>
                  <span className="flex-1 text-center font-[700] text-[16px] text-brand-dark">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-[20px] text-[#555] hover:bg-[#F9F9F9] transition-colors">+</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-white text-brand-emerald py-4 px-6 rounded-[2px] text-[16px] font-[700] border-2 border-brand-emerald hover:bg-brand-emerald hover:text-white transition-all text-center"
                >
                  أضف إلى السلة
                </button>
                <button 
                  onClick={() => {
                    addToCart(product, quantity);
                    // In a real app we'd navigate to checkout
                  }}
                  className="flex-1 bg-brand-dark text-white py-4 px-6 rounded-[2px] text-[16px] font-[700] border-b-[3px] border-black hover:bg-black transition-colors shadow-lg shadow-black/10 text-center"
                >
                  شراء فوري
                </button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-8 border-t border-[#F0F0F0]">
              <div className="flex items-center gap-3 text-[#555]">
                <ShieldCheck className="w-6 h-6 text-brand-emerald shrink-0" />
                <span className="text-[14px] font-[600]">منتج أصلي ومضمون 100%</span>
              </div>
              <div className="flex items-center gap-3 text-[#555]">
                <Truck className="w-6 h-6 text-brand-emerald shrink-0" />
                <span className="text-[14px] font-[600]">توصيل مجاني للطلبات فوق <span dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span>٢٠٠</span></span>
              </div>
              <div className="flex items-center gap-3 text-[#555]">
                <RefreshCcw className="w-6 h-6 text-brand-emerald shrink-0" />
                <span className="text-[14px] font-[600]">استرجاع مجاني خلال ١٤ يوم</span>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 pt-6 border-t border-[#F0F0F0]">
              <span className="text-[14px] font-[600] text-brand-dark flex items-center gap-2"><Share2 className="w-4 h-4"/> مشاركة:</span>
              <button className="w-8 h-8 rounded-full bg-[#F5F2ED] flex items-center justify-center text-[#555] hover:bg-brand-emerald hover:text-white transition-colors"><Facebook className="w-4 h-4" /></button>
              <button className="w-8 h-8 rounded-full bg-[#F5F2ED] flex items-center justify-center text-[#555] hover:bg-brand-emerald hover:text-white transition-colors"><Twitter className="w-4 h-4" /></button>
              <button className="w-8 h-8 rounded-full bg-[#F5F2ED] flex items-center justify-center text-[#555] hover:bg-brand-emerald hover:text-white transition-colors"><Instagram className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 md:mt-24">
          <div className="flex border-b border-[#F0F0F0] overflow-x-auto no-scrollbar">
            {['description', 'ingredients', 'usage'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-8 text-[16px] font-[700] whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-brand-emerald' : 'text-[#777] hover:text-brand-dark'}`}
              >
                {tab === 'description' ? 'الوصف' : tab === 'ingredients' ? 'المكونات' : 'طريقة الاستخدام'}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-emerald rounded-t-full" />
                )}
              </button>
            ))}
          </div>
          
          <div className="py-8 text-[#555] text-[15px] leading-[1.8] min-h-[150px]">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div key="desc" initial={{ opacity: 1, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <p>{product.longDescription || product.description}</p>
                </motion.div>
              )}
              {activeTab === 'ingredients' && (
                <motion.div key="ing" initial={{ opacity: 1, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <p>{product.ingredients}</p>
                </motion.div>
              )}
              {activeTab === 'usage' && (
                <motion.div key="use" initial={{ opacity: 1, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <p>{product.usage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-[#F0E6D2]">
            <h2 className="text-[24px] font-[800] text-brand-dark mb-8 text-center">منتجات قد تعجبك أيضاً</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group bg-white border border-[#F0F0F0] rounded-[4px] overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="aspect-square bg-[#F9F9F9] p-6 flex flex-col items-center justify-center">
                    <img src={p.image} alt={p.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-[700] text-[14px] text-brand-dark mb-2 line-clamp-2 group-hover:text-brand-emerald transition-colors">{p.name}</h3>
                    <div className="mt-auto text-[16px] font-[800] text-brand-emerald" dir="ltr"><span className="icon-saudi_riyal mr-1 text-[22px]"></span> {p.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
