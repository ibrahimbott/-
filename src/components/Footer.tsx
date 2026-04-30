import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { useApp } from "../context/AppContext";

export function Footer() {
  const { t, language, dir } = useApp();

  return (
    <>
      {/* Newsletter */}
      <section className="py-20 bg-brand-emerald dark:bg-[#032e23] text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center">
           <h2 className="text-[32px] md:text-[44px] font-[900] text-white mb-4">{t('footer.newsletter_title')}</h2>
           <p className="text-[17px] md:text-[19px] text-white/90 mb-10 max-w-2xl mx-auto font-[500]">{t('footer.newsletter_desc')}</p>
           <form className="flex self-center bg-white dark:bg-gray-800 rounded-[12px] overflow-hidden p-1.5 w-full max-w-lg mx-auto shadow-2xl" onSubmit={(e) => { e.preventDefault(); alert(language === 'ar' ? "تم الاشتراك بنجاح!" : "Subscribed successfully!"); }}>
             <input type="email" placeholder={language === 'ar' ? "أدخلي بريدك الإلكتروني هنا..." : "Enter your email here..."} className="flex-1 px-5 py-4 outline-none text-[17px] text-brand-dark dark:text-white bg-transparent font-[600]" required />
             <button type="submit" className="bg-brand-emerald dark:bg-emerald-600 text-white font-[800] px-10 rounded-[8px] transition-all hover:bg-brand-emerald-light active:scale-95 shadow-md">{t('footer.newsletter_btn')}</button>
           </form>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-900 border-t border-[#F0F0F0] dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#F0F0F0] dark:border-white/5 pb-16">
            {/* Brand */}
            <div className="space-y-6">
              <Link to="/" className="flex flex-col">
                <span className="text-[28px] font-[900] text-brand-emerald dark:text-emerald-400 tracking-[-1px] leading-[1]">الهارون</span>
                <span className="text-[10px] text-brand-gold font-[700] tracking-[1px] uppercase opacity-80">NOOR AL-TARTEEB</span>
              </Link>
              <p className="text-[#555] dark:text-gray-400 text-[15px] leading-[1.8] font-[500]">
                {language === 'ar' 
                  ? 'الهارون هي العلامة التجارية السعودية الرائدة في مجال العناية الشخصية والترتيب، نقدم لك أجود أنواع الفازلين واللوشن بلمسة فاخرة.' 
                  : 'Al Harun is the leading Saudi brand in personal care and grooming, offering you the finest types of Vaseline and lotions with a luxury touch.'}
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#F5F2ED] dark:bg-gray-800 flex items-center justify-center text-brand-emerald dark:text-white hover:bg-brand-emerald hover:text-white transition-all shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#F5F2ED] dark:bg-gray-800 flex items-center justify-center text-brand-emerald dark:text-white hover:bg-brand-emerald hover:text-white transition-all shadow-sm">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#F5F2ED] dark:bg-gray-800 flex items-center justify-center text-brand-emerald dark:text-white hover:bg-brand-emerald hover:text-white transition-all shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-[900] text-[19px] text-brand-dark dark:text-white mb-6 border-b-2 border-brand-gold w-fit pb-1">{t('footer.quick_links')}</h3>
              <ul className="space-y-4 text-[16px] font-[600]">
                <li><Link to="/" className="text-[#555] dark:text-gray-400 hover:text-brand-emerald transition-colors">{t('nav.home')}</Link></li>
                <li><Link to="/about" className="text-[#555] dark:text-gray-400 hover:text-brand-emerald transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/shop" className="text-[#555] dark:text-gray-400 hover:text-brand-emerald transition-colors">{t('nav.shop')}</Link></li>
                <li><Link to="/categories" className="text-[#555] dark:text-gray-400 hover:text-brand-emerald transition-colors">{t('nav.categories')}</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-[900] text-[19px] text-brand-dark dark:text-white mb-6 border-b-2 border-brand-gold w-fit pb-1">{t('footer.customer_service')}</h3>
              <ul className="space-y-4 text-[16px] font-[600]">
                <li><Link to="/contact" className="text-[#555] dark:text-gray-400 hover:text-brand-emerald transition-colors">{t('nav.contact')}</Link></li>
                <li><a href="#" className="text-[#555] dark:text-gray-400 hover:text-brand-emerald transition-colors">{language === 'ar' ? 'الشحن والتوصيل' : 'Shipping & Delivery'}</a></li>
                <li><a href="#" className="text-[#555] dark:text-gray-400 hover:text-brand-emerald transition-colors">{language === 'ar' ? 'سياسة الاسترجاع' : 'Return Policy'}</a></li>
                <li><a href="#" className="text-[#555] dark:text-gray-400 hover:text-brand-emerald transition-colors">{language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}</a></li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-[900] text-[19px] text-brand-dark dark:text-white mb-6 border-b-2 border-brand-gold w-fit pb-1">{t('footer.address')}</h3>
              <address className="text-[#555] dark:text-gray-400 text-[16px] not-italic leading-[1.8] font-[600] space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0 text-brand-emerald" />
                  <span>{t('footer.saudi_arabia')}<br />{t('footer.king_fahd_road')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0 text-brand-emerald" />
                  <span>info@nooraltarteeb.sa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-brand-emerald" />
                  <span dir="ltr" className="font-[900] text-brand-emerald dark:text-emerald-400">+966 11 234 5678</span>
                </div>
              </address>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px]">
            <div className="text-center md:text-right text-[#777] dark:text-gray-500 font-[600]">
              © {new Date().getFullYear()} {language === 'ar' ? 'الهارون - نور الترتيب. جميع الحقوق محفوظة.' : 'Al Harun - Noor Al Tarteeb. All rights reserved.'} 
              <br className="md:hidden" />
              <a href="#" className="underline hover:text-brand-emerald ml-2">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            </div>
            
            <div className="flex gap-4 items-center">
              <span className="font-[700] text-[#777] dark:text-gray-500 hidden sm:block">{language === 'ar' ? 'طرق الدفع:' : 'Payment Methods:'}</span>
              <div className="flex gap-2">
                <span className="bg-[#F9F9F9] dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 px-2 py-1 rounded-[2px] font-bold text-green-700 dark:text-green-500 text-[10px]">MADA</span>
                <span className="bg-[#F9F9F9] dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 px-2 py-1 rounded-[2px] font-bold text-blue-800 dark:text-blue-400 text-[10px]">VISA</span>
                <span className="bg-[#F9F9F9] dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 px-2 py-1 rounded-[2px] font-bold text-red-600 dark:text-red-400 text-[10px]">MASTER</span>
                <span className="bg-black text-white px-2 py-1 rounded-[2px] font-bold text-[10px]">Pay</span>
                <span className="bg-[#F9F9F9] dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/10 px-2 py-1 rounded-[2px] font-bold text-[#FF8A65] text-[10px]">tamara</span>
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
        className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#20BE5A] transition-all`}
        aria-label={language === 'ar' ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
}
