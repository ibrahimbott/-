import whiteJar from '../assets/images/white-jar-elegant.jpeg';
import { Leaf, ShieldCheck, Heart, Award } from "lucide-react";

export function About() {
  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-brand-emerald text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <span className="text-brand-gold font-[700] text-[14px] tracking-[2px] mb-4 block">قصتنا</span>
          <h1 className="text-[36px] md:text-[48px] font-[800] leading-[1.2] mb-6">سر الترطيب العميق من قلب المملكة</h1>
          <p className="text-[16px] md:text-[18px] text-white/90 leading-[1.8] max-w-2xl mx-auto">
            تأسست الهارون برؤية طموحة لتقديم منتجات عناية شخصية فائقة الجودة، مستلهمة من أسرار الجمال الطبيعي ومصنوعة بأعلى معايير الجودة العالمية في السعودية.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[800] text-brand-dark mb-4">قيمنا ومبادئنا</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#F9F9F9] rounded-full flex items-center justify-center text-brand-emerald mb-6 border border-[#F0F0F0]">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-[18px] font-[800] text-brand-dark mb-3">مكونات نقية</h3>
              <p className="text-[#555] text-[15px] leading-[1.6]">ننتقي أفضل المكونات الطبيعية والآمنة لضمان أقصى درجات الترطيب والعناية ببشرتك.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#F9F9F9] rounded-full flex items-center justify-center text-brand-emerald mb-6 border border-[#F0F0F0]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-[18px] font-[800] text-brand-dark mb-3">جودة معتمدة</h3>
              <p className="text-[#555] text-[15px] leading-[1.6]">جميع منتجاتنا مختبرة طبياً وحاصلة على التراخيص اللازمة من هيئة الغذاء والدواء.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#F9F9F9] rounded-full flex items-center justify-center text-brand-emerald mb-6 border border-[#F0F0F0]">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-[18px] font-[800] text-brand-dark mb-3">فخر الصناعة السعودية</h3>
              <p className="text-[#555] text-[15px] leading-[1.6]">نساهم في تحقيق رؤية 2030 من خلال توطين صناعة التجميل والعناية الشخصية.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#F9F9F9] rounded-full flex items-center justify-center text-brand-emerald mb-6 border border-[#F0F0F0]">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-[18px] font-[800] text-brand-dark mb-3">عناية تناسب مجتمعنا</h3>
              <p className="text-[#555] text-[15px] leading-[1.6]">صممت منتجاتنا خصيصاً لتلبي احتياجات البشرة في ظل مناخ منطقتنا.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 bg-[#FDFBF7] border-t border-[#F0E6D2]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img src={whiteJar} alt="صورة للمكونات الطبيعية" className="rounded-[4px] shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[32px] font-[800] text-brand-dark mb-6 leading-[1.3]">من مختبراتنا إلى بين يديكِ،<br/>بكل عناية.</h2>
            <p className="text-[#555] text-[16px] leading-[1.8] mb-6">
              بدأت رحلتنا من بحثنا المستمر عن حلول ترطيب فعالة وآمنة، خالية من المضافات القاسية. 
              ابتكرنا تركيبة الفازلين النقي ثلاثي التنقية وأضفنا إليه اللمسة السعودية الفاخرة ليكون الرفيق اليومي لكل عائلة.
            </p>
            <p className="text-[#555] text-[16px] leading-[1.8]">
              نحن في الهارون نؤمن بأن العناية بالنفس هي لحظات من السعادة، ولذلك نحرص على تصميم كل عبوة لتعكس الفخامة والجودة العالية التي تستحقينها.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
