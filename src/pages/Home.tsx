import heroBanner from '../assets/images/hero-banner.jpeg';
import productFlatlay from '../assets/images/product-flatlay.jpeg';
import pumpBottle2 from '../assets/images/pump-bottle-alt.jpeg';
import heroBanner2 from '../assets/images/hero-banner-2.jpeg';
import lipBalm2 from '../assets/images/lip-balm-alt.jpeg';

import { motion } from "motion/react";
import { Star, ShieldCheck, Truck, Droplet, Leaf, Eye, Instagram, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";
import { useStore } from "../context/StoreContext";
import { useApp } from "../context/AppContext";
import { FlashSaleTimer } from "../components/FlashSaleTimer";

export function Home() {
  const { addToCart } = useCart();
  const { setQuickViewProduct, toggleWishlist, isInWishlist } = useStore();
  const { t, language, dir } = useApp();

  const features = [
    { 
      title: language === 'ar' ? "100% ترطيب طبيعي" : "100% Natural Hydration", 
      desc: language === 'ar' ? "مستخلصات لطيفة وآمنة" : "Gentle and safe extracts", 
      icon: <Droplet className="w-8 h-8 text-brand-emerald dark:text-emerald-400" /> 
    },
    { 
      title: language === 'ar' ? "جودة سعودية عالية" : "Premium Saudi Quality", 
      desc: language === 'ar' ? "صُنع بكل فخر في المملكة" : "Proudly made in the Kingdom", 
      icon: <ShieldCheck className="w-8 h-8 text-brand-emerald dark:text-emerald-400" /> 
    },
    { 
      title: language === 'ar' ? "شحن سريع وتوصيل" : "Fast Shipping & Delivery", 
      desc: language === 'ar' ? "لكافة مناطق المملكة" : "To all regions of the Kingdom", 
      icon: <Truck className="w-8 h-8 text-brand-emerald dark:text-emerald-400" /> 
    },
    { 
      title: language === 'ar' ? "خالي من المواد الضارة" : "Free from Harmful Substances", 
      desc: language === 'ar' ? "مصدق ومختبر طبياً" : "Certified and medically tested", 
      icon: <Leaf className="w-8 h-8 text-brand-emerald dark:text-emerald-400" /> 
    },
  ];

  const testimonials = [
    { 
      name: language === 'ar' ? "ريم العتيبي" : "Reem Al-Otaibi", 
      text: language === 'ar' ? "أفضل لوشن جربته لبشرتي الجافة، الترطيب يدوم ساعات طويلة ورائحته جداً خفيفة وترميم الفازلين الأصلي واضح." : "The best lotion I've tried for my dry skin. The hydration lasts for many hours, the scent is very light, and the restoration of the original Vaseline is clear.", 
      rating: 5, 
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" 
    },
    { 
      name: language === 'ar' ? "نورة عبدالله" : "Noura Abdullah", 
      text: language === 'ar' ? "الفازلين الأصلي من الهارون لا يُعلى عليه. أستخدمه دائماً لترطيب الشفاه والأكواع." : "Original Vaseline from Al Harun is second to none. I always use it to moisturize lips and elbows.", 
      rating: 5, 
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" 
    },
    { 
      name: language === 'ar' ? "أمل الشهراني" : "Amal Al-Shahrani", 
      text: language === 'ar' ? "جودة المنتجات ممتازة جداً وتغليفها راقي وهدايا للطلب الأول شيء يفتح النفس." : "The quality of the products is excellent, the packaging is elegant, and the gifts for the first order are very heart-warming.", 
      rating: 4, 
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200&h=200" 
    },
  ];

  return (
    <div className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-[#EAE5DD] dark:from-gray-900 dark:to-brand-dark border-b border-black/5 dark:border-white/5 min-h-[600px] transition-colors duration-300">
        <div className="absolute inset-0 z-0 flex justify-end opacity-80 dark:opacity-20 transition-opacity duration-700">
          <img 
            src={heroBanner} 
            alt="صورة جمالية للعناية بالبشرة" 
            className={`w-full md:w-3/4 h-full object-cover ${dir === 'rtl' ? 'object-left' : 'object-right'}`}
          />
        </div>

        <div className="relative z-10 w-full px-5 md:px-10 flex items-center justify-start py-[80px] max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`max-w-xl flex flex-col justify-center bg-white/50 dark:bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-[20px] border border-white/60 dark:border-white/10 shadow-2xl transition-colors duration-300 ${dir === 'ltr' ? 'text-left items-start' : 'text-right items-end'}`}
          >
            <span className="inline-block py-1 px-3 bg-[#064E3B1A] dark:bg-emerald-500/20 text-brand-emerald dark:text-emerald-400 font-[700] text-[12px] mb-4 rounded-[4px] border border-[#064E3B33] dark:border-emerald-500/30">
              {t('home.hero_badge')}
            </span>
            <h1 className="text-[44px] md:text-[68px] font-[900] text-brand-dark dark:text-white leading-[1.05] mb-6">
              {t('home.hero_title')} <br />
              <span className="text-brand-emerald dark:text-emerald-400">{t('home.hero_with')}</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#444] dark:text-gray-300 mb-10 max-w-[450px] leading-[1.7] font-[500]">
              {t('home.hero_desc')}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/shop" className="bg-brand-emerald text-white py-[16px] px-[44px] text-[18px] font-[800] rounded-[6px] border-b-[4px] border-[#043629] flex items-center gap-2 hover:bg-[#043629] transition-all shadow-xl shadow-brand-emerald/20 hover:-translate-y-1 active:translate-y-0">
                {t('common.shop_now')}
              </Link>
              <Link to="/about" className="bg-white dark:bg-gray-800 text-brand-dark dark:text-white py-[16px] px-[36px] text-[18px] font-[800] rounded-[6px] border-2 border-[#EAE5DD] dark:border-white/10 flex items-center gap-2 hover:bg-[#F9F9F9] dark:hover:bg-gray-700 transition-all hover:border-brand-emerald/30">
                {t('common.learn_more')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-[#E6E6E6] dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[42px] font-[900] text-brand-dark dark:text-white mb-3">{t('home.categories_title')}</h2>
            <p className="text-[#666] dark:text-gray-400 text-[17px] font-[600]">{t('home.categories_desc')}</p>
          </div>
          
          <div className="flex flex-wrap gap-5 justify-center">
            {categories.map((category, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={category.id} 
                className="group flex flex-col cursor-pointer w-32 sm:w-48 flex-1 md:flex-none"
              >
                <Link to={`/shop?category=${category.id}`}>
                  <div className="w-full aspect-square bg-[#F9F9F9] dark:bg-gray-800 border border-[#F0F0F0] dark:border-white/5 overflow-hidden rounded-full mb-4 relative drop-shadow-sm transition-colors">
                    <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-emerald/10 transition-colors z-10 duration-200"></div>
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal p-4" />
                  </div>
                  <h3 className="text-[16px] font-[800] text-brand-dark dark:text-white text-center group-hover:text-brand-emerald dark:group-hover:text-emerald-400 transition-colors">
                    {language === 'ar' ? category.name : category.name_en}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-20 bg-[#FDF9F1] dark:bg-gray-950 border-b border-[#F0E6D2] dark:border-white/5 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-center bg-[#F5EDDF] dark:bg-gray-900/50 p-8 md:p-12 rounded-[20px] mb-12 shadow-inner border border-[#F0E6D2] dark:border-white/5"
          >
            <div className={`${dir === 'ltr' ? 'text-center lg:text-left' : 'text-center lg:text-right'}`}>
              <h2 className="text-[32px] md:text-[44px] font-[900] text-brand-dark dark:text-white mb-2 flex items-center justify-center lg:justify-start gap-4">
                {t('home.flash_sale_title')} <span className="animate-pulse text-brand-gold">⚡</span>
              </h2>
              <p className="text-[#444] dark:text-gray-300 text-[18px] md:text-[20px] font-[600]">{t('home.flash_sale_desc')}</p>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col md:flex-row items-center gap-6">
              <span className="text-[17px] font-[800] text-brand-dark dark:text-white bg-white/50 dark:bg-gray-800/50 px-5 py-2 rounded-full border border-brand-gold/30">
                {t('home.flash_sale_ends')}
              </span>
              <FlashSaleTimer />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(4, 8).map((product, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={product.id} 
                className="bg-white dark:bg-gray-900 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] overflow-hidden group hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Discount Badge */}
                <div className="absolute top-3 right-3 bg-red-500 text-white text-[12px] font-[700] px-3 py-1 rounded-full z-10 shadow-lg">
                  -30%
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="w-10 h-10 bg-white dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 rounded-full flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-500 hover:border-red-200 transition-colors shadow-sm"
                  >
                    <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current text-red-500' : 'text-[#777] dark:text-gray-400'}`} />
                  </button>
                  <button 
                    onClick={() => setQuickViewProduct(product)}
                    className="w-10 h-10 bg-white dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-brand-dark dark:hover:text-white transition-colors shadow-sm"
                  >
                    <Eye className="w-5 h-5 text-[#777] dark:text-gray-400" />
                  </button>
                </div>

                <Link to={`/product/${product.id}`} className="block h-[240px] bg-[#F9F9F9] dark:bg-gray-800 relative overflow-hidden flex items-center justify-center p-6 transition-colors">
                  <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-700" />
                </Link>
                <div className="p-6 border-t border-[#F0F0F0] dark:border-white/5 flex flex-col justify-between h-[160px]">
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-[800] text-[17px] text-brand-dark dark:text-white mb-1 line-clamp-1 hover:text-brand-emerald dark:hover:text-emerald-400 transition-colors">
                        {language === 'ar' ? product.name : product.name_en || product.name}
                      </h3>
                    </Link>
                    <div className="flex text-brand-gold mb-2">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} className={`w-3.5 h-3.5 ${i < (product.rating || 5) ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                       ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <div>
                      <div className="text-[13px] text-[#999] dark:text-gray-500 line-through font-[500]" dir="ltr"><span className="icon-saudi_riyal mr-1"></span> {(parseFloat(product.price)*1.3).toFixed(2)}</div>
                      <div className="text-[20px] font-[900] text-red-600 dark:text-red-500 leading-[1]" dir="ltr">
                        <span className="icon-saudi_riyal mr-1"></span>{product.price}
                      </div>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-brand-emerald text-white px-5 py-2.5 rounded-[6px] text-[14px] font-[800] border-b-[3px] border-[#043629] hover:bg-[#043629] transition-all active:translate-y-[2px] active:border-b-0"
                    >
                      {t('common.add_to_cart')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-20 bg-white dark:bg-gray-900 border-b border-[#F0F0F0] dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
             <h2 className="text-[32px] md:text-[40px] font-[900] text-brand-dark dark:text-white mb-4">
               {language === 'ar' ? 'لماذا الهارون؟' : 'Why Al Harun?'}
             </h2>
             <div className="w-20 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F9F9F9] dark:bg-gray-800/50 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl text-brand-emerald mb-6 border border-[#EAE5DD] dark:border-white/10 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-[18px] font-[900] mb-3 text-brand-dark dark:text-white">{feature.title}</h3>
                <p className="text-[15px] text-[#666] dark:text-gray-400 leading-[1.7] font-[500]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-beige dark:bg-brand-dark border-b border-[#EAE5DD] dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[42px] font-[900] text-brand-dark dark:text-white mb-3">
              {language === 'ar' ? 'تجارب عميلاتنا تفخر بها' : 'Customer Experiences We Pride In'}
            </h2>
            <p className="text-[17px] text-[#666] dark:text-gray-400 font-[500]">
              {language === 'ar' ? 'أكثر من مليون عبوة مباعة في المملكة' : 'More than one million units sold in the Kingdom'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-900 p-10 rounded-[20px] border border-[#F0F0F0] dark:border-white/5 relative shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-6 left-6 text-brand-gold/20 dark:text-brand-gold/10">
                   <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="flex text-brand-gold mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-[#555] dark:text-gray-300 text-[17px] italic mb-8 leading-[1.8] font-[500]">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#EAE5DD] dark:border-white/10">
                  <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-emerald/20 dark:border-emerald-500/20" />
                  <div>
                    <h4 className="font-[800] text-[17px] text-brand-dark dark:text-white leading-tight">{testimonial.name}</h4>
                    <span className="text-[13px] text-brand-emerald dark:text-emerald-400 font-[700] flex items-center gap-1 mt-1"><ShieldCheck className="w-4 h-4"/> {language === 'ar' ? 'مشترية موثقة' : 'Verified Buyer'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Instagram */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] font-[900] text-brand-dark dark:text-white mb-4 flex items-center justify-center gap-3">
              <Instagram className="w-8 h-8 text-brand-emerald dark:text-emerald-400" /> {language === 'ar' ? 'الهارون على إنستقرام' : 'Al Harun on Instagram'}
            </h2>
            <p className="text-[#555] dark:text-gray-400 text-[18px] font-[600]">
              {language === 'ar' ? 'شاركنا لحظاتك باستخدام الهاشتاق #الهارون' : 'Share your moments using #AlHarun'}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              productFlatlay,
              pumpBottle2,
              heroBanner2,
              lipBalm2
            ].map((imgSrc, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="aspect-square relative group overflow-hidden bg-white dark:bg-gray-900 border border-[#EAE5DD] dark:border-white/10 rounded-[12px] p-2 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <img src={imgSrc} alt="Instagram post" className="w-full h-full object-cover rounded-[8px] group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-emerald/80 dark:bg-emerald-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center m-2 rounded-[6px] z-10 backdrop-blur-[2px]">
                   <Instagram className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
