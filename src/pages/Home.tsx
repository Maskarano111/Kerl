

import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProductsWithSearch } from '../components/ProductsWithSearch';
import { CTA } from '../components/CTA';
import { UserJourneyGuide } from '../components/UserJourneyGuide';
import { TrustSection } from '../components/TrustSection';
import { motion } from 'motion/react';
import { Star, Zap, Users } from 'lucide-react';

export function Home() {
  const stats = [
    { number: "100+", label: "Happy Customers", icon: Users },
    { number: "100%", label: "Satisfaction Rate", icon: Star },
    { number: "24hrs", label: "Fast Delivery", icon: Zap }
  ];

  const reviews = [
    {
      name: "Ama Yeboah",
      location: "Accra",
      rating: 5,
      text: "Kerl detergents are the best! My clothes come out sparkling clean every time."
    },
    {
      name: "Kwame Mensah",
      location: "Kumasi",
      rating: 5,
      text: "Finally found a product that actually works on tough stains. Highly recommended!"
    },
    {
      name: "Abena Osei",
      location: "Tema",
      rating: 5,
      text: "Great quality, affordable prices, and amazing customer service. What's not to love?"
    }
  ];

  return (
    <>
      {/* Unique Hero Section */}
      <Hero />

      {/* Brief About Section */}
      <motion.section
        className="py-10 sm:py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-5xl mx-auto px-2 xs:px-4 text-center">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-emerald-700 mb-3 sm:mb-4">Welcome to Kerl Detergents</h2>
          <p className="text-base xs:text-lg text-slate-600 mb-4 sm:mb-6">
            Experience the next level of clean with our premium, affordable, and trusted cleaning solutions for homes and businesses. Discover why thousands choose Kerl for a fresher, healthier environment.
          </p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-emerald-100" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">{stat.number}</div>
                  <div className="text-sm sm:text-base text-emerald-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Journey Guide */}
      <UserJourneyGuide />

      {/* Special Offer Banner */}
      <motion.section
        className="py-12 sm:py-16 bg-linear-to-r from-emerald-600 to-emerald-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            🎉 Limited Time Offer
          </motion.h3>
          <p className="text-lg sm:text-xl text-emerald-100 mb-6 max-w-2xl mx-auto">
            Get 15% off on your first order! Use code <span className="font-bold text-white">KERL15</span> at checkout
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/products'}
            className="px-8 py-3 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors"
          >
            Claim Offer Now
          </motion.button>
        </div>
      </motion.section>

      {/* Featured Products */}
      <ProductsWithSearch preview={true} />

      {/* Customer Reviews Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-600">Real reviews from real customers who trust Kerl</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-600">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <motion.section
        className="py-12 sm:py-16 bg-linear-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">Stay Updated</h3>
          <p className="text-slate-700 mb-6">Subscribe to get exclusive offers, new product launches, and cleaning tips delivered to your inbox</p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-emerald-300 focus:border-emerald-600 focus:outline-none bg-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-xs text-slate-600 mt-4">No spam, just great deals and tips. Unsubscribe anytime.</p>
        </div>
      </motion.section>

      {/* Trust Section */}
      <TrustSection />

      {/* Call to Action */}
      <CTA />
    </>
  );
}
