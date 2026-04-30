import whiteJar from '../assets/images/white-jar-elegant.jpeg';
import { Leaf, ShieldCheck, Heart, Award } from "lucide-react";
import { useApp } from "../context/AppContext";
import { motion } from "motion/react";

export function About() {
  const { language, dir } = useApp();

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title_ar: "مكونات نقية",
      title_en: "Pure Ingredients",
      desc_ar: "ننتقي أفضل المكونات الطبيعية والآمنة لضمان أقصى درجات الترطيب والعناية ببشرتك.",
      desc_en: "We select the best natural and safe ingredients to ensure the maximum degree of hydration and care for your skin."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title_ar: "جودة معتمدة",
      title_en: "Certified Quality",
      desc_ar: "جميع منتجاتنا مختبرة طبياً وحاصلة على التراخيص اللازمة من هيئة الغذاء والدواء.",
      desc_en: "All our products are medically tested and have the necessary licenses from the Food and Drug Authority."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title_ar: "فخر الصناعة السعودية",
      title_en: "Proudly Saudi Made",
      desc_ar: "نساهم في تحقيق رؤية 2030 من خلال توطين صناعة التجميل والعناية الشخصية.",
      desc_en: "We contribute to achieving Vision 2030 by localizing the beauty and personal care industry."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title_ar: "عناية تناسب مجتمعنا",
      title_en: "Care for Our Community",
      desc_ar: "صممت منتجاتنا خصيصاً لتلبي احتياجات البشرة في ظل مناخ منطقتنا.",
      desc_en: "Our products are specifically designed to meet skin needs in the climate of our region."
    }
  ];

  return (
    <div className="flex-1 bg-white dark:bg-brand-dark transition-colors duration-300">
      {/* Hero */}
      <section className="relative py-24 bg-brand-emerald dark:bg-[#032e23] text-white text-center overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-[700] text-[14px] tracking-[2px] mb-4 block uppercase"
          >
            {language === 'ar' ? 'قصتنا' : 'Our Story'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-[900] leading-[1.1] mb-6"
          >
            {language === 'ar' ? 'سر الترطيب العميق من قلب المملكة' : 'The Secret of Deep Hydration from the Heart of the Kingdom'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[17px] md:text-[20px] text-white/90 leading-[1.8] max-w-2xl mx-auto font-[500]"
          >
            {language === 'ar' 
              ? 'تأسست الهارون برؤية طموحة لتقديم منتجات عناية شخصية فائقة الجودة، مستلهمة من أسرار الجمال الطبيعي ومصنوعة بأعلى معايير الجودة العالمية في السعودية.' 
              : 'Al Harun was founded with an ambitious vision to provide superior personal care products, inspired by natural beauty secrets and manufactured with the highest global quality standards in Saudi Arabia.'}
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 dark:bg-brand-dark/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-20">
            <h2 className="text-[36px] font-[900] text-brand-dark dark:text-white mb-4">
              {language === 'ar' ? 'قيمنا ومبادئنا' : 'Our Values & Principles'}
            </h2>
            <div className="w-20 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto bg-[#F9F9F9] dark:bg-gray-800 rounded-3xl flex items-center justify-center text-brand-emerald dark:text-emerald-400 mb-8 border border-[#F0F0F0] dark:border-white/5 transition-all group-hover:scale-110 group-hover:shadow-xl">
                  {val.icon}
                </div>
                <h3 className="text-[20px] font-[900] text-brand-dark dark:text-white mb-4">
                  {language === 'ar' ? val.title_ar : val.title_en}
                </h3>
                <p className="text-[#555] dark:text-gray-400 text-[16px] leading-[1.7] font-[500]">
                  {language === 'ar' ? val.desc_ar : val.desc_en}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 bg-[#FDFBF7] dark:bg-gray-950 border-t border-[#F0E6D2] dark:border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img src={whiteJar} alt="Al Harun Origin" className="rounded-[20px] shadow-2xl border border-white/20" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-[32px] md:text-[44px] font-[900] text-brand-dark dark:text-white mb-8 leading-[1.2]">
              {language === 'ar' ? 'من مختبراتنا إلى بين يديكِ، بكل عناية.' : 'From our labs to your hands, with all our care.'}
            </h2>
            <div className="space-y-6 text-[#555] dark:text-gray-300 text-[17px] md:text-[18px] leading-[1.8] font-[500]">
              <p>
                {language === 'ar' 
                  ? 'بدأت رحلتنا من بحثنا المستمر عن حلول ترطيب فعالة وآمنة، خالية من المضافات القاسية. ابتكرنا تركيبة الفازلين النقي ثلاثي التنقية وأضفنا إليه اللمسة السعودية الفاخرة ليكون الرفيق اليومي لكل عائلة.' 
                  : 'Our journey began from our continuous search for effective and safe hydration solutions, free from harsh additives. We created the triple-purified pure Vaseline formula and added a luxurious Saudi touch to be the daily companion for every family.'}
              </p>
              <p>
                {language === 'ar' 
                  ? 'نحن في الهارون نؤمن بأن العناية بالنفس هي لحظات من السعادة، ولذلك نحرص على تصميم كل عبوة لتعكس الفخامة والجودة العالية التي تستحقينها.' 
                  : 'We at Al Harun believe that self-care is moments of happiness, so we make sure to design every package to reflect the luxury and high quality you deserve.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
