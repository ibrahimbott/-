import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Search, Heart, Eye, Filter, ChevronRight, ChevronLeft } from "lucide-react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useStore } from "../context/StoreContext";
import { useApp } from "../context/AppContext";

export function Shop() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const { recentlyViewed } = useStore();
  const { t, language, dir } = useApp();
  
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFilter);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Apply filters
  let filteredProducts = activeCategory 
    ? products.filter(p => categories.find(c => c.id === activeCategory)?.name === p.category)
    : [...products];

  // Apply sorting
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  const currentCategoryName = activeCategory 
    ? (language === 'en' 
        ? categories.find(c => c.id === activeCategory)?.name_en 
        : categories.find(c => c.id === activeCategory)?.name)
    : (language === 'ar' ? 'جميع المنتجات' : 'All Products');

  return (
    <div className="flex-1 bg-[#FDFBF7] dark:bg-brand-dark py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 bg-white dark:bg-gray-900 p-10 rounded-[12px] border border-[#F0E6D2] dark:border-white/5 shadow-sm text-center transition-all duration-300"
        >
          <h1 className="text-[36px] md:text-[48px] font-[900] text-brand-dark dark:text-white mb-4">
            {currentCategoryName}
          </h1>
          <p className="text-[#555] dark:text-gray-400 text-[17px] md:text-[18px] max-w-2xl mx-auto font-[500]">
            {language === 'ar' 
              ? 'اكتشفي مجموعتنا الكاملة من منتجات العناية بالبشرة والترطيب العميق، المصممة خصيصاً لتناسب طبيعة بشرتك.' 
              : 'Discover our full range of deep hydration and skincare products, specifically designed to suit your skin type.'}
          </p>
        </motion.div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-gray-900 p-5 rounded-[12px] border border-[#F0F0F0] dark:border-white/5 mb-10 shadow-md gap-4 transition-all duration-300">
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
            <button 
              className="md:hidden flex items-center gap-2 text-[15px] font-[800] border border-[#EAE5DD] dark:border-white/10 px-6 py-3 rounded-[8px] bg-[#F9F9F9] dark:bg-gray-800 dark:text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Filter className="w-5 h-5" /> {language === 'ar' ? 'الفلاتر' : 'Filters'}
            </button>
            <span className="hidden md:inline text-[#777] dark:text-gray-500 text-[15px] font-[600]">
              {language === 'ar' ? `يتم عرض ${filteredProducts.length} منتجات` : `Showing ${filteredProducts.length} products`}
            </span>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <label className="text-[15px] font-[800] text-brand-dark dark:text-white hidden sm:block">
              {language === 'ar' ? 'ترتيب حسب:' : 'Sort by:'}
            </label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#F9F9F9] dark:bg-gray-800 dark:text-white border border-[#EAE5DD] dark:border-white/10 text-[15px] px-5 py-3 rounded-[8px] outline-none focus:border-brand-emerald dark:focus:border-emerald-600 transition-all font-[600] w-full md:w-auto"
            >
              <option value="newest">{language === 'ar' ? 'الأحدث' : 'Newest'}</option>
              <option value="price-low">{language === 'ar' ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
              <option value="price-high">{language === 'ar' ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar / Filters */}
          <div className={`w-full md:w-72 shrink-0 ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white dark:bg-gray-900 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] p-8 sticky top-24 shadow-xl transition-all duration-300">
              <h3 className="font-[900] text-[18px] mb-6 text-brand-dark dark:text-white pb-3 border-b-2 border-brand-gold w-fit">
                {language === 'ar' ? 'التصنيفات' : 'Categories'}
              </h3>
              <ul className="space-y-4 text-[16px] font-[700] mb-10 pb-8 border-b border-[#F0F0F0] dark:border-white/10">
                <li>
                  <button 
                    onClick={() => { setActiveCategory(null); setSidebarOpen(false); }}
                    className={`w-full transition-colors flex justify-between items-center ${activeCategory === null ? 'text-brand-emerald dark:text-emerald-400 font-[900]' : 'text-[#555] dark:text-gray-400 hover:text-brand-dark'}`}
                  >
                    <span>{language === 'ar' ? 'الكل' : 'All Products'}</span>
                    {activeCategory === null && <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full"></div>}
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => { setActiveCategory(cat.id); setSidebarOpen(false); }}
                      className={`w-full transition-colors flex justify-between items-center ${activeCategory === cat.id ? 'text-brand-emerald dark:text-emerald-400 font-[900]' : 'text-[#555] dark:text-gray-400 hover:text-brand-dark'}`}
                    >
                      <span>{language === 'ar' ? cat.name : cat.name_en}</span>
                      {activeCategory === cat.id && <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full"></div>}
                    </button>
                  </li>
                ))}
              </ul>

              {recentlyViewed.length > 0 && (
                <div>
                  <h3 className="font-[900] text-[18px] mb-6 text-brand-dark dark:text-white pb-3 border-b-2 border-brand-gold w-fit">
                    {language === 'ar' ? 'شوهد مؤخراً' : 'Recently Viewed'}
                  </h3>
                  <div className="space-y-6">
                    {recentlyViewed.slice(0,3).map(p => (
                      <Link key={p.id} to={`/product/${p.id}`} className="flex gap-4 group">
                        <div className="w-16 h-16 shrink-0 bg-[#F9F9F9] dark:bg-gray-800 border border-[#F0F0F0] dark:border-white/5 rounded-[8px] p-1 flex items-center justify-center transition-all group-hover:border-brand-emerald">
                          <img src={p.image} className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" alt={language === 'en' ? p.name_en : p.name} />
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h4 className="text-[13px] font-[800] text-brand-dark dark:text-white truncate leading-[1.4] mb-1 group-hover:text-brand-emerald transition-colors">
                            {language === 'en' ? p.name_en : p.name}
                          </h4>
                          <span className="text-[14px] font-[900] text-brand-emerald dark:text-emerald-400 block" dir="ltr">
                            {p.price} <span className="text-[10px] ml-0.5">SAR</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
            
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-24 bg-white dark:bg-gray-900 border border-[#F0F0F0] dark:border-white/5 rounded-[12px] shadow-sm transition-all duration-300"
              >
                <Search className="w-16 h-16 text-[#CCC] dark:text-gray-700 mx-auto mb-6" />
                <h3 className="text-[22px] font-[900] text-brand-dark dark:text-white mb-2">
                  {language === 'ar' ? 'لم نتمكن من العثور على منتجات' : 'No products found'}
                </h3>
                <p className="text-[#777] dark:text-gray-500 text-[16px] font-[600]">
                  {language === 'ar' ? 'حاولي تغيير الفلاتر أو إزالة البحث.' : 'Try changing filters or removing the search.'}
                </p>
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="mt-10 bg-brand-emerald dark:bg-emerald-600 text-white px-10 py-4 rounded-[6px] font-[800] text-[17px] shadow-xl hover:bg-brand-emerald-light transition-all active:scale-95"
                >
                  {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
                </button>
              </motion.div>
            )}

            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-16 gap-3">
                 <button className="w-12 h-12 border-2 border-brand-emerald bg-brand-emerald text-white rounded-[10px] font-[900] shadow-xl">1</button>
                 <button className="w-12 h-12 border-2 border-[#EAE5DD] dark:border-white/10 text-[#777] bg-white dark:bg-gray-800 rounded-[10px] font-[800] hover:bg-[#F9F9F9] transition-all">2</button>
                 <button className="w-12 h-12 border-2 border-[#EAE5DD] dark:border-white/10 text-[#777] bg-white dark:bg-gray-800 rounded-[10px] font-[800] flex items-center justify-center hover:bg-[#F9F9F9] transition-all">
                    {dir === 'rtl' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                 </button>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </div>
  );
}
