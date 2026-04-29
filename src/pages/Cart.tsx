import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

  const formattedTotal = cartTotal.toFixed(2);
  const isFreeShipping = cartTotal >= 200;
  const missingForFreeShipping = isFreeShipping ? 0 : 200 - cartTotal;

  if (cart.length === 0) {
    return (
      <div className="flex-1 bg-[#FDFBF7] py-20 flex flex-col items-center justify-center text-center px-5">
        <div className="w-24 h-24 bg-white rounded-full shadow-sm border border-[#F0E6D2] flex items-center justify-center mb-6 text-gray-300">
           <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-[28px] font-[800] text-brand-dark mb-4">سلة المشتريات فارغة</h2>
        <p className="text-[#555] text-[15px] mb-8 max-w-sm">لم تقومي بإضافة أي منتجات إلى سلة المشتريات بعد. اكتشفي منتجاتنا المتميزة الآن.</p>
        <Link to="/shop" className="bg-brand-emerald text-white px-8 py-4 rounded-[2px] font-[700] text-[16px] hover:bg-[#043629] transition-colors shadow-lg shadow-brand-emerald/20 border-b-[3px] border-[#043629]">
          ابدئي التسوق
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#FDFBF7] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1 className="text-[32px] font-[800] text-brand-dark mb-8">سلة المشتريات ({cartCount})</h1>
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            {/* Free Shipping Progress */}
            <div className="bg-white p-5 rounded-[4px] border border-[#F0E6D2] mb-6 shadow-sm">
              <div className="flex justify-between text-[14px] font-[600] mb-2">
                <span className={isFreeShipping ? "text-brand-emerald" : "text-brand-dark"}>
                  {isFreeShipping ? "مبارك! لقد حصلتِ على شحن مجاني 🚚" : <span>باقي <span dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> {missingForFreeShipping.toFixed(2)}</span> للحصول على شحن مجاني</span>}
                </span>
              </div>
              <div className="h-2 w-full bg-[#F0F0F0] rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 rounded-full ${isFreeShipping ? 'bg-brand-emerald' : 'bg-brand-gold'}`}
                  style={{ width: `${Math.min(100, (cartTotal / 200) * 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white border border-[#F0F0F0] rounded-[4px] shadow-sm">
              {cart.map((item) => (
                <div key={item.product.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 border-b border-[#F0F0F0] last:border-0 relative">
                  <Link to={`/product/${item.product.id}`} className="w-24 h-24 shrink-0 bg-[#F9F9F9] rounded-[2px] border border-[#EAE5DD] p-2 flex items-center justify-center hover:border-brand-emerald transition-colors">
                    <img src={item.product.image} alt={item.product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  </Link>
                  
                  <div className="flex-1 text-center sm:text-right">
                    <span className="text-[11px] font-[600] text-brand-gold mb-1 block">{item.product.category}</span>
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-[700] text-[16px] text-brand-dark mb-2 hover:text-brand-emerald transition-colors">{item.product.name}</h3>
                    </Link>
                    <div className="text-[18px] font-[800] text-brand-emerald" dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> {item.product.price}</div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="absolute top-4 left-4 sm:static text-gray-400 hover:text-red-500 p-2 sm:p-0 transition-colors bg-gray-50 sm:bg-transparent rounded-full sm:rounded-none"
                      aria-label="إزالة المنتج"
                    >
                      <Trash2 className="w-5 h-5 sm:w-4 sm:h-4" />
                    </button>
                    
                    <div className="flex items-center justify-center sm:justify-start border border-[#EAE5DD] rounded-[2px] bg-white w-[120px] self-center sm:self-auto">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-[40px] h-[40px] flex items-center justify-center text-[#555] hover:bg-[#F9F9F9] transition-colors font-bold text-xl">-</button>
                      <span className="flex-1 text-center font-[700] text-[15px] text-brand-dark border-x border-[#EAE5DD]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-[40px] h-[40px] flex items-center justify-center text-[#555] hover:bg-[#F9F9F9] transition-colors font-bold text-xl">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/shop" className="inline-flex items-center gap-2 text-brand-emerald font-[600] mt-6 hover:underline">
              <ArrowRight className="w-4 h-4" /> العودة للتسوق
            </Link>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border border-[#F0F0F0] rounded-[4px] p-6 shadow-sm sticky top-24">
              <h2 className="text-[20px] font-[800] text-brand-dark mb-6 border-b border-[#F0F0F0] pb-4">ملخص الطلب</h2>
              
              <div className="space-y-4 mb-6 text-[15px]">
                <div className="flex justify-between">
                  <span className="text-[#555]">المجموع الفرعي</span>
                  <span className="font-[600] text-brand-dark" dir="ltr"><span className="icon-saudi_riyal mr-1 text-[18px]"></span> {formattedTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555]">الشحن</span>
                  <span className="font-[600] text-brand-dark">{isFreeShipping ? 'مجاني' : 'يُحسب في الخطوة القادمة'}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6 flex gap-2">
                <input type="text" placeholder="كوبون الخصم" className="flex-1 border border-[#EAE5DD] bg-[#F9F9F9] rounded-[2px] px-3 py-2 text-[14px] outline-none border-brand-emerald focus:bg-white transition-colors" />
                <button className="bg-brand-dark text-white px-4 py-2 rounded-[2px] text-[14px] font-[600]">تطبيق</button>
              </div>

              <div className="flex justify-between items-center border-t border-[#F0F0F0] pt-6 mb-8 text-[20px] font-[800]">
                <span className="text-brand-dark">الإجمالي</span>
                <span className="text-brand-emerald" dir="ltr"><span className="icon-saudi_riyal mr-1 text-[22px]"></span> {formattedTotal}</span>
              </div>

              <Link to="/checkout" className="w-full block bg-brand-emerald text-white text-center py-4 rounded-[2px] text-[16px] font-[700] hover:bg-[#043629] transition-colors border-b-[3px] border-[#043629] shadow-lg shadow-brand-emerald/20">
                متابعة الدفع
              </Link>

              <div className="mt-4 flex justify-center gap-2 grayscale opacity-60">
                 {/* Payment Icons */}
                 <div className="w-10 h-6 bg-gray-200 rounded"></div>
                 <div className="w-10 h-6 bg-gray-200 rounded"></div>
                 <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
