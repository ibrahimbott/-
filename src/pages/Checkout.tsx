import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, Navigation, AlertCircle, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";

export function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
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
      <div className="flex-1 bg-[#FDFBF7] py-20 flex flex-col items-center justify-center text-center px-5">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-[#055C41] rounded-full flex items-center justify-center mb-8 shadow-xl shadow-brand-emerald/20 border-4 border-white"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>
        
        <h2 className="text-[32px] font-[800] text-brand-dark mb-4">تم تأكيد طلبك بنجاح!</h2>
        <p className="text-[#555] text-[16px] mb-2 max-w-md">شكراً لتسوقك من الهارون. رقم طلبك هو: <span className="font-mono font-bold text-brand-emerald">#ALH-84920</span></p>
        <p className="text-[#777] text-[14px] mb-8">سيتم إرسال تفاصيل الطلب وتتبع الشحنة إلى بريدك الإلكتروني.</p>
        
        <Link to="/shop" className="bg-brand-emerald text-white px-8 py-4 rounded-[2px] font-[700] text-[16px] hover:bg-[#043629] transition-colors border-b-[3px] border-[#043629]">
          مواصلة التسوق
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#FDFBF7] py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <h1 className="text-[28px] font-[800] text-brand-dark mb-8 text-center md:text-right">إتمام الطلب</h1>

        <div className="flex flex-col-reverse lg:flex-row gap-10 border-t border-[#F0F0F0] pt-8">
          
          {/* Form Area */}
          <div className="w-full lg:w-3/5">
            {/* Navigation steps */}
            <div className="flex items-center gap-4 mb-8 text-[14px] font-[600]">
               <div className={`flex items-center gap-2 ${step >= 1 ? 'text-brand-emerald' : 'text-gray-400'}`}>
                 <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-current text-[12px]">1</div>
                 الشحن
               </div>
               <div className="h-[2px] w-10 bg-[#EAE5DD]"></div>
               <div className={`flex items-center gap-2 ${step >= 2 ? 'text-brand-emerald' : 'text-gray-400'}`}>
                 <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-current text-[12px]">2</div>
                 الدفع
               </div>
            </div>

            {step === 1 && (
            <motion.form initial={{ opacity: 1, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleShippingSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white p-6 rounded-[8px] border border-[#F0F0F0] shadow-sm">
                <h2 className="text-[18px] font-[800] text-brand-dark mb-4 border-b border-[#F0F0F0] pb-2">معلومات الاتصال</h2>
                <div className="space-y-4 text-[14px]">
                  <div>
                    <label className="block text-[#555] font-[600] mb-2">البريد الإلكتروني أو رقم الهاتف</label>
                    <input type="text" className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors" required />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-[8px] border border-[#F0F0F0] shadow-sm">
                <h2 className="text-[18px] font-[800] text-brand-dark mb-4 border-b border-[#F0F0F0] pb-2">عنوان الشحن</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
                  <div>
                    <label className="block text-[#555] font-[600] mb-2">الاسم الأول</label>
                    <input type="text" className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors" required />
                  </div>
                  <div>
                     <label className="block text-[#555] font-[600] mb-2">اسم العائلة</label>
                     <input type="text" className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors" required />
                  </div>
                  <div className="md:col-span-2">
                     <label className="block text-[#555] font-[600] mb-2">المدينة</label>
                     <select className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors">
                       <option>الرياض</option>
                       <option>جدة</option>
                       <option>الدمام</option>
                       <option>مكة المكرمة</option>
                       <option>المدينة المنورة</option>
                     </select>
                  </div>
                  <div className="md:col-span-2 relative">
                     <label className="block text-[#555] font-[600] mb-2">الحي / الشارع / المبنى</label>
                     <input type="text" className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] pl-10 pr-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors" required />
                     <Navigation className="absolute top-[38px] left-3 w-5 h-5 text-[#AAA]" />
                  </div>
                </div>

                <h3 className="font-[800] text-[16px] text-brand-dark mt-8 mb-4">طريقة الشحن</h3>
                <div className="space-y-3">
                  <label className={`flex items-center gap-3 p-4 border rounded-[4px] cursor-pointer transition-colors ${shippingCost === 0 ? 'border-brand-emerald bg-brand-emerald/5' : 'border-[#EAE5DD] hover:bg-gray-50'}`}>
                    <input type="radio" name="shipping" className="w-4 h-4 accent-brand-emerald" defaultChecked onChange={() => setShippingCost(0)} />
                    <div className="flex-1">
                      <div className="font-[700] text-[15px] text-brand-dark">شحن عادي (٤-٧ أيام عمل)</div>
                    </div>
                    <div className="font-[800] text-brand-emerald">مجاناً</div>
                  </label>
                  <label className={`flex items-center gap-3 p-4 border rounded-[4px] cursor-pointer transition-colors ${shippingCost === 35 ? 'border-brand-emerald bg-brand-emerald/5' : 'border-[#EAE5DD] hover:bg-gray-50'}`}>
                    <input type="radio" name="shipping" className="w-4 h-4 accent-brand-emerald" onChange={() => setShippingCost(35)} />
                    <div className="flex-1">
                      <div className="font-[700] text-[15px] text-brand-dark">شحن سريع (١-٣ أيام عمل)</div>
                    </div>
                    <div className="font-[800]" dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> 35.00</div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link to="/cart" className="text-brand-emerald font-[600] flex items-center gap-2"><ArrowRight className="w-4 h-4" /> العودة للسلة</Link>
                <button type="submit" className="bg-brand-emerald text-white px-8 py-4 rounded-[4px] font-[700] border-b-[3px] border-[#043629] shadow-md hover:bg-[#043629] transition-all">متابعة للدفع</button>
              </div>
            </motion.form>
            )}

            {step === 2 && (
            <motion.form initial={{ opacity: 1, x: -20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handlePaymentSubmit} className="space-y-6">
              
              <div className="bg-[#1A1A1A] text-white p-4 rounded-[8px] flex items-center justify-between shadow-lg cursor-pointer hover:bg-black transition-colors">
                <div className="font-[700] text-[16px]">Apple Pay</div>
                <div className="w-12 h-8 bg-white rounded-[2px]"></div> {/* Apple Pay Logo Placeholder */}
              </div>

              <div className="h-[1px] w-full bg-[#EAE5DD] relative my-6">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FDFBF7] px-4 text-[#777] text-[14px]">أو ادفع باستخدام</span>
              </div>

              <div className="bg-white p-6 rounded-[8px] border border-[#F0F0F0] shadow-sm">
                <h2 className="text-[18px] font-[800] text-brand-dark mb-4 border-b border-[#F0F0F0] pb-2">طرق الدفع</h2>
                
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-4 border border-brand-emerald bg-brand-emerald/5 rounded-[4px] cursor-pointer">
                    <input type="radio" name="payment" className="w-4 h-4 accent-brand-emerald mt-1" defaultChecked />
                    <div className="flex-1">
                      <div className="font-[700] text-[15px] text-brand-dark mb-1">بطاقة مدى / فيزا / ماستركارد</div>
                      <div className="flex gap-2 mb-4">
                        <span className="bg-[#F9F9F9] border border-[#EAE5DD] px-2 py-1 rounded-[2px] font-bold text-green-700 text-[10px]">MADA</span>
                        <span className="bg-[#F9F9F9] border border-[#EAE5DD] px-2 py-1 rounded-[2px] font-bold text-blue-800 text-[10px]">VISA</span>
                        <span className="bg-[#F9F9F9] border border-[#EAE5DD] px-2 py-1 rounded-[2px] font-bold text-red-600 text-[10px]">MASTER</span>
                      </div>
                      
                      {/* Card Form */}
                      <div className="space-y-4">
                        <input type="text" placeholder="رقم البطاقة" className="w-full border border-[#E1DECA] bg-white rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-brand-emerald transition-colors" dir="ltr" />
                        <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="MM / YY" className="w-full border border-[#E1DECA] bg-white rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-brand-emerald transition-colors" dir="ltr" />
                          <input type="text" placeholder="CVC" className="w-full border border-[#E1DECA] bg-white rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-brand-emerald transition-colors" dir="ltr" />
                        </div>
                         <input type="text" placeholder="الاسم على البطاقة" className="w-full border border-[#E1DECA] bg-white rounded-[4px] px-4 py-3 text-[14px] outline-none focus:border-brand-emerald transition-colors" />
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-[#EAE5DD] rounded-[4px] cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" className="w-4 h-4 accent-brand-emerald mt-1" />
                    <div className="flex-1 flex justify-between items-center">
                      <div className="font-[700] text-[15px] text-brand-dark">تمارا - قسّم فاتورتك على ٣ دفعات بدون فوائد</div>
                      <span className="bg-[#F9F9F9] border border-[#EAE5DD] px-2 py-1 rounded-[2px] font-bold text-[#FF8A65] text-[10px]">tamara</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-[#EAE5DD] rounded-[4px] cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" className="w-4 h-4 accent-brand-emerald mt-1" />
                    <div className="flex-1">
                      <div className="font-[700] text-[15px] text-brand-dark">الدفع عند الاستلام</div>
                      <div className="text-[12px] text-[#777] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> تطبق رسوم إضافية <span dir="ltr"><span className="icon-saudi_riyal ml-1 text-[18px]"></span> ١٥</span></div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button type="button" onClick={() => setStep(1)} className="text-brand-emerald font-[600] flex items-center gap-2"><ArrowRight className="w-4 h-4" /> العودة للشحن</button>
                <button type="submit" className="bg-brand-emerald text-white px-10 py-4 rounded-[4px] font-[800] text-[16px] border-b-[4px] border-[#043629] shadow-lg shadow-brand-emerald/20 hover:bg-[#043629] hover:translate-y-[1px] hover:border-b-[3px] transition-all flex items-center gap-2">
                  تأكيد الطلب 
                </button>
              </div>
            </motion.form>
            )}

          </div>

          {/* Sidebar Summary */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white border border-[#F0F0F0] rounded-[8px] p-6 shadow-sm sticky top-24">
               {cart.map((item) => (
                <div key={item.product.id} className="flex items-center gap-4 mb-4 pb-4 border-b border-[#F0F0F0]">
                  <div className="relative w-16 h-16 shrink-0 bg-[#F9F9F9] rounded-[4px] border border-[#EAE5DD] p-1 flex items-center justify-center">
                    <img src={item.product.image} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    <div className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">
                      {item.quantity}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[13px] font-[700] text-brand-dark line-clamp-1">{item.product.name}</h4>
                  </div>
                  <div className="text-[14px] font-[800] text-brand-dark" dir="ltr">
                    <span className="icon-saudi_riyal mr-1 text-[18px]"></span> {(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                  </div>
                </div>
               ))}

               <div className="space-y-3 mt-6 text-[14px]">
                 <div className="flex justify-between">
                   <span className="text-[#555]">المجموع الفرعي</span>
                   <span className="font-[600] text-brand-dark" dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> {formattedSubtotal}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-[#555]">الشحن</span>
                   <span className="font-[600] text-brand-dark">{isFreeShipping ? 'مجاني' : <span dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> {shippingCost}.00</span>}</span>
                 </div>
                 <div className="flex justify-between items-center border-t border-[#F0F0F0] pt-4 mt-4 text-[22px] font-[800]">
                   <span className="text-brand-dark">الإجمالي</span>
                   <span className="text-brand-emerald" dir="ltr"><span className="icon-saudi_riyal mr-1 text-[22px]"></span> {formattedTotal}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
