import { motion } from 'motion/react';
import { ShoppingCart, MapPin, Phone, Package } from 'lucide-react';

export function UserJourneyGuide() {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Browse & Select",
      description: "Explore our premium cleaning products and choose what you need"
    },
    {
      icon: Package,
      title: "Add to Cart",
      description: "Select your preferred sizes and add multiple items to your cart"
    },
    {
      icon: Phone,
      title: "Checkout via WhatsApp",
      description: "Review your order and proceed to WhatsApp for quick, secure checkout"
    },
    {
      icon: MapPin,
      title: "Fast Delivery",
      description: "Receive your order quickly with nationwide delivery available"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">How It Works</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">Simple, fast, and secure shopping experience from start to finish</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 h-full flex flex-col items-center text-center border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
                  <div className="bg-emerald-600 text-white rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
                    <Icon className="h-6 sm:h-8 w-6 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600">{step.description}</p>
                  <div className="mt-3 sm:mt-4 text-emerald-600 font-bold text-xs sm:text-sm">Step {index + 1}</div>
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-400 transform -translate-y-1/2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
