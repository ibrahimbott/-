import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useApp } from "../context/AppContext";
import { motion, AnimatePresence } from "motion/react";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();
  const { t, language, dir } = useApp();

  const formattedTotal = cartTotal.toFixed(2);
  const isFreeShipping = cartTotal >= 200;
  const missingForFreeShipping = isFreeShipping ? 0 : 200 - cartTotal;

  if (cart.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark py-32 flex flex-col items-center justify-center text-center px-5 transition-colors duration-300"
      >
        <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-[#F0E6D2] dark:border-white/5 flex items-center justify-center mb-8 text-gray-300 dark:text-gray-600">
           <ShoppingBag className="w-14 h-14" />
        </div>
        <h2 className="text-[32px] font-[900] text-brand-dark dark:text-white mb-4">
          {language === 'ar' ? 'سلة المشتريات فارغة' : 'Your Cart is Empty'}
        </h2>
        <p className="text-[#555] dark:text-gray-400 text-[17px] mb-10 max-w-sm font-[500]">
          {language === 'ar' 
            ? 'لم تقومي بإضافة أي منتجات إلى سلة المشتريات بعد. اكتشفي منتجاتنا المتميزة الآن.' 
            : 'You haven\'t added any products to your cart yet. Discover our premium products now.'}
        </p>
        <Link to="/shop" className="bg-brand-emerald dark:bg-emerald-600 text-white px-10 py-4 rounded-[4px] font-[800] text-[17px] hover:bg-brand-emerald-light transition-all shadow-lg active:scale-95">
          {language === 'ar' ? 'ابدئي التسوق' : 'Start Shopping'}
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark py-12 lg:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1 className="text-[36px] font-[900] text-brand-dark dark:text-white mb-10">
          {language === 'ar' ? `سلة المشتريات (${cartCount})` : `Shopping Cart (${cartCount})`}
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            {/* Free Shipping Progress */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-[12px] border border-[#F0E6D2] dark:border-white/5 mb-8 shadow-sm transition-colors duration-300">
              <div className="flex justify-between text-[15px] font-[700] mb-3">
                <span className={isFreeShipping ? "text-brand-emerald dark:text-emerald-400" : "text-brand-dark dark:text-white"}>
                  {isFreeShipping 
                    ? (language === 'ar' ? "مبارك! لقد حصلتِ على شحن مجاني 🚚" : "Congrats! You got free shipping 🚚") 
                    : (language === 'ar' 
                        ? <span>باقي <span dir="ltr"> {missingForFreeShipping.toFixed(2)} ر.س </span> للحصول على شحن مجاني</span>
                        : <span>Only <span dir="ltr"> {missingForFreeShipping.toFixed(2)} SAR </span> left for free shipping</span>
                      )
                  }
                </span>
              </div>
              <div className="h-2.5 w-full bg-[#F0F0F0] dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (cartTotal / 200) * 100)}%` }}
                  className={`h-full transition-all duration-500 rounded-full ${isFreeShipping ? 'bg-brand-emerald' : 'bg-brand-gold'}`}
                ></motion.div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] shadow-sm overflow-hidden transition-colors duration-300">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div 
                    key={item.id} 
                    exit={{ opacity: 0, x: -20 }}
                    layout
                    className="flex flex-col sm:flex-row items-center gap-6 p-6 border-b border-[#F0F0F0] dark:border-white/5 last:border-0 relative group"
                  >
                    <Link to={`/product/${item.id}`} className="w-28 h-28 shrink-0 bg-[#F9F9F9] dark:bg-gray-800 rounded-[12px] border border-[#EAE5DD] dark:border-white/10 p-3 flex items-center justify-center hover:border-brand-emerald transition-colors">
                      <img src={item.image} alt={language === 'en' ? item.name_en : item.name} className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                    </Link>
                    
                    <div className="flex-1 text-center sm:text-right">
                      <span className="text-[12px] font-[700] text-brand-gold mb-1 block uppercase tracking-wider">
                        {language === 'en' ? item.category_en : item.category}
                      </span>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-[800] text-[18px] text-brand-dark dark:text-white mb-2 hover:text-brand-emerald transition-colors">
                          {language === 'en' ? item.name_en : item.name}
                        </h3>
                      </Link>
                      <div className="text-[20px] font-[900] text-brand-emerald dark:text-emerald-400" dir="ltr">
                        {item.price} <span className="text-[14px] ml-1">SAR</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-4 w-full sm:w-auto">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-4 left-4 sm:static text-gray-400 hover:text-red-500 p-2 sm:p-0 transition-colors bg-gray-50 dark:bg-gray-800 sm:bg-transparent rounded-full sm:rounded-none"
                        aria-label="Remove Item"
                      >
                        <Trash2 className="w-5 h-5 sm:w-5 sm:h-5" />
                      </button>
                      
                      <div className="flex items-center justify-center sm:justify-start border border-[#EAE5DD] dark:border-white/10 rounded-[8px] bg-white dark:bg-gray-800 w-[130px] self-center sm:self-auto overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-[45px] h-[45px] flex items-center justify-center text-[#555] dark:text-gray-400 hover:bg-[#F9F9F9] dark:hover:bg-gray-700 transition-colors font-bold text-xl">-</button>
                        <span className="flex-1 text-center font-[800] text-[17px] text-brand-dark dark:text-white border-x border-[#EAE5DD] dark:border-white/10">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-[45px] h-[45px] flex items-center justify-center text-[#555] dark:text-gray-400 hover:bg-[#F9F9F9] dark:hover:bg-gray-700 transition-colors font-bold text-xl">+</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <Link to="/shop" className="inline-flex items-center gap-2 text-brand-emerald dark:text-emerald-400 font-[700] text-[17px] mt-8 hover:underline">
              {dir === 'rtl' ? <ArrowRight className="w-5 h-5" /> : <ArrowRight className="w-5 h-5 rotate-180" />} 
              {language === 'ar' ? 'العودة للتسوق' : 'Continue Shopping'}
            </Link>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-gray-900 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] p-8 shadow-xl sticky top-24 transition-colors duration-300">
              <h2 className="text-[24px] font-[900] text-brand-dark dark:text-white mb-8 border-b border-[#F0F0F0] dark:border-white/10 pb-4">
                {language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
              </h2>
              
              <div className="space-y-5 mb-8 text-[16px] font-[600]">
                <div className="flex justify-between">
                  <span className="text-[#555] dark:text-gray-400">{language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span className="font-[800] text-brand-dark dark:text-white" dir="ltr">{formattedTotal} SAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555] dark:text-gray-400">{language === 'ar' ? 'الشحن' : 'Shipping'}</span>
                  <span className="font-[800] text-brand-dark dark:text-white">
                    {isFreeShipping 
                      ? (language === 'ar' ? 'مجاني' : 'Free') 
                      : (language === 'ar' ? 'يُحسب لاحقاً' : 'Calculated later')}
                  </span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-8 flex gap-2">
                <input 
                  type="text" 
                  placeholder={language === 'ar' ? "كوبون الخصم" : "Promo Code"} 
                  className="flex-1 border border-[#EAE5DD] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 rounded-[6px] px-4 py-3 text-[15px] outline-none focus:border-brand-emerald dark:focus:border-emerald-600 dark:text-white transition-colors" 
                />
                <button className="bg-brand-dark dark:bg-gray-700 text-white px-6 py-3 rounded-[6px] text-[15px] font-[700] hover:bg-black dark:hover:bg-gray-600 transition-all">
                  {language === 'ar' ? 'تطبيق' : 'Apply'}
                </button>
              </div>

              <div className="flex justify-between items-center border-t border-[#F0F0F0] dark:border-white/10 pt-8 mb-10 text-[24px] font-[900]">
                <span className="text-brand-dark dark:text-white">{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
                <span className="text-brand-emerald dark:text-emerald-400" dir="ltr">{formattedTotal} SAR</span>
              </div>

              <Link to="/checkout" className="w-full block bg-brand-emerald dark:bg-emerald-600 text-white text-center py-5 rounded-[8px] text-[18px] font-[900] hover:bg-brand-emerald-light transition-all shadow-xl active:scale-[0.98]">
                {language === 'ar' ? 'متابعة الدفع' : 'Secure Checkout'}
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
