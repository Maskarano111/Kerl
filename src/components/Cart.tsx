import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingCart, AlertCircle } from 'lucide-react';
import { useCart } from '../context/useCart';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

export function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { addToast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (cart.length === 0) {
    return (
      <section className="py-24 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="h-16 w-16 text-slate-300" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Cart is Empty</h2>
          <p className="text-lg text-slate-600 mb-8">Start shopping to add items to your cart!</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  const { cartTotal, itemCount } = useMemo(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    return { cartTotal: total, itemCount: count };
  }, [cart]);

  const whatsappMessage = cart
    .map(item => `${item.quantity}x ${item.name} (${item.size}) - ${item.price} GH each`)
    .join('%0A');

  const handleCheckout = () => {
    setIsCheckingOut(true);
    addToast('info', 'Opening WhatsApp to complete your order...');
    
    setTimeout(() => {
      const message = `I would like to order the following items:%0A${whatsappMessage}%0A%0ATotal: ${cartTotal} GH`;
      window.open(`https://wa.me/233246907045?text=${message}`, '_blank');
      setIsCheckingOut(false);
    }, 500);
  };

  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Shopping Cart</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              {cart.map((item, index) => (
                <motion.div
                  key={`${item.productId}-${item.size}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between ${
                    index !== cart.length - 1 ? 'border-b border-slate-200' : ''
                  }`}
                >
                  <div className="grow w-full">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{item.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">Size: <span className="font-semibold text-slate-900">{item.size}</span></p>
                    <p className="text-base sm:text-lg font-bold text-emerald-600">{item.price} GH</p>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                    <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                        className="p-1 hover:bg-slate-200 rounded transition-colors"
                      >
                        <Minus className="h-5 w-5 text-slate-600" />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.productId, item.size, Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-12 text-center border-0 bg-transparent font-bold text-slate-900 focus:outline-none"
                        min="1"
                      />
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                        className="p-1 hover:bg-slate-200 rounded transition-colors"
                      >
                        <Plus className="h-5 w-5 text-slate-600" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-600 mb-1">Subtotal</p>
                      <p className="text-xl font-bold text-slate-900">{item.price * item.quantity} GH</p>
                    </div>

                    <button
                      onClick={() => {
                        removeFromCart(item.productId, item.size);
                        addToast('info', `${item.name} removed from cart`);
                      }}
                      className="p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-8 sticky top-20 lg:top-24"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Order Summary</h3>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between items-center text-sm sm:text-base text-slate-600">
                  <span>Items ({itemCount})</span>
                  <span className="font-semibold text-slate-900">{itemCount}</span>
                </div>
                <div className="border-t border-slate-200 pt-3 sm:pt-4 flex justify-between items-center">
                  <span className="text-base sm:text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-600">{cartTotal} GH</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-emerald-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 mb-3 sm:mb-4"
              >
                {isCheckingOut ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 sm:h-5 w-4 sm:w-5" />
                    Proceed to Checkout
                  </>
                )}
              </button>

              <Link
                to="/products"
                className="w-full border-2 border-slate-200 text-slate-700 px-6 py-4 rounded-xl font-bold hover:border-slate-300 transition-colors flex items-center justify-center"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
