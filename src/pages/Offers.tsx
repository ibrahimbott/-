import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Zap } from "lucide-react";
import { useApp } from "../context/AppContext";
import { motion } from "motion/react";

export function Offers() {
  const { t, language } = useApp();
  // Mock offers by picking some products and pretending they're on sale
  const offerProducts = products.slice(0, 4);

  return (
    <div className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark transition-colors duration-300">
      {/* Banner */}
      <section className="bg-brand-gold dark:bg-[#8B7454] text-white py-20 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-5">
           <motion.div
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
           >
             <Zap className="w-8 h-8 text-[#FDFBF7]" />
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-[36px] md:text-[48px] font-[900] mb-6"
           >
             {language === 'ar' ? 'العروض الحصرية' : 'Exclusive Offers'}
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-[17px] md:text-[20px] opacity-95 max-w-2xl mx-auto font-[500]"
           >
             {language === 'ar' 
               ? 'تسوقي أفضل منتجات العناية بالبشرة بأسعار لا تفوت. عروض لفترة محدودة، سارعي قبل نفاذ الكمية.' 
               : 'Shop the best skincare products at unbeatable prices. Limited time offers, hurry before stock runs out.'}
           </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
           <h2 className="text-[28px] font-[900] text-brand-dark dark:text-white flex items-center gap-3">
             {language === 'ar' ? 'عروض اليوم' : 'Daily Deals'} 
             <span className="bg-red-500 text-white text-[12px] px-3 py-1.5 rounded-[6px] font-[800] animate-pulse">
               {language === 'ar' ? 'خصم حتى ٤٠٪' : 'UP TO 40% OFF'}
             </span>
           </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {offerProducts.map((product, idx) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-[11px] font-[900] px-3 py-1.5 rounded-[4px] uppercase tracking-wider shadow-lg">
                {language === 'ar' ? 'خصم خاص' : 'Hot Offer'}
              </div>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
