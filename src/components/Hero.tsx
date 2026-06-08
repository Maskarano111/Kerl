
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Wind, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/images/hom.jpg';

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-emerald-50/50" />
      <div className="absolute top-0 right-0 -z-10 w-200 h-200 bg-emerald-100/40 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-150 h-150 bg-sky-100/40 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span>Premium Cleaning Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Deep Clean. <br />
              <span className="text-emerald-600">Fresh Fragrance.</span> <br />
              Powerful Results.
            </h1>
            
            <ul className="space-y-3 mb-8 text-lg text-slate-600">
              <li className="flex items-center gap-3">
                <div className="bg-emerald-100 p-1 rounded-full text-emerald-600">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                Removes tough stains effortlessly
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-emerald-100 p-1 rounded-full text-emerald-600">
                  <Wind className="h-5 w-5 text-emerald-600" />
                </div>
                Long-lasting, refreshing fragrance
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-emerald-100 p-1 rounded-full text-emerald-600">
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                </div>
                Deep cleaning action for all surfaces
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="btn-primary"
              >
                Order Now
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-145 flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-400 to-sky-300 rounded-[3rem] rotate-6 opacity-20 blur-xl" />
              <img
                src={homeImg}
                alt="Cleaning Products"
                className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl"
              />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-emerald-100 p-1.5 sm:p-2 rounded-full text-emerald-600">
                    <Sparkles className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">100%</p>
                    <p className="text-xs text-slate-500">Effective</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-slate-400"
      >
        <span className="text-xs font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
