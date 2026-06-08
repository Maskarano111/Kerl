import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/useCart';

export function CartNotification() {
  const { cart } = useCart();
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      const lastItem = cart[cart.length - 1];
      const itemKey = `${lastItem.productId}-${lastItem.size}`;
      
      if (lastAdded !== itemKey) {
        setLastAdded(itemKey);
        setShow(true);
        
        const timer = setTimeout(() => {
          setShow(false);
        }, 3000);
        
        return () => clearTimeout(timer);
      }
    }
  }, [cart, lastAdded]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          className="fixed top-20 left-4 right-4 sm:left-auto sm:right-4 z-40 max-w-sm"
        >
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-emerald-200 p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
            <div className="shrink-0">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="grow">
              <p className="font-semibold text-slate-900">Added to Cart!</p>
              <p className="text-sm text-slate-600">Item successfully added to your shopping cart</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
