import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { Search, Heart, Eye, Filter } from "lucide-react";
import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";
import { useStore } from "../context/StoreContext";

export function Shop() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist, setQuickViewProduct, recentlyViewed } = useStore();
  
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

  return (
    <div className="flex-1 bg-[#FDFBF7] py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Header Area */}
        <div className="mb-8 bg-white p-8 rounded-[8px] border border-[#F0E6D2] shadow-sm text-center">
          <h1 className="text-[32px] md:text-[40px] font-[800] text-brand-dark mb-4 drop-shadow-sm">
            {activeCategory ? categories.find(c => c.id === activeCategory)?.name : 'جميع المنتجات'}
          </h1>
          <p className="text-[#555] text-[15px] max-w-2xl mx-auto">اكتشفي مجموعتنا الكاملة من منتجات العناية بالبشرة والترطيب العميق، المصممة خصيصاً لتناسب طبيعة بشرتك.</p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center bg-white p-4 rounded-[4px] border border-[#F0F0F0] mb-8 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden flex items-center gap-2 text-[14px] font-[600] border border-[#EAE5DD] px-4 py-2 rounded-[2px]"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Filter className="w-4 h-4" /> الفلاتر
            </button>
            <span className="hidden md:inline text-[#777] text-[14px]">يتم عرض {filteredProducts.length} منتجات</span>
          </div>
          
          <div className="flex items-center gap-3">
            <label className="text-[14px] font-[600] text-brand-dark hidden sm:block">ترتيب حسب:</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#F9F9F9] border border-[#EAE5DD] text-[14px] px-4 py-2 rounded-[2px] outline-none focus:border-brand-emerald"
            >
              <option value="newest">الأحدث</option>
              <option value="best-selling">الأكثر مبيعاً</option>
              <option value="price-low">السعر: من الأقل للأعلى</option>
              <option value="price-high">السعر: من الأعلى للأقل</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className={`w-full md:w-64 shrink-0 transition-all duration-300 ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white border border-[#F0F0F0] rounded-[4px] p-6 sticky top-24 shadow-sm">
              <h3 className="font-[800] text-[16px] mb-4 text-brand-dark pb-2 border-b border-[#F0F0F0]">التصنيفات</h3>
              <ul className="space-y-3 text-[14px] mb-8 border-b border-[#F0F0F0] pb-6">
                <li>
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className={`w-full text-right transition-colors flex justify-between items-center ${activeCategory === null ? 'text-brand-emerald font-[700]' : 'text-[#555] hover:text-brand-dark'}`}
                  >
                    <span>الكل</span>
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-right transition-colors flex justify-between items-center ${activeCategory === cat.id ? 'text-brand-emerald font-[700]' : 'text-[#555] hover:text-brand-dark'}`}
                    >
                      <span>{cat.name}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {recentlyViewed.length > 0 && (
                <div>
                  <h3 className="font-[800] text-[15px] mb-4 text-brand-dark pb-2 border-b border-[#F0F0F0]">شوهد مؤخراً</h3>
                  <div className="space-y-4">
                    {recentlyViewed.slice(0,3).map(p => (
                      <Link key={p.id} to={`/product/${p.id}`} className="flex gap-3 group">
                        <img src={p.image} className="w-16 h-16 object-contain bg-[#F9F9F9] border border-[#F0F0F0] rounded-[4px] p-1 mix-blend-multiply group-hover:border-brand-emerald transition-colors" />
                        <div className="flex-1 overflow-hidden">
                          <h4 className="text-[12px] font-[600] text-brand-dark truncate leading-[1.4] mb-1 group-hover:text-brand-emerald">{p.name}</h4>
                          <span className="text-[13px] font-[800] text-brand-emerald block" dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> {p.price}</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  initial={{ opacity: 1, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.5) }}
                  key={product.id} 
                  className="bg-white border border-[#F0F0F0] rounded-[4px] overflow-hidden group hover:shadow-xl transition-shadow relative flex flex-col"
                >
                  {/* Quick Actions */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
                      className="w-8 h-8 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors shadow-sm"
                    >
                      <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current text-red-500' : 'text-[#777]'}`} />
                    </button>
                    <button 
                      onClick={(e) => { e.preventDefault(); setQuickViewProduct(product); }}
                      className="w-8 h-8 bg-white border border-[#EAE5DD] rounded-full flex items-center justify-center hover:bg-gray-50 hover:text-brand-dark transition-colors shadow-sm"
                    >
                      <Eye className="w-4 h-4 text-[#777]" />
                    </button>
                  </div>

                  <Link to={`/product/${product.id}`} className="block h-[220px] bg-[#F9F9F9] relative overflow-hidden flex items-center justify-center p-6 border-b border-[#F0F0F0]">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-[600] text-brand-gold mb-1 block">{product.category}</span>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-[700] text-[15px] mb-2 leading-[1.4] hover:text-brand-emerald transition-colors line-clamp-2">{product.name}</h3>
                      </Link>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#F0F0F0]">
                      <div className="text-[18px] font-[800] text-brand-emerald leading-[1]" dir="ltr">
                        <span className="icon-saudi_riyal mr-1 text-[18px]"></span>{product.price}
                      </div>
                      <button 
                        onClick={() => { addToCart(product); alert('تم الإضافة بنجاح'); }}
                        className="bg-transparent border border-brand-emerald text-brand-emerald px-4 py-1.5 rounded-[2px] text-[13px] font-[700] hover:bg-brand-emerald hover:text-white transition-colors"
                      >
                        أضف للسلة
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white border border-[#F0F0F0] rounded-[2px] shadow-sm">
                <Search className="w-12 h-12 text-[#CCC] mx-auto mb-4" />
                <h3 className="text-[18px] font-[700] text-brand-dark mb-2">لم نتمكن من العثور على منتجات</h3>
                <p className="text-[#777] text-[14px]">حاولي تغيير الفلاتر أو إزالة البحث.</p>
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="mt-6 bg-brand-emerald text-white px-6 py-2 rounded-[2px] font-[600]"
                >
                  عرض جميع المنتجات
                </button>
              </div>
            )}

            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12 gap-2">
                 <button className="w-10 h-10 border border-brand-emerald bg-brand-emerald text-white rounded-[2px] font-[700]">1</button>
                 <button className="w-10 h-10 border border-[#EAE5DD] text-[#777] bg-white rounded-[2px] font-[600] hover:bg-[#F9F9F9]">2</button>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </div>
  );
}
