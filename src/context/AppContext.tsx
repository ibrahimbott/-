import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.shop': 'المتجر',
    'nav.categories': 'الفئات',
    'nav.offers': 'العروض الخاصة',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'header.free_shipping': 'شحن مجاني للطلبات بقيمة ٢٠٠ ريال أو أكثر | اكسب نقاط مع كل عملية شراء ✨',
    'header.search_placeholder': 'ابحث عن منتج...',
    'header.no_results': 'لا توجد نتائج',
    'footer.newsletter_title': 'انضمي لنشرتنا البريدية ✨',
    'footer.newsletter_desc': 'احصلي على خصم ١٠٪ على طلبك الأول وكوني أول من يعلم بعروض فلاش سيل والمنتجات الجديدة.',
    'footer.newsletter_btn': 'اشتراك',
    'footer.quick_links': 'روابط سريعة',
    'footer.customer_service': 'خدمة العملاء',
    'footer.address': 'العنوان',
    'footer.saudi_arabia': 'الرياض، المملكة العربية السعودية',
    'footer.king_fahd_road': 'طريق الملك فهد، برج العناية',
    'common.shop_now': 'تسوق الآن',
    'common.learn_more': 'تعرف علينا',
    'common.add_to_cart': 'إضافة للسلة',
    'common.view_details': 'عرض التفاصيل',
    'home.hero_badge': 'رؤية ٢٠٣٠ | العلامة الأولى في المملكة',
    'home.hero_title': 'ترطيب عميق يدوم طويلاً',
    'home.hero_with': 'مع الهارون',
    'home.hero_desc': 'منتجات عناية شخصية سعودية فاخرة. فازلين أصلي وكريمات ترطيب بتركيبة متطورة تمنحك ترطيباً يدوم ٢٤ ساعة.',
    'home.categories_title': 'تسوقي حسب الفئة',
    'home.categories_desc': 'أرقى تشكيلات الترطيب الفاخر لمختلف احتياجاتك',
    'home.flash_sale_title': 'عرض حصري لفترة محدودة',
    'home.flash_sale_desc': 'خصم حتى 30% على منتجات العناية المكثفة',
    'home.flash_sale_ends': 'ينتهي العرض خلال:',
  },
  en: {
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.categories': 'Categories',
    'nav.offers': 'Special Offers',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'header.free_shipping': 'Free shipping on orders over 200 SAR | Earn points with every purchase ✨',
    'header.search_placeholder': 'Search for a product...',
    'header.no_results': 'No results found',
    'footer.newsletter_title': 'Join our Newsletter ✨',
    'footer.newsletter_desc': 'Get 10% off your first order and be the first to know about flash sales and new products.',
    'footer.newsletter_btn': 'Subscribe',
    'footer.quick_links': 'Quick Links',
    'footer.customer_service': 'Customer Service',
    'footer.address': 'Address',
    'footer.saudi_arabia': 'Riyadh, Saudi Arabia',
    'footer.king_fahd_road': 'King Fahd Road, Al-Enaya Tower',
    'common.shop_now': 'Shop Now',
    'common.learn_more': 'Learn More',
    'common.add_to_cart': 'Add to Cart',
    'common.view_details': 'View Details',
    'home.hero_badge': 'Vision 2030 | The Kingdom\'s Premier Brand',
    'home.hero_title': 'Deep Hydration That Lasts',
    'home.hero_with': 'With Al Harun',
    'home.hero_desc': 'Premium Saudi personal care products. Original Vaseline and moisturizing creams with an advanced formula for 24-hour hydration.',
    'home.categories_title': 'Shop by Category',
    'home.categories_desc': 'The finest collections of luxury hydration for all your needs',
    'home.flash_sale_title': 'Exclusive Limited Time Offer',
    'home.flash_sale_desc': 'Up to 30% discount on intensive care products',
    'home.flash_sale_ends': 'Offer ends in:',
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'ar';
  });
  
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t, dir }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
