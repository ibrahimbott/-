import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, Heart, X, Moon, Sun, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useStore } from '../context/StoreContext';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const { language, setLanguage, theme, toggleTheme, t, dir } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { cartCount } = useCart();
  const { wishlist } = useStore();
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.shop'), href: "/shop" },
    { name: t('nav.categories'), href: "/categories" },
    { name: t('nav.offers'), href: "/offers" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = query.trim() ? products.filter(p => p.name.includes(query) || p.category.includes(query)).slice(0, 5) : [];

  return (
    <>
      <div className="bg-brand-emerald text-white text-center py-3 text-[15px] font-[600] flex justify-center items-center gap-4 relative z-50 px-4">
        {t('header.free_shipping')}
      </div>

      <nav className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-black/5 dark:border-white/5 h-[90px] flex flex-col justify-center shadow-sm transition-colors duration-300">
        <div className="w-full px-5 md:px-10">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex flex-col justify-center cursor-pointer">
              <span className="text-[32px] md:text-[36px] font-[900] text-brand-emerald dark:text-emerald-400 tracking-[-1px] leading-[1]">الهارون</span>
              <span className="text-[11px] text-brand-gold font-[700] tracking-[1px] pl-1 uppercase opacity-80">NOOR AL-TARTEEB</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 list-none text-[17px] font-[700]">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-brand-dark dark:text-white hover:text-brand-gold transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="text-brand-dark dark:text-white hover:text-brand-emerald p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>

              {/* Language Toggle */}
              <button 
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-1 text-brand-dark dark:text-white hover:text-brand-emerald p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-bold text-[14px]"
                aria-label="Toggle Language"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline">{language === 'ar' ? 'EN' : 'عربي'}</span>
              </button>

              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button 
                  className="text-brand-dark dark:text-white hover:text-brand-emerald transition-colors appearance-none bg-transparent rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                {searchOpen && (
                  <div className={`absolute top-[120%] ${dir === 'rtl' ? 'left-0 md:left-auto md:right-0' : 'right-0 md:right-auto md:left-0'} w-[300px] bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 shadow-xl rounded-[4px] p-4 animate-in fade-in slide-in-from-top-2`}>
                    <input 
                      type="text" 
                      placeholder={t('header.search_placeholder')} 
                      className="w-full bg-[#F9F9F9] dark:bg-gray-800 border border-gray-200 dark:border-white/5 px-4 py-2 rounded-[2px] outline-none focus:border-brand-emerald text-[14px] text-brand-dark dark:text-white transition-colors"
                      autoFocus
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                    />
                    {query.trim() !== '' && (
                      <div className="mt-2 flex flex-col gap-2 max-h-[300px] overflow-y-auto">
                        {searchResults.length > 0 ? searchResults.map(p => (
                          <Link 
                            key={p.id} 
                            to={`/product/${p.id}`} 
                            className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-[4px]"
                            onClick={() => setSearchOpen(false)}
                          >
                            <img src={p.image} className="w-10 h-10 object-contain bg-[#F9F9F9] dark:bg-gray-700 mix-blend-multiply dark:mix-blend-normal rounded-sm" />
                            <div className="text-[13px] font-[600] text-brand-dark dark:text-white truncate">{p.name}</div>
                          </Link>
                        )) : (
                          <div className="text-[13px] text-gray-500 p-2 text-center">{t('header.no_results')}</div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link to="/shop" className="relative text-brand-dark dark:text-white hover:text-brand-emerald transition-colors appearance-none bg-transparent rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-800 hidden sm:flex">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link to="/cart" className="relative text-brand-dark dark:text-white hover:text-brand-emerald transition-colors appearance-none bg-transparent rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2" aria-label="Cart">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button className="lg:hidden text-brand-dark dark:text-white ml-2 appearance-none bg-transparent p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: dir === 'rtl' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: dir === 'rtl' ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} bottom-0 w-[80%] max-w-[320px] bg-white dark:bg-gray-900 z-[100] lg:hidden shadow-2xl flex flex-col transition-colors duration-300`}
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-white/5">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-500 dark:text-gray-400 hover:text-brand-dark dark:hover:text-white transition-colors"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-[24px] font-[900] text-brand-emerald dark:text-emerald-400 tracking-[-1px]">الهارون</Link>
              </div>
              <div className="p-4 space-y-2 overflow-y-auto flex-1">
                 {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="block px-4 py-3 text-base font-[600] text-brand-dark dark:text-white hover:text-brand-emerald hover:bg-gray-50 dark:hover:bg-gray-800 rounded-[4px] transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/5 space-y-4">
                    <button 
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-[4px] bg-gray-50 dark:bg-gray-800 text-brand-dark dark:text-white font-[600]"
                    >
                      <span>{theme === 'light' ? 'الوضع الليلي' : 'الوضع النهاري'}</span>
                      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                    
                    <button 
                      onClick={() => {
                        setLanguage(language === 'ar' ? 'en' : 'ar');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-[4px] bg-brand-emerald text-white font-[600]"
                    >
                      <span>{language === 'ar' ? 'English Version' : 'النسخة العربية'}</span>
                      <Globe className="w-5 h-5" />
                    </button>
                  </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
