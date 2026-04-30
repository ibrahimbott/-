import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, Navigation, AlertCircle, ArrowRight, Wallet, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useApp } from "../context/AppContext";
import { motion } from "motion/react";

export function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const { t, language, dir } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [shippingCost, setShippingCost] = useState(0);

  const formattedSubtotal = cartTotal.toFixed(2);
  const isFreeShipping = cartTotal >= 200;
  const finalShippingCost = isFreeShipping ? 0 : shippingCost;
  const formattedTotal = (cartTotal + finalShippingCost).toFixed(2);

  if (cart.length === 0 && step !== 3) {
    navigate('/shop');
    return null;
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (step === 3) {
    return (
      <div className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark py-32 flex flex-col items-center justify-center text-center px-5 transition-colors duration-300">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-32 h-32 bg-brand-emerald dark:bg-emerald-600 rounded-full flex items-center justify-center mb-10 shadow-2xl shadow-brand-emerald/20 border-8 border-white dark:border-gray-800"
        >
          <CheckCircle2 className="w-16 h-16 text-white" />
        </motion.div>
        
        <h2 className="text-[36px] md:text-[44px] font-[900] text-brand-dark dark:text-white mb-4">
          {language === 'ar' ? 'تم تأكيد طلبك بنجاح!' : 'Order Confirmed Successfully!'}
        </h2>
        <p className="text-[#555] dark:text-gray-400 text-[18px] mb-2 max-w-md font-[600]">
          {language === 'ar' ? 'شكراً لتسوقك من الهارون. رقم طلبك هو:' : 'Thank you for shopping with Al Harun. Your order number is:'} 
          <span className="font-mono font-[900] text-brand-emerald dark:text-emerald-400 ml-2">#ALH-84920</span>
        </p>
        <p className="text-[#777] dark:text-gray-500 text-[15px] mb-12 font-[500]">
          {language === 'ar' ? 'سيتم إرسال تفاصيل الطلب وتتبع الشحنة إلى بريدك الإلكتروني.' : 'Order details and shipment tracking will be sent to your email.'}
        </p>
        
        <Link to="/shop" className="bg-brand-emerald dark:bg-emerald-600 text-white px-10 py-5 rounded-[4px] font-[800] text-[18px] hover:bg-brand-emerald-light transition-all shadow-xl active:scale-95">
          {language === 'ar' ? 'مواصلة التسوق' : 'Continue Shopping'}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark py-12 lg:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1 className="text-[36px] font-[900] text-brand-dark dark:text-white mb-10 text-center">
          {language === 'ar' ? 'إتمام الطلب' : 'Checkout'}
        </h1>

        <div className="flex flex-col-reverse lg:flex-row gap-12 border-t border-[#F0F0F0] dark:border-white/5 pt-12">
          
          {/* Form Area */}
          <div className="w-full lg:w-3/5">
            {/* Navigation steps */}
            <div className="flex items-center gap-6 mb-12 text-[15px] font-[800]">
               <div className={`flex items-center gap-3 ${step >= 1 ? 'text-brand-emerald dark:text-emerald-400' : 'text-gray-400'}`}>
                 <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-current text-[14px]">1</div>
                 {language === 'ar' ? 'الشحن' : 'Shipping'}
               </div>
               <div className="h-[2px] w-12 bg-[#EAE5DD] dark:bg-gray-800"></div>
               <div className={`flex items-center gap-3 ${step >= 2 ? 'text-brand-emerald dark:text-emerald-400' : 'text-gray-400'}`}>
                 <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-current text-[14px]">2</div>
                 {language === 'ar' ? 'الدفع' : 'Payment'}
               </div>
            </div>

            {step === 1 && (
            <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleShippingSubmit} className="space-y-10">
              {/* Contact Info */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[12px] border border-[#F0F0F0] dark:border-white/5 shadow-sm transition-colors duration-300">
                <h2 className="text-[20px] font-[900] text-brand-dark dark:text-white mb-6 border-b border-[#F0F0F0] dark:border-white/10 pb-3 uppercase tracking-tight">
                  {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
                </h2>
                <div className="space-y-5 text-[15px]">
                  <div>
                    <label className="block text-[#555] dark:text-gray-400 font-[700] mb-2">
                       {language === 'ar' ? 'البريد الإلكتروني أو رقم الهاتف' : 'Email or Phone Number'}
                    </label>
                    <input type="text" className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]" required />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[12px] border border-[#F0F0F0] dark:border-white/5 shadow-sm transition-colors duration-300">
                <h2 className="text-[20px] font-[900] text-brand-dark dark:text-white mb-6 border-b border-[#F0F0F0] dark:border-white/10 pb-3 uppercase tracking-tight">
                  {language === 'ar' ? 'عنوان الشحن' : 'Shipping Address'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
                  <div>
                    <label className="block text-[#555] dark:text-gray-400 font-[700] mb-2">{language === 'ar' ? 'الاسم الأول' : 'First Name'}</label>
                    <input type="text" className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]" required />
                  </div>
                  <div>
                     <label className="block text-[#555] dark:text-gray-400 font-[700] mb-2">{language === 'ar' ? 'اسم العائلة' : 'Last Name'}</label>
                     <input type="text" className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]" required />
                  </div>
                  <div className="md:col-span-2">
                     <label className="block text-[#555] dark:text-gray-400 font-[700] mb-2">{language === 'ar' ? 'المدينة' : 'City'}</label>
                     <select className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]">
                       <option>{language === 'ar' ? 'الرياض' : 'Riyadh'}</option>
                       <option>{language === 'ar' ? 'جدة' : 'Jeddah'}</option>
                       <option>{language === 'ar' ? 'الدمام' : 'Dammam'}</option>
                       <option>{language === 'ar' ? 'مكة المكرمة' : 'Makkah'}</option>
                       <option>{language === 'ar' ? 'المدينة المنورة' : 'Madinah'}</option>
                     </select>
                  </div>
                  <div className="md:col-span-2 relative">
                     <label className="block text-[#555] dark:text-gray-400 font-[700] mb-2">{language === 'ar' ? 'الحي / الشارع / المبنى' : 'District / Street / Building'}</label>
                     <input type="text" className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 pr-12 pl-12 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]" required />
                     <Navigation className={`absolute top-[44px] ${dir === 'rtl' ? 'left-4' : 'right-4'} w-6 h-6 text-[#AAA]`} />
                  </div>
                </div>

                <h3 className="font-[900] text-[18px] text-brand-dark dark:text-white mt-10 mb-6">{language === 'ar' ? 'طريقة الشحن' : 'Shipping Method'}</h3>
                <div className="space-y-4">
                  <label className={`flex items-center gap-4 p-5 border rounded-[12px] cursor-pointer transition-all ${shippingCost === 0 ? 'border-brand-emerald dark:border-emerald-500 bg-brand-emerald/5 dark:bg-emerald-500/10' : 'border-[#EAE5DD] dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                    <input type="radio" name="shipping" className="w-5 h-5 accent-brand-emerald" defaultChecked onChange={() => setShippingCost(0)} />
                    <div className="flex-1">
                      <div className="font-[800] text-[16px] text-brand-dark dark:text-white">
                        {language === 'ar' ? 'شحن عادي (٤-٧ أيام عمل)' : 'Standard Shipping (4-7 working days)'}
                      </div>
                    </div>
                    <div className="font-[900] text-brand-emerald dark:text-emerald-400">{language === 'ar' ? 'مجاناً' : 'Free'}</div>
                  </label>
                  <label className={`flex items-center gap-4 p-5 border rounded-[12px] cursor-pointer transition-all ${shippingCost === 35 ? 'border-brand-emerald dark:border-emerald-500 bg-brand-emerald/5 dark:bg-emerald-500/10' : 'border-[#EAE5DD] dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                    <input type="radio" name="shipping" className="w-5 h-5 accent-brand-emerald" onChange={() => setShippingCost(35)} />
                    <div className="flex-1">
                      <div className="font-[800] text-[16px] text-brand-dark dark:text-white">
                        {language === 'ar' ? 'شحن سريع (١-٣ أيام عمل)' : 'Express Shipping (1-3 working days)'}
                      </div>
                    </div>
                    <div className="font-[900] text-brand-dark dark:text-white" dir="ltr">35.00 SAR</div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <Link to="/cart" className="text-brand-emerald dark:text-emerald-400 font-[800] text-[17px] flex items-center gap-2 hover:underline transition-all">
                  {dir === 'rtl' ? <ArrowRight className="w-5 h-5" /> : <ArrowRight className="w-5 h-5 rotate-180" />} 
                  {language === 'ar' ? 'العودة للسلة' : 'Back to Cart'}
                </Link>
                <button type="submit" className="bg-brand-emerald dark:bg-emerald-600 text-white px-10 py-5 rounded-[8px] font-[900] text-[17px] shadow-xl hover:bg-brand-emerald-light transition-all active:scale-[0.98]">
                  {language === 'ar' ? 'متابعة للدفع' : 'Continue to Payment'}
                </button>
              </div>
            </motion.form>
            )}

            {step === 2 && (
            <motion.form initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handlePaymentSubmit} className="space-y-8">
              
              <div className="bg-[#1A1A1A] dark:bg-black text-white p-6 rounded-[12px] flex items-center justify-between shadow-2xl cursor-pointer hover:scale-[1.01] transition-all border border-white/10 active:scale-[0.98]">
                <div className="font-[900] text-[18px]">Apple Pay</div>
                <div className="w-14 h-9 bg-white rounded-[4px] flex items-center justify-center p-1">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-full" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#EAE5DD] dark:bg-white/10 relative my-10">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FDFBF7] dark:bg-brand-dark px-6 text-[#555] dark:text-gray-500 font-[700] text-[15px]">
                   {language === 'ar' ? 'أو ادفع باستخدام' : 'Or pay with'}
                </span>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-[12px] border border-[#F0F0F0] dark:border-white/5 shadow-sm transition-colors duration-300">
                <h2 className="text-[20px] font-[900] text-brand-dark dark:text-white mb-8 border-b border-[#F0F0F0] dark:border-white/10 pb-3 uppercase tracking-tight">
                  {language === 'ar' ? 'طرق الدفع' : 'Payment Methods'}
                </h2>
                
                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-6 border border-brand-emerald dark:border-emerald-500 bg-brand-emerald/5 dark:bg-emerald-500/10 rounded-[12px] cursor-pointer">
                    <input type="radio" name="payment" className="w-5 h-5 accent-brand-emerald mt-1.5" defaultChecked />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-[900] text-[17px] text-brand-dark dark:text-white">{language === 'ar' ? 'بطاقة مدى / فيزا / ماستركارد' : 'Mada / Visa / Mastercard'}</div>
                        <CreditCard className="w-6 h-6 text-brand-emerald dark:text-emerald-400" />
                      </div>
                      <div className="flex gap-2 mb-6">
                        <span className="bg-[#F9F9F9] dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 px-2 py-1 rounded-[4px] font-bold text-green-700 dark:text-green-500 text-[11px]">MADA</span>
                        <span className="bg-[#F9F9F9] dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 px-2 py-1 rounded-[4px] font-bold text-blue-800 dark:text-blue-400 text-[11px]">VISA</span>
                        <span className="bg-[#F9F9F9] dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 px-2 py-1 rounded-[4px] font-bold text-red-600 dark:text-red-400 text-[11px]">MASTER</span>
                      </div>
                      
                      {/* Card Form */}
                      <div className="space-y-5">
                        <input type="text" placeholder={language === 'ar' ? "رقم البطاقة" : "Card Number"} className="w-full border border-[#E1DECA] dark:border-white/10 bg-white dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 text-[15px] outline-none focus:border-brand-emerald transition-all font-[600]" dir="ltr" />
                        <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="MM / YY" className="w-full border border-[#E1DECA] dark:border-white/10 bg-white dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 text-[15px] outline-none focus:border-brand-emerald transition-all font-[600]" dir="ltr" />
                          <input type="text" placeholder="CVV" className="w-full border border-[#E1DECA] dark:border-white/10 bg-white dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 text-[15px] outline-none focus:border-brand-emerald transition-all font-[600]" dir="ltr" />
                        </div>
                         <input type="text" placeholder={language === 'ar' ? "الاسم على البطاقة" : "Cardholder Name"} className="w-full border border-[#E1DECA] dark:border-white/10 bg-white dark:bg-gray-800 dark:text-white rounded-[6px] px-4 py-4 text-[15px] outline-none focus:border-brand-emerald transition-all font-[600]" />
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-6 border border-[#EAE5DD] dark:border-white/10 rounded-[12px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                    <input type="radio" name="payment" className="w-5 h-5 accent-brand-emerald" />
                    <div className="flex-1 flex justify-between items-center">
                      <div className="font-[800] text-[17px] text-brand-dark dark:text-white">
                        {language === 'ar' ? 'تمارا - قسّم فاتورتك على ٣ دفعات بدون فوائد' : 'Tamara - Split your invoice into 3 interest-free payments'}
                      </div>
                      <span className="bg-[#F9F9F9] dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 px-3 py-1 rounded-[4px] font-bold text-[#FF8A65] text-[11px]">tamara</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-6 border border-[#EAE5DD] dark:border-white/10 rounded-[12px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                    <input type="radio" name="payment" className="w-5 h-5 accent-brand-emerald" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-[800] text-[17px] text-brand-dark dark:text-white">
                          {language === 'ar' ? 'الدفع عند الاستلام' : 'Cash on Delivery'}
                        </div>
                        <Wallet className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="text-[13px] text-[#777] dark:text-gray-500 mt-1 flex items-center gap-1 font-[600]">
                        <AlertCircle className="w-4 h-4"/> {language === 'ar' ? 'تطبق رسوم إضافية بقيمة ١٥ ر.س' : 'Additional fee of 15 SAR applies'}
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button type="button" onClick={() => setStep(1)} className="text-brand-emerald dark:text-emerald-400 font-[800] text-[17px] flex items-center gap-2 hover:underline transition-all">
                  {dir === 'rtl' ? <ArrowRight className="w-5 h-5" /> : <ArrowRight className="w-5 h-5 rotate-180" />} 
                   {language === 'ar' ? 'العودة للشحن' : 'Back to Shipping'}
                </button>
                <button type="submit" className="bg-brand-emerald dark:bg-emerald-600 text-white px-12 py-5 rounded-[8px] font-[900] text-[18px] shadow-2xl hover:bg-brand-emerald-light transition-all active:scale-[0.98]">
                   {language === 'ar' ? 'تأكيد الطلب' : 'Complete Purchase'}
                </button>
              </div>
            </motion.form>
            )}

          </div>

          {/* Sidebar Summary */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white dark:bg-gray-900 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] p-8 shadow-xl sticky top-24 transition-colors duration-300">
               <h3 className="text-[20px] font-[900] text-brand-dark dark:text-white mb-8 border-b border-[#F0F0F0] dark:border-white/10 pb-4">
                  {language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
               </h3>
               <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                 {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 group">
                    <div className="relative w-20 h-20 shrink-0 bg-[#F9F9F9] dark:bg-gray-800 rounded-[8px] border border-[#EAE5DD] dark:border-white/10 p-2 flex items-center justify-center transition-all group-hover:border-brand-emerald">
                      <img src={item.image} className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" alt={language === 'en' ? item.name_en : item.name} />
                      <div className="absolute -top-2 -right-2 bg-brand-emerald text-white w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-[900] shadow-md">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-[800] text-brand-dark dark:text-white line-clamp-2 leading-[1.4] transition-colors group-hover:text-brand-emerald">
                        {language === 'en' ? item.name_en : item.name}
                      </h4>
                      <p className="text-[13px] text-gray-500 font-[600] mt-1">{language === 'en' ? item.category_en : item.category}</p>
                    </div>
                    <div className="text-[16px] font-[900] text-brand-dark dark:text-white" dir="ltr">
                       {(parseFloat(item.price) * item.quantity).toFixed(2)} <span className="text-[12px] ml-1">SAR</span>
                    </div>
                  </div>
                 ))}
               </div>

               <div className="space-y-5 text-[16px] font-[700] border-t border-[#F0F0F0] dark:border-white/10 pt-8 transition-colors duration-300">
                 <div className="flex justify-between">
                   <span className="text-[#555] dark:text-gray-400">{language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                   <span className="font-[900] text-brand-dark dark:text-white" dir="ltr">{formattedSubtotal} SAR</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-[#555] dark:text-gray-400">{language === 'ar' ? 'الشحن' : 'Shipping'}</span>
                   <span className="font-[900] text-brand-dark dark:text-white">
                     {isFreeShipping ? (language === 'ar' ? 'مجاني' : 'Free') : <span dir="ltr">{shippingCost}.00 SAR</span>}
                   </span>
                 </div>
                 <div className="flex justify-between items-center border-t border-[#F0F0F0] dark:border-white/10 pt-6 mt-4 text-[26px] font-[900]">
                   <span className="text-brand-dark dark:text-white">{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
                   <span className="text-brand-emerald dark:text-emerald-400" dir="ltr">{formattedTotal} SAR</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
