import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { StoreProvider } from "./context/StoreContext";
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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QuickViewModal } from "./components/QuickViewModal";

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col rtl bg-[#F5F2ED]" dir="rtl" style={{ fontFamily: "'Helvetica Neue', Arial, 'Tajawal', sans-serif" }}>
      <StoreProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Header />
          <main className="flex-1 flex flex-col relative w-full overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/offers" element={<Offers />} />
            </Routes>
            <QuickViewModal />
          </main>
          <Footer />
        </Router>
      </CartProvider>
      </StoreProvider>
    </div>
  );
}
