import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="flex-1 bg-[#FDFBF7]">
      {/* Header */}
      <div className="bg-brand-emerald text-white py-16 text-center">
        <h1 className="text-[36px] font-[800] mb-4">تواصل معنا</h1>
        <p className="text-white/80 text-[16px]">فريقنا مستعد دائمًا للرد على استفساراتكم ومساعدتكم</p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-[24px] font-[800] text-brand-dark mb-8">معلومات التواصل</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center text-brand-emerald shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-[700] text-brand-dark mb-1">رقم الهاتف (الرقم الموحد)</h3>
                  <p className="text-[#555]" dir="ltr">+966 9200 00000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center text-brand-emerald shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-[700] text-brand-dark mb-1">البريد الإلكتروني</h3>
                  <p className="text-[#555]" dir="ltr">care@noor-altarteeb.sa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center text-brand-emerald shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-[700] text-brand-dark mb-1">المقر الرئيسي</h3>
                  <p className="text-[#555] leading-[1.6]">شارع الأمير محمد بن عبدالعزيز<br/>الرياض، المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center text-brand-emerald shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-[700] text-brand-dark mb-1">ساعات العمل</h3>
                  <p className="text-[#555] leading-[1.6]">الأحد - الخميس: ٩ صائلر ٩ م<br/>الجمعة - السبت: ٤ م إلى ١٠ م</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-10 border border-[#F0F0F0] rounded-[4px] shadow-sm">
              <h2 className="text-[24px] font-[800] text-brand-dark mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("تم إرسال رسالتك بنجاح!"); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#555] font-[600] mb-2 text-[14px]">الاسم الكامل</label>
                    <input type="text" className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-[#555] font-[600] mb-2 text-[14px]">رقم الجوال</label>
                    <input type="text" className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#555] font-[600] mb-2 text-[14px]">البريد الإلكتروني</label>
                  <input type="email" className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors" required />
                </div>

                <div>
                  <label className="block text-[#555] font-[600] mb-2 text-[14px]">نوع الاستفسار</label>
                  <select className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors">
                    <option>استفسار عام</option>
                    <option>متابعة طلب</option>
                    <option>اقتراحات وشكاوى</option>
                    <option>مبيعات الجملة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#555] font-[600] mb-2 text-[14px]">رسالتك</label>
                  <textarea rows={5} className="w-full border border-[#E1DECA] bg-[#F9F9F9] rounded-[4px] px-4 py-3 outline-none focus:border-brand-emerald focus:bg-white transition-colors resize-none" required></textarea>
                </div>

                <button type="submit" className="bg-brand-emerald text-white px-8 py-4 rounded-[4px] font-[700] text-[16px] hover:bg-[#043629] transition-colors shadow-lg shadow-brand-emerald/20 border-b-[3px] border-[#043629] w-full md:w-auto min-w-[200px]">
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
