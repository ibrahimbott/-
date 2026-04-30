import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, Droplet, Sparkles, Heart, Zap } from "lucide-react";
import { useApp } from "../context/AppContext";

const categories = [
  {
    id: "lotions",
    name_ar: "مرطبات الجسم",
    name_en: "Body Lotions",
    icon: <Droplet className="w-8 h-8" />,
    desc_ar: "لوشنات غنية بتركيبات متطورة لترطيب عميق يدوم طويلاً.",
    desc_en: "Rich lotions with advanced formulas for long-lasting deep hydration.",
    color: "bg-emerald-50 text-emerald-700",
    darkColor: "dark:bg-emerald-900/20 dark:text-emerald-400"
  },
  {
    id: "vaseline",
    name_ar: "فازلين الهارون",
    name_en: "Al Harun Vaseline",
    icon: <Sparkles className="w-8 h-8" />,
    desc_ar: "الفازلين الأصلي بتركيبة الهارون الخاصة لنعومة فائقة وحماية للبشرة.",
    desc_en: "Original Vaseline with Al Harun's special formula for extra softness and skin protection.",
    color: "bg-amber-50 text-amber-700",
    darkColor: "dark:bg-amber-900/20 dark:text-amber-400"
  },
  {
    id: "sensitive",
    name_ar: "للبشرة الحساسة",
    name_en: "For Sensitive Skin",
    icon: <Heart className="w-8 h-8" />,
    desc_ar: "منتجات مختبرة طبياً للعناية بالبشرة الأكثر حساسية دون تهيج.",
    desc_en: "Dermatologically tested products for the most sensitive skin without irritation.",
    color: "bg-rose-50 text-rose-700",
    darkColor: "dark:bg-rose-900/20 dark:text-rose-400"
  },
  {
    id: "intensive",
    name_ar: "عناية مكثفة",
    name_en: "Intensive Care",
    icon: <Zap className="w-8 h-8" />,
    desc_ar: "حلول قوية للبشرة شديدة الجفاف والمتضررة من العوامل الخارجية.",
    desc_en: "Powerful solutions for extremely dry skin damaged by external factors.",
    color: "bg-blue-50 text-blue-700",
    darkColor: "dark:bg-blue-900/20 dark:text-blue-400"
  }
];

export function Categories() {
  const { language, t } = useApp();

  return (
    <div className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark transition-colors duration-300 py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-[40px] md:text-[50px] font-[900] text-brand-dark dark:text-white mb-4">
            {language === 'ar' ? 'تصنيفاتنا الفاخرة' : 'Our Luxury Categories'}
          </h1>
          <p className="text-[18px] text-[#666] dark:text-gray-400 max-w-2xl mx-auto font-[500]">
            {language === 'ar' 
              ? 'اكتشف مجموعتنا المتكاملة المصممة خصيصاً لتناسب احتياجات بشرتك الفريدة.' 
              : 'Discover our comprehensive collection specially designed to suit your unique skin needs.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link 
                to={`/shop?category=${cat.id}`}
                className="block bg-white dark:bg-gray-900/50 border border-[#EAE5DD] dark:border-white/10 rounded-[20px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.color} ${cat.darkColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                
                <h2 className="text-[24px] font-[900] text-brand-dark dark:text-white mb-3">
                  {language === 'ar' ? cat.name_ar : cat.name_en}
                </h2>
                <p className="text-[#666] dark:text-gray-400 text-[16px] leading-[1.6] mb-6">
                  {language === 'ar' ? cat.desc_ar : cat.desc_en}
                </p>
                
                <div className="flex items-center gap-2 text-brand-emerald dark:text-emerald-400 font-[800] text-[15px]">
                  <span>{language === 'ar' ? 'تصفح المنتجات' : 'Browse Products'}</span>
                  <ChevronLeft className={`w-5 h-5 group-hover:translate-x-[-5px] transition-transform ${language === 'en' ? 'rotate-180 group-hover:translate-x-[5px]' : ''}`} />
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-emerald/5 dark:bg-white/5 rounded-full blur-3xl group-hover:bg-brand-emerald/10 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
