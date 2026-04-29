import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      {/* Newsletter */}
      <section className="py-16 bg-brand-emerald text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-xl mx-auto px-5 relative z-10">
           <h2 className="text-[28px] font-[800] text-white mb-2">انضمي لنشرتنا البريدية ✨</h2>
           <p className="text-[15px] text-white/80 mb-8">احصلي على خصم ١٠٪ على طلبك الأول وكوني أول من يعلم بعروض فلاش سيل والمنتجات الجديدة.</p>
           <form className="flex self-center bg-white rounded-[2px] overflow-hidden p-1 w-full" onSubmit={(e) => { e.preventDefault(); alert("تم الاشتراك بنجاح!"); }}>
             <input type="email" placeholder="أدخلي بريدك الإلكتروني..." className="flex-1 px-4 py-3 outline-none text-[15px] text-brand-dark" required />
             <button type="submit" className="bg-brand-dark text-white font-[600] px-8 rounded-[2px] transition-transform hover:scale-105">اشتراك</button>
           </form>
        </div>
      </section>

      <footer className="bg-white border-t border-[#F0F0F0] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#F0F0F0] pb-10">
            {/* Brand */}
            <div>
              <span className="text-[28px] font-[800] text-brand-emerald tracking-[-1px] leading-[1] mb-4 block">الهارون</span>
              <p className="text-[#555] text-[14px] leading-[1.6] mb-6">
                علامة تجارية سعودية رائدة في تقديم منتجات العناية الشخصية والترطيب العميق، باستخدام أفضل المكونات.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#F5F2ED] flex items-center justify-center text-brand-emerald hover:bg-brand-emerald hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#F5F2ED] flex items-center justify-center text-brand-emerald hover:bg-brand-emerald hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-[800] text-[16px] text-brand-dark mb-5 border-b border-[#F0F0F0] pb-2">روابط سريعة</h3>
              <ul className="space-y-3 text-[14px]">
                <li><Link to="/" className="text-[#555] hover:text-brand-emerald transition-colors">الرئيسية</Link></li>
                <li><Link to="/about" className="text-[#555] hover:text-brand-emerald transition-colors">عن الهارون</Link></li>
                <li><Link to="/shop" className="text-[#555] hover:text-brand-emerald transition-colors">اكتشف منتجاتنا</Link></li>
                <li><a href="#" className="text-[#555] hover:text-brand-emerald transition-colors">نصائح الجمال (المدونة)</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-[800] text-[16px] text-brand-dark mb-5 border-b border-[#F0F0F0] pb-2">خدمة العملاء</h3>
              <ul className="space-y-3 text-[14px]">
                <li><Link to="/contact" className="text-[#555] hover:text-brand-emerald transition-colors">اتصل بنا</Link></li>
                <li><a href="#" className="text-[#555] hover:text-brand-emerald transition-colors">الشحن والتوصيل</a></li>
                <li><a href="#" className="text-[#555] hover:text-brand-emerald transition-colors">سياسة الاسترجاع</a></li>
                <li><a href="#" className="text-[#555] hover:text-brand-emerald transition-colors">تتبع الطلب</a></li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-[800] text-[16px] text-brand-dark mb-5 border-b border-[#F0F0F0] pb-2">العنوان</h3>
              <address className="text-[#555] text-[14px] not-italic leading-[1.6]">
                الرياض، المملكة العربية السعودية<br />
                طريق الملك فهد، برج العناية<br />
                info@nooraltarteeb.sa<br />
                <span dir="ltr" className="inline-block mt-2 font-bold">+966 11 234 5678</span>
              </address>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px]">
            <div className="text-center md:text-right text-[#777]">
              حقوق النشر © ٢٠٢٤ الهارون للعناية الشخصية. جميع الحقوق محفوظة. <a href="#" className="underline hover:text-brand-emerald">سياسة الخصوصية</a>
            </div>
            
            <div className="flex gap-4 items-center">
              <span className="font-[700] text-[#777] hidden sm:block">طرق الدفع:</span>
              <div className="flex gap-2">
                <span className="bg-[#F9F9F9] border border-[#EAE5DD] px-2 py-1 rounded-[2px] font-bold text-green-700 text-[10px]">MADA</span>
                <span className="bg-[#F9F9F9] border border-[#EAE5DD] px-2 py-1 rounded-[2px] font-bold text-blue-800 text-[10px]">VISA</span>
                <span className="bg-[#F9F9F9] border border-[#EAE5DD] px-2 py-1 rounded-[2px] font-bold text-red-600 text-[10px]">MASTER</span>
                <span className="bg-black text-white px-2 py-1 rounded-[2px] font-bold text-[10px]">Pay</span>
                <span className="bg-[#F9F9F9] border border-[#EAE5DD] px-2 py-1 rounded-[2px] font-bold text-[#FF8A65] text-[10px]">tamara</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/966112345678" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#20BE5A] transition-all"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
}
