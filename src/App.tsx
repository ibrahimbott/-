import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { StoreProvider } from "./context/StoreContext";
import { AppProvider, useApp } from "./context/AppContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Offers } from "./pages/Offers";
import { Categories } from "./pages/Categories";
import { useEffect } from "react";
import { QuickViewModal } from "./components/QuickViewModal";
import { motion, AnimatePresence } from "motion/react";

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const { dir } = useApp();

  return (
    <div className={`min-h-screen flex flex-col ${dir === 'rtl' ? 'rtl' : 'ltr'} bg-[#F5F2ED] dark:bg-brand-dark transition-colors duration-300`} dir={dir}>
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex flex-col relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 flex flex-col"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <QuickViewModal />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <StoreProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
      </StoreProvider>
    </AppProvider>
  );
}
