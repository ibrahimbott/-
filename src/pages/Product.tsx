import productFlatlay from '../assets/images/product-flatlay.jpeg';
import pumpBottle from '../assets/images/pump-bottle.jpeg';
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShieldCheck, Heart, Truck, Share2, Facebook, Twitter, Instagram, ChevronRight, ChevronLeft, Droplet, Leaf, ShoppingCart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useStore } from "../context/StoreContext";
import { useApp } from "../context/AppContext";

export function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist, addRecentlyViewed } = useStore();
  const { language, dir } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product) {
      addRecentlyViewed(product);
      // Only scroll to top on initial load of the product, not on every re-render
      // We use behavior 'instant' or 'auto' instead of 'smooth' to avoid jumps while reading if some state changes
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [id, addRecentlyViewed, product]);

  if (!product) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-32 text-center dark:bg-brand-dark transition-colors duration-300">
        <h2 className="text-[32px] font-[900] text-brand-dark dark:text-white mb-6">
           {language === 'ar' ? 'المنتج غير موجود' : 'Product Not Found'}
        </h2>
        <Link to="/shop" className="text-brand-emerald dark:text-emerald-400 hover:underline font-[800] text-[20px]">
           {language === 'ar' ? 'العودة للمتجر' : 'Back to Shop'}
        </Link>
      </div>
    );
  }

  const displayName = language === 'en' ? (product.name_en || product.name) : product.name;
  const displayDesc = language === 'en' ? (product.description_en || product.description) : product.description;
  const displayLongDesc = language === 'en' ? (product.longDescription_en || product.longDescription || product.description_en) : (product.longDescription || product.description);
  const displayIngredients = language === 'en' ? (product.ingredients_en || product.ingredients) : product.ingredients;
  const displayUsage = language === 'en' ? (product.usage_en || product.usage) : product.usage;
  const displayCategory = language === 'en' ? (product.category_en || product.category) : product.category;

  const images = [
    product.image,
    productFlatlay, 
    pumpBottle,
  ];

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="flex-1 bg-white dark:bg-brand-dark transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="bg-[#FDFBF7] dark:bg-gray-950 border-b border-[#F0E6D2] dark:border-white/5 py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center text-[15px] text-[#777] dark:text-gray-500 overflow-x-auto whitespace-nowrap font-[600]">
          <Link to="/" className="hover:text-brand-emerald transition-colors">{language === 'ar' ? 'الرئيسية' : 'Home'}</Link>
          {dir === 'rtl' ? <ChevronLeft className="w-4 h-4 mx-3" /> : <ChevronRight className="w-4 h-4 mx-3" />}
          <Link to={`/shop`} className="hover:text-brand-emerald transition-colors">{language === 'ar' ? 'المتجر' : 'Shop'}</Link>
          {dir === 'rtl' ? <ChevronLeft className="w-4 h-4 mx-3" /> : <ChevronRight className="w-4 h-4 mx-3" />}
          <span className="text-brand-dark dark:text-white font-[800]">{displayName}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F9F9F9] dark:bg-gray-900 rounded-[20px] border border-[#F0F0F0] dark:border-white/5 overflow-hidden mb-8 relative aspect-square flex items-center justify-center p-12 group shadow-xl transition-colors duration-300">
               <button 
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-8 right-8 w-14 h-14 bg-white dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 rounded-full flex items-center justify-center shadow-2xl z-10 transition-all hover:scale-110 active:scale-95"
                >
                  <Heart className={`w-7 h-7 ${isInWishlist(product.id) ? 'fill-current text-red-500' : 'text-[#777] dark:text-gray-400'}`} />
               </button>
               <motion.img 
                 key={currentImageIndex}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 src={images[currentImageIndex]} 
                 alt={displayName} 
                 className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 group-hover:scale-110" 
               />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-28 h-28 shrink-0 border-4 rounded-[16px] overflow-hidden bg-[#F9F9F9] dark:bg-gray-900 p-3 flex items-center justify-center transition-all ${currentImageIndex === idx ? 'border-brand-emerald shadow-xl' : 'border-transparent dark:border-white/5 hover:border-[#CCC] dark:hover:border-white/20'}`}
                >
                  <img src={img} alt="" className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-0">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="bg-brand-emerald/10 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-brand-emerald/20">
                <span className="text-brand-emerald dark:text-emerald-400 text-[14px] font-[900] tracking-widest uppercase">{displayCategory}</span>
              </div>
            </div>
            <h1 className="text-[36px] md:text-[52px] font-[900] text-brand-dark dark:text-white mb-6 leading-[1.1]">{displayName}</h1>
            
            <div className="flex items-center gap-8 mb-10">
              <div className="flex text-brand-gold gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < (product.rating || 5) ? 'fill-current' : 'text-gray-200 dark:text-gray-700'}`} />
                ))}
              </div>
              <span className="text-[#777] dark:text-gray-400 text-[16px] font-[700] hover:text-brand-emerald transition-colors cursor-pointer decoration-brand-emerald/20 underline underline-offset-4">
                {language === 'ar' ? '٤٢ تقييماً معتمداً' : '42 Certified Reviews'}
              </span>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-6">
                <div className="text-[40px] font-[900] text-brand-emerald dark:text-emerald-400 flex items-center bg-[#FDFBF7] dark:bg-gray-900 px-8 py-6 rounded-[16px] border-2 border-[#F0E6D2] dark:border-white/5 shadow-xl transition-all" dir="ltr">
                  {product.price} <span className="text-[20px] ml-1.5 font-[800]">SAR</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] text-gray-400 line-through font-[700] opacity-70">{(parseFloat(product.price) * 1.3).toFixed(2)} SAR</span>
                  <span className="bg-red-500 text-white text-[13px] font-[900] px-3 py-1 rounded-full text-center mt-1">
                    {language === 'ar' ? 'وفر ٣٠٪' : 'SAVE 30%'}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[#444] dark:text-gray-300 text-[19px] leading-[1.8] mb-12 font-[500] border-l-4 border-brand-gold dark:border-emerald-600 pl-6 italic">
              " {displayDesc} "
            </p>

            <div className="mb-12 p-8 bg-[#F9F9F9] dark:bg-gray-900 rounded-[20px] border border-[#F0F0F0] dark:border-white/5 shadow-inner transition-colors duration-300">
              <div className="flex items-center gap-8 mb-8">
                <span className="text-[18px] font-[900] text-brand-dark dark:text-white uppercase tracking-tight">
                   {language === 'ar' ? 'الكمية:' : 'Quantity:'}
                </span>
                <div className="flex items-center border-2 border-[#EAE5DD] dark:border-white/10 rounded-[12px] bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-14 h-14 flex items-center justify-center text-[28px] text-[#555] dark:text-gray-400 hover:bg-brand-beige dark:hover:bg-gray-700 transition-colors font-[900]">-</button>
                  <span className="w-14 text-center font-[900] text-[20px] text-brand-dark dark:text-white">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-14 h-14 flex items-center justify-center text-[28px] text-[#555] dark:text-gray-400 hover:bg-brand-beige dark:hover:bg-gray-700 transition-colors font-[900]">+</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-[1.5] bg-brand-emerald dark:bg-emerald-600 text-white py-6 px-10 rounded-[12px] text-[20px] font-[900] hover:bg-brand-emerald-light transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-4"
                >
                  <ShoppingCart className="w-6 h-6" /> {language === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
                </button>
                <button 
                  className="flex-1 bg-white dark:bg-gray-800 text-brand-dark dark:text-white py-6 px-10 rounded-[12px] text-[20px] font-[900] border-2 border-brand-dark dark:border-white/20 hover:bg-brand-dark hover:text-white dark:hover:bg-white dark:hover:text-brand-dark transition-all active:scale-[0.98] flex items-center justify-center gap-4"
                >
                  <ShoppingBag className="w-6 h-6" /> {language === 'ar' ? 'شراء الآن' : 'Buy Now'}
                </button>
              </div>
            </div>

            {/* Benefits Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-5 p-5 bg-white dark:bg-gray-900 rounded-[16px] border border-brand-emerald/20 dark:border-white/5 shadow-md">
                <ShieldCheck className="w-10 h-10 text-brand-emerald dark:text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-[17px] font-[900] text-brand-dark dark:text-white mb-1">{language === 'ar' ? 'ضمان الجودة' : 'Quality Guarantee'}</h4>
                  <p className="text-[14px] text-gray-500 font-[600]">{language === 'ar' ? 'منتج سعودي أصلي ١٠٠٪' : '100% Authentic Saudi Product'}</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 bg-white dark:bg-gray-900 rounded-[16px] border border-brand-gold/20 dark:border-white/5 shadow-md">
                <Truck className="w-10 h-10 text-brand-gold shrink-0" />
                <div>
                  <h4 className="text-[17px] font-[900] text-brand-dark dark:text-white mb-1">{language === 'ar' ? 'توصيل سريع' : 'Fast Shipping'}</h4>
                  <p className="text-[14px] text-gray-500 font-[600]">{language === 'ar' ? 'لكافة مدن المملكة' : 'To all Saudi cities'}</p>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-8 pt-10 border-t border-[#F0F0F0] dark:border-white/5">
              <span className="text-[17px] font-[900] text-brand-dark dark:text-white flex items-center gap-2">
                <Share2 className="w-5 h-5"/> {language === 'ar' ? 'مشاركة هذا المنتج:' : 'Share Product:'}
              </span>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-[#F5F2ED] dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-[#3b5998] hover:text-white transition-all hover:-translate-y-1"><Facebook className="w-6 h-6" /></button>
                <button className="w-12 h-12 rounded-full bg-[#F5F2ED] dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-all hover:-translate-y-1"><Twitter className="w-6 h-6" /></button>
                <button className="w-12 h-12 rounded-full bg-[#F5F2ED] dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-[#E1306C] hover:text-white transition-all hover:-translate-y-1"><Instagram className="w-6 h-6" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs */}
        <div className="mt-32">
          <div className="flex border-b-2 border-gray-100 dark:border-white/5 overflow-x-auto no-scrollbar scroll-smooth">
            {['description', 'ingredients', 'usage'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-8 px-12 text-[22px] font-[900] whitespace-nowrap transition-all relative ${activeTab === tab ? 'text-brand-emerald' : 'text-[#999] hover:text-brand-dark dark:hover:text-white'}`}
              >
                {tab === 'description' 
                  ? (language === 'ar' ? 'الوصف التفصيلي' : 'Detailed Description') 
                  : tab === 'ingredients' 
                    ? (language === 'ar' ? 'المكونات الفعالة' : 'Active Ingredients') 
                    : (language === 'ar' ? 'طريقة الاستخدام' : 'How to Use')}
                {activeTab === tab && (
                  <motion.div layoutId="activeTabUnderline" className="absolute bottom-[-2px] left-0 right-0 h-[6px] bg-brand-emerald dark:bg-emerald-600 rounded-full z-10" />
                )}
              </button>
            ))}
          </div>
          
          <div className="py-16 px-8 md:px-16 bg-white dark:bg-gray-900 border border-t-0 border-[#F0F0F0] dark:border-white/5 rounded-b-[24px] shadow-2xl transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[#555] dark:text-gray-300 text-[18px] leading-[2.2] font-[500] max-w-4xl mx-auto"
              >
                {activeTab === 'description' && (
                  <div className="space-y-8">
                    <p className="text-[24px] text-brand-dark dark:text-white font-[900] mb-6">
                       {language === 'ar' ? `لماذا تختارين ${displayName}؟` : `Why choose ${displayName}?`}
                    </p>
                    <p>{displayLongDesc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                      <div className="p-6 bg-brand-emerald/5 dark:bg-emerald-500/5 rounded-2xl border-l-4 border-brand-emerald">
                        <span className="font-[900] text-brand-emerald dark:text-emerald-400 block mb-3 uppercase tracking-wider text-[15px]">
                           {language === 'ar' ? 'النتائج المتوقعة:' : 'Expected Results:'}
                        </span>
                        <ul className="list-disc list-inside space-y-2 text-[17px] font-[600]">
                          <li>{language === 'ar' ? 'ترطيب عميق يدوم طوال اليوم' : 'Deep hydration that lasts all day'}</li>
                          <li>{language === 'ar' ? 'بشرة ناعمة بملمس مخملي' : 'Soft skin with a velvet feel'}</li>
                          <li>{language === 'ar' ? 'حماية فائقة من الجفاف' : 'Superior protection from dryness'}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'ingredients' && (
                  <div className="space-y-8">
                    <p className="text-[20px] font-[900] text-brand-dark dark:text-white mb-6 uppercase tracking-tight">
                       {language === 'ar' ? 'تركيبة غنية وصافية:' : 'Rich and Pure Formula:'}
                    </p>
                    <div className="bg-[#FDFBF7] dark:bg-gray-800 p-8 rounded-2xl border-2 border-dashed border-[#F0E6D2] dark:border-white/10 relative">
                       <p className="relative z-10">{displayIngredients}</p>
                       <div className="absolute top-4 right-4 opacity-10"><Leaf className="w-12 h-12" /></div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8">
                      <div className="flex items-center gap-2 text-[15px] font-[900] text-brand-emerald dark:text-emerald-400 bg-brand-emerald/10 dark:bg-emerald-500/10 px-6 py-3 rounded-full border border-brand-emerald/20">
                        <Droplet className="w-5 h-5" /> {language === 'ar' ? 'تركيبة مختبرة طبياً' : 'Dermatologically Tested'}
                      </div>
                      <div className="flex items-center gap-2 text-[15px] font-[900] text-brand-emerald dark:text-emerald-400 bg-brand-emerald/10 dark:bg-emerald-500/10 px-6 py-3 rounded-full border border-brand-emerald/20">
                        <Leaf className="w-5 h-5" /> {language === 'ar' ? 'خالي من المواد الكيميائية الضارة' : 'Free from Harmful Chemicals'}
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'usage' && (
                  <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { step: 1, text_ar: "نظفي المنطقة المستهدفة وجففيها بلطف.", text_en: "Clean the target area and dry it gently." },
                        { step: 2, text_ar: displayUsage, text_en: displayUsage },
                        { step: 3, text_ar: "استخدميه يومياً قبل النوم لأفضل النتائج.", text_en: "Use it daily before bed for the best results." }
                      ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-white/5">
                           <div className="w-12 h-12 bg-brand-emerald text-white rounded-full flex items-center justify-center font-[900] text-xl mb-4 shadow-lg">{s.step}</div>
                           <p className="font-[700] text-brand-dark dark:text-white leading-relaxed">{language === 'ar' ? s.text_ar : s.text_en}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-20 border-t-4 border-gray-50 dark:border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="text-center md:text-right">
                <h2 className="text-[36px] font-[900] text-brand-dark dark:text-white mb-4">
                   {language === 'ar' ? 'منتجات قد تعجبكِ أيضاً' : 'Products You May Also Like'}
                </h2>
                <div className="h-2 w-32 bg-brand-gold rounded-full mx-auto md:mx-0"></div>
              </div>
              <Link to="/shop" className="text-brand-emerald dark:text-emerald-400 font-[900] text-[20px] hover:underline flex items-center gap-3 group">
                {language === 'ar' ? 'تصفح الكل' : 'View All'} 
                {dir === 'rtl' ? <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" /> : <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group bg-white dark:bg-gray-900 border border-[#F0F0F0] dark:border-white/5 rounded-[20px] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-3">
                  <div className="aspect-[4/5] bg-[#F9F9F9] dark:bg-gray-800 p-10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-emerald opacity-0 group-hover:opacity-[0.05] transition-opacity"></div>
                    <img src={p.image} alt={language === 'en' ? p.name_en : p.name} className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[12px] font-[900] text-brand-gold mb-2 uppercase tracking-widest leading-none">
                      {language === 'en' ? p.category_en : p.category}
                    </span>
                    <h3 className="font-[900] text-[18px] text-brand-dark dark:text-white mb-6 line-clamp-2 leading-[1.4] group-hover:text-brand-emerald transition-colors">
                      {language === 'en' ? p.name_en : p.name}
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50 dark:border-white/5">
                      <div className="text-[22px] font-[900] text-brand-emerald dark:text-emerald-400" dir="ltr">
                        {p.price} <span className="text-[14px] ml-1">SAR</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl border-2 border-brand-gold text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all flex items-center justify-center">
                        {dir === 'rtl' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5 font-bold" />}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Global Showcase */}
        <div className="mt-32 pt-32 border-t-8 border-gray-50 dark:border-white/10">
          <div className="text-center mb-20">
            <h2 className="text-[40px] md:text-[56px] font-[900] text-brand-dark dark:text-white mb-6 uppercase tracking-tight">
               {language === 'ar' ? 'تشكيلة الهارون الحصرية' : 'Exclusive Al Harun Collection'}
            </h2>
            <p className="text-[#666] dark:text-gray-400 max-w-3xl mx-auto text-[19px] font-[500] leading-relaxed">
               {language === 'ar' 
                 ? 'ارتقي بروتين العناية الخاص بكِ مع مجموعتنا الكاملة المصممة لتمنحكِ الترطيب الفائق والرفاهية التي تستحقينها.' 
                 : 'Elevate your care routine with our complete collection designed to give you the ultimate hydration and luxury you deserve.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group relative bg-[#FDFBF7] dark:bg-gray-800 rounded-[20px] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-3">
                  <div className="aspect-square bg-white dark:bg-gray-900 p-10 flex items-center justify-center relative overflow-hidden m-2 rounded-[16px]">
                    <img src={p.image} alt={language === 'en' ? p.name_en : p.name} className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8 pb-10 flex flex-col items-center text-center">
                    <h3 className="font-[900] text-[19px] text-brand-dark dark:text-white mb-4 line-clamp-2 leading-[1.4] h-[3.5em] flex items-center justify-center">
                      {language === 'en' ? p.name_en : p.name}
                    </h3>
                    <div className="text-[24px] font-[900] text-brand-emerald dark:text-emerald-400" dir="ltr">
                      {p.price} <span className="text-[14px] ml-1">SAR</span>
                    </div>
                  </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/shop" 
              className="inline-block bg-brand-dark dark:bg-emerald-700 text-white py-6 px-16 rounded-full text-[20px] font-[900] shadow-2xl hover:bg-black dark:hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95"
            >
              {language === 'ar' ? 'استكشفي كامل المتجر' : 'Explore Full Store'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
