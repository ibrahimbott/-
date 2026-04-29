import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Zap } from "lucide-react";

export function Offers() {
  // Mock offers by picking some products and pretending they're on sale
  const offerProducts = products.slice(0, 4);

  return (
    <div className="flex-1 bg-[#FDFBF7]">
      {/* Banner */}
      <div className="bg-[#C5A880] text-white py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-5">
           <Zap className="w-10 h-10 mx-auto mb-4 text-[#FDFBF7]" />
           <h1 className="text-[32px] md:text-[40px] font-[800] mb-4">العروض الحصرية</h1>
           <p className="text-[16px] md:text-[18px] opacity-90 max-w-2xl mx-auto">تسوقي أفضل منتجات العناية بالبشرة بأسعار لا تفوت. عروض لفترة محدودة، سارعي قبل نفاذ الكمية.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-[24px] font-[800] text-brand-dark flex items-center gap-2">
             عروض اليوم <span className="bg-red-100 text-red-600 outline outline-1 outline-red-200 text-[12px] px-2 py-1 rounded-[2px] font-bold">خصم حتى ٤٠٪</span>
           </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offerProducts.map((product) => (
            <div key={product.id} className="relative">
              {/* Sale Badge */}
              <div className="absolute top-4 right-4 z-10 bg-brand-gold text-white text-[12px] font-bold px-3 py-1 rounded-[2px]">
                خصم رائع
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
