import heroBanner from '../assets/images/luxurious-hero-banner-for-arabic-skincare-website-.jpeg';
import productFlatlay from '../assets/images/flat-lay-composition-of-6-different-skincare-produ.jpeg';
import pumpBottle2 from '../assets/images/photorealistic-premium-pump-bottle-of-body-lotion- (1).jpeg';
import heroBanner2 from '../assets/images/luxurious-hero-banner-for-arabic-skincare-website--1.jpeg';
import lipBalm2 from '../assets/images/close-up-studio-photo-of-elegant-lip-balm-tube-sau (1).jpeg';

import { motion } from "motion/react";
import { Star, ShieldCheck, Truck, Droplet, Leaf, Eye, Instagram, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";
import { useStore } from "../context/StoreContext";
import { FlashSaleTimer } from "../components/FlashSaleTimer";

const features = [
  { title: "100% ترطيب طبيعي", desc: "مستخلصات لطيفة وآمنة", icon: <Droplet className="w-8 h-8 text-brand-emerald" /> },
  { title: "جودة سعودية عالية", desc: "صُنع بكل فخر في المملكة", icon: <ShieldCheck className="w-8 h-8 text-brand-emerald" /> },
  { title: "شحن سريع وتوصيل", desc: "لكافة مناطق المملكة", icon: <Truck className="w-8 h-8 text-brand-emerald" /> },
  { title: "خالي من المواد الضارة", desc: "مصدق ومختبر طبياً", icon: <Leaf className="w-8 h-8 text-brand-emerald" /> },
];

const testimonials = [
  { name: "ريم العتيبي", text: "أفضل لوشن جربته لبشرتي الجافة، الترطيب يدوم ساعات طويلة ورائحته جداً خفيفة وترميم الفازلين الأصلي واضح.", rating: 5, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "نورة عبدالله", text: "الفازلين الأصلي من الهارون لا يُعلى عليه. أستخدمه دائماً لترطيب الشفاه والأكواع.", rating: 5, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "أمل الشهراني", text: "جودة المنتجات ممتازة جداً وتغليفها راقي وهدايا للطلب الأول شيء يفتح النفس.", rating: 4, img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200&h=200" },
];

export function Home() {
  const { addToCart } = useCart();
  const { setQuickViewProduct, toggleWishlist, isInWishlist } = useStore();

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-[#EAE5DD] border-b border-black/5 min-h-[500px]">
        <div className="absolute inset-0 z-0 flex md:justify-end justify-center mix-blend-multiply opacity-30">
          <img 
            src={heroBanner} 
            alt="صورة جمالية للعناية بالبشرة" 
            className="w-full md:w-2/3 h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-full px-5 md:px-10 flex items-center justify-start py-[80px] max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl flex flex-col justify-center bg-white/50 backdrop-blur-md p-8 rounded-[4px] border border-white/60 shadow-sm"
          >
            <span className="inline-block py-1 px-3 bg-[#064E3B1A] text-brand-emerald font-[700] text-[12px] mb-4 rounded-[4px] self-start border border-[#064E3B33]">
              رؤية ٢٠٣٠ | العلامة الأولى في المملكة
            </span>
            <h1 className="text-[40px] sm:text-[52px] font-[800] text-brand-dark leading-[1.1] mb-4">
              ترطيب عميق يدوم طويلاً <br />
              <span className="text-brand-emerald">مع الهارون</span>
            </h1>
            <p className="text-[16px] text-[#555] mb-8 max-w-[400px] leading-[1.6]">
              منتجات عناية شخصية سعودية فاخرة. فازلين أصلي وكريمات ترطيب بتركيبة متطورة تمنحك ترطيباً يدوم ٢٤ ساعة.
            </p>
            <div className="flex gap-4">
              <Link to="/shop" className="bg-brand-emerald text-white py-[14px] px-[40px] text-[16px] font-[600] rounded-[2px] border-b-[3px] border-[#043629] flex items-center gap-2 hover:bg-[#043629] transition-colors shadow-lg shadow-brand-emerald/20">
                تسوق الآن
              </Link>
              <Link to="/about" className="bg-white text-brand-dark py-[14px] px-[30px] text-[16px] font-[600] rounded-[2px] border border-[#EAE5DD] flex items-center gap-2 hover:bg-[#F9F9F9] transition-colors">
                تعرف علينا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-[800] text-brand-dark mb-2">تسوقي حسب الفئة</h2>
            <p className="text-[#777] text-[15px]">أرقى تشكيلات الترطيب الفاخر لمختلف احتياجاتك</p>
          </div>
          
          <div className="flex flex-wrap gap-5 justify-center">
            {categories.map((category, idx) => (
              <motion.div 
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                
                key={category.name} 
                className="group flex flex-col cursor-pointer w-32 sm:w-48 flex-1 md:flex-none"
              >
                <Link to={`/shop?category=${category.id}`}>
                  <div className="w-full aspect-square bg-[#F9F9F9] border border-[#F0F0F0] overflow-hidden rounded-full mb-4 relative drop-shadow-sm">
                    <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-emerald/10 transition-colors z-10 duration-200"></div>
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 mix-blend-multiply p-4" />
                  </div>
                  <h3 className="text-[15px] font-[700] text-brand-dark text-center group-hover:text-brand-emerald transition-colors">{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-16 bg-[#FDF9F1] border-b border-[#F0E6D2]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center bg-[#F5EDDF] p-6 rounded-[8px] mb-10">
            <div>
              <h2 className="text-[28px] font-[800] text-brand-dark mb-1 flex items-center gap-2">
                عرض حصري لفترة محدودة ⚡
              </h2>
              <p className="text-[#555] text-[15px]">خصم حتى 30% على منتجات العناية المكثفة</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span className="text-[14px] font-[700] text-brand-dark">ينتهي العرض خلال:</span>
              <FlashSaleTimer />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4, 8).map((product, idx) => (
              <motion.div 
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                
                key={product.id} 
                className="bg-white border border-[#F0F0F0] rounded-[4px] overflow-hidden group hover:shadow-xl transition-shadow relative"
              >
                {/* Discount Badge */}
                <div className="absolute top-3 right-3 bg-red-500 text-white text-[12px] font-[700] px-2 py-1 rounded-[2px] z-10">
                  -30%
                </div>

                {/* Quick Actions */}
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
                <div className="p-4 border-t border-[#F0F0F0] flex flex-col justify-between h-[150px]">
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
                  <div className="flex justify-between items-center mt-auto">
                    <div>
                      <div className="text-[12px] text-[#999] line-through font-[500]" dir="ltr"><span className="icon-saudi_riyal mr-1"></span> {(parseFloat(product.price)*1.3).toFixed(2)}</div>
                      <div className="text-[18px] font-[800] text-red-600 leading-[1]" dir="ltr">
                        <span className="icon-saudi_riyal mr-1"></span>{product.price}
                      </div>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-brand-emerald text-white px-4 py-2 rounded-[2px] text-[13px] font-[600] border-b-[2px] border-[#043629] hover:bg-[#043629] transition-colors"
                    >
                      أضف للسلة
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-16 bg-white border-b border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10">
             <h2 className="text-[28px] font-[800] text-brand-dark mb-2">لماذا الهارون؟</h2>
             <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[#F9F9F9] border border-[#F0F0F0] rounded-[4px] p-6 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-brand-emerald mb-4 border border-[#EAE5DD] shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-[16px] font-[800] mb-2 text-brand-dark">{feature.title}</h3>
                <p className="text-[14px] text-[#555] leading-[1.6]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-brand-beige border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[28px] font-[800] text-brand-dark mb-2">المنتجات الأكثر مبيعاً</h2>
            <Link to="/shop" className="text-brand-gold text-[14px] font-[600] cursor-pointer hover:underline">
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, idx) => (
              <motion.div 
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                
                key={product.id} 
                className="bg-white border border-[#F0F0F0] rounded-[4px] overflow-hidden group hover:shadow-xl transition-shadow relative"
              >
                {/* Quick Actions */}
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
                <div className="p-4 border-t border-[#F0F0F0] flex flex-col justify-between h-[150px]">
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-[700] text-[15px] mb-1 line-clamp-1 hover:text-brand-emerald transition-colors">{product.name}</h3>
                    </Link>
                     <p className="text-[12px] text-[#777] mb-2 leading-[1.4] line-clamp-2">{product.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="text-[18px] font-[800] text-brand-emerald leading-[1]" dir="ltr">
                      <span className="icon-saudi_riyal mr-1 text-[18px]"></span>{product.price}
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-transparent border border-brand-emerald text-brand-emerald w-8 h-8 rounded-full flex items-center justify-center text-[20px] cursor-pointer font-bold hover:bg-brand-emerald hover:text-white transition-colors leading-[0] pb-1"
                    >
                      +
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-[800] text-brand-dark mb-2">تجارب عميلاتنا تفخر بها</h2>
            <p className="text-[15px] text-[#555]">أكثر من مليون عبوة مباعة في المملكة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-[#F9F9F9] p-8 rounded-[4px] border border-[#F0F0F0] relative shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-6 left-6 text-brand-gold/20">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="flex text-brand-gold mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#555] text-[15px] italic mb-6 leading-[1.8]">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-5 border-t border-[#EAE5DD]">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#EAE5DD]" />
                  <div>
                    <h4 className="font-[700] text-[15px] text-brand-dark">{testimonial.name}</h4>
                    <span className="text-[12px] text-brand-emerald font-[600] flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> مشترية موثقة</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Instagram */}
      <section className="py-16 bg-[#FDF9F1]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-8">
            <h2 className="text-[28px] font-[800] text-brand-dark mb-2 flex items-center justify-center gap-2">
              <Instagram className="w-6 h-6 text-brand-emerald" /> الهارون على إنستقرام
            </h2>
            <p className="text-[#555] text-[15px] font-[600]">شاركنا لحظاتك باستخدام الهاشتاق #الهارون</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              productFlatlay,
              pumpBottle2,
              heroBanner2,
              lipBalm2
            ].map((imgSrc, idx) => (
              <div key={idx} className="aspect-square relative group overflow-hidden bg-white border border-[#EAE5DD] rounded-[4px] p-2 cursor-pointer shadow-sm">
                <img src={imgSrc} alt="Instagram post" className="w-full h-full object-cover rounded-[2px] group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-brand-emerald/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center m-2 rounded-[2px] z-10">
                   <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
