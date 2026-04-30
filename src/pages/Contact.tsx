import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useApp } from "../context/AppContext";
import { motion } from "motion/react";

export function Contact() {
  const { t, language, dir } = useApp();

  const contactInfos = [
    {
      icon: <Phone className="w-6 h-6" />,
      title_ar: "رقم الهاتف (الرقم الموحد)",
      title_en: "Phone Number (Unified)",
      value: "+966 9200 00000",
      dir: "ltr"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title_ar: "البريد الإلكتروني",
      title_en: "Email Address",
      value: "care@noor-altarteeb.sa",
      dir: "ltr"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title_ar: "المقر الرئيسي",
      title_en: "Headquarters",
      value_ar: "شارع الأمير محمد بن عبدالعزيز، الرياض، المملكة العربية السعودية",
      value_en: "Prince Mohammed bin Abdulaziz St, Riyadh, Saudi Arabia",
      dir: "rtl"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title_ar: "ساعات العمل",
      title_en: "Working Hours",
      value_ar: "الأحد - الخميس: ٩ ص إلى ٩ م | الجمعة - السبت: ٤ م إلى ١٠ م",
      value_en: "Sun - Thu: 9 AM to 9 PM | Fri - Sat: 4 PM to 10 PM",
      dir: "rtl"
    }
  ];

  return (
    <div className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark transition-colors duration-300">
      {/* Header */}
      <section className="relative py-24 bg-brand-emerald dark:bg-[#032e23] text-white text-center overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[56px] font-[900] mb-6 leading-[1.2]"
          >
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[17px] md:text-[20px] text-white/90 font-[500]"
          >
            {language === 'ar' ? 'فريقنا مستعد دائمًا للرد على استفساراتكم ومساعدتكم' : 'Our team is always ready to answer your inquiries and help you'}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-[28px] font-[900] text-brand-dark dark:text-white mb-12 border-b-4 border-brand-gold w-fit pb-2">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
            </h2>
            
            <div className="space-y-8">
              {contactInfos.map((info, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 border border-[#EAE5DD] dark:border-white/5 rounded-2xl flex items-center justify-center text-brand-emerald dark:text-emerald-400 shrink-0 shadow-lg transition-transform hover:scale-110">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-[800] text-brand-dark dark:text-white mb-1.5 text-[18px]">
                      {language === 'ar' ? info.title_ar : info.title_en}
                    </h3>
                    <p className="text-[#555] dark:text-gray-400 text-[16px] leading-[1.6] font-[600]" dir={info.dir === 'ltr' ? 'ltr' : (dir === 'rtl' ? 'rtl' : 'ltr')}>
                      {info.value || (language === 'ar' ? info.value_ar : info.value_en)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 md:p-12 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] shadow-2xl transition-colors duration-300"
            >
              <h2 className="text-[28px] font-[900] text-brand-dark dark:text-white mb-8">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send a Message'}
              </h2>
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert(language === 'ar' ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[#555] dark:text-gray-400 font-[700] mb-3 text-[15px]">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input type="text" className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[8px] px-5 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]" required />
                  </div>
                  <div>
                    <label className="block text-[#555] dark:text-gray-400 font-[700] mb-3 text-[15px]">
                      {language === 'ar' ? 'رقم الجوال' : 'Mobile Number'}
                    </label>
                    <input type="text" className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[8px] px-5 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#555] dark:text-gray-400 font-[700] mb-3 text-[15px]">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input type="email" className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[8px] px-5 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]" required />
                </div>

                <div>
                  <label className="block text-[#555] dark:text-gray-400 font-[700] mb-3 text-[15px]">
                    {language === 'ar' ? 'نوع الاستفسار' : 'Inquiry Type'}
                  </label>
                  <select className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[8px] px-5 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600]">
                    <option>{language === 'ar' ? 'استفسار عام' : 'General Inquiry'}</option>
                    <option>{language === 'ar' ? 'متابعة طلب' : 'Order Tracking'}</option>
                    <option>{language === 'ar' ? 'اقتراحات وشكاوى' : 'Suggestions & Complaints'}</option>
                    <option>{language === 'ar' ? 'مبيعات الجملة' : 'Wholesale Inquiries'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#555] dark:text-gray-400 font-[700] mb-3 text-[15px]">
                    {language === 'ar' ? 'رسالتك' : 'Your Message'}
                  </label>
                  <textarea rows={5} className="w-full border border-[#E1DECA] dark:border-white/10 bg-[#F9F9F9] dark:bg-gray-800 dark:text-white rounded-[8px] px-5 py-4 outline-none focus:border-brand-emerald dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-gray-700 transition-all font-[600] resize-none" required></textarea>
                </div>

                <button type="submit" className="bg-brand-emerald dark:bg-emerald-600 text-white px-10 py-5 rounded-[8px] font-[900] text-[18px] hover:bg-brand-emerald-light transition-all shadow-xl active:scale-95 w-full md:w-auto min-w-[250px]">
                  {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
