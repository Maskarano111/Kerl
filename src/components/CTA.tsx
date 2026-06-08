import { motion } from 'motion/react';
import { Truck, PhoneCall, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-20 bg-emerald-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-emerald-700/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 border border-emerald-500/50 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started? 
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Shop from our complete range of premium cleaning solutions. Fast checkout, nationwide delivery, and unbeatable prices.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <Link
                to="/products"
                className="w-full sm:w-auto bg-white text-emerald-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20"
              >
                <ShoppingCart className="h-5 w-5" />
                Shop Now
              </Link>
              <a
                href="https://wa.me/233246907045"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-100 text-emerald-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-5 w-5" />
                Call Us
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-500/30 flex flex-col sm:flex-row items-center justify-center gap-6 text-emerald-50">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-white" />
                <span className="font-medium">Nationwide Delivery</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-emerald-400/30" />
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-white" />
                <span className="font-medium">Secure Checkout</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
