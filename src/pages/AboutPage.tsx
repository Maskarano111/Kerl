import { About } from '../components/About';
import { FAQ } from '../components/FAQ';
import { PageHeader } from '../components/PageHeader';
import { Testimonials } from '../components/Testimonials';
import { Shield, Leaf, Zap, Heart, Target, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "Premium, tested products that deliver results every time"
    },
    {
      icon: Heart,
      title: "Care",
      description: "Safe, effective solutions that protect your family and home"
    },
    {
      icon: Leaf,
      title: "Responsibility",
      description: "Environmentally conscious practices in all we do"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving formulas for better cleaning"
    }
  ];

  return (  
    <div className="pb-0">
      <PageHeader 
        title="About Kerl Detergents" 
        description="Learn about our journey, our values, and our commitment to providing the best cleaning solutions."
      />
      <About preview={false} />
      
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-emerald-700 to-emerald-800 text-white p-8 sm:p-12 rounded-3xl text-center"
          >
            <div className="flex justify-center mb-6">
              <Target className="h-10 w-10 text-emerald-300" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-emerald-50">
              To provide affordable, high-quality cleaning solutions that empower families and businesses across Ghana to maintain clean, healthy, and hygienic environments while upholding our commitment to excellence and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Vision & Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-emerald-100 text-emerald-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To become Ghana's most trusted and leading detergent brand, recognized for innovation, quality, and reliability. We aim to transform how Ghanaians approach cleaning, one home at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-yellow-100 text-yellow-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
              <p className="text-slate-700 leading-relaxed">
                Excellence in every drop. Integrity in our business practices. Sustainability in our approach. Customer-first in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">What drives everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-linear-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl border-2 border-emerald-200 text-center hover:border-emerald-400 transition-all hover:shadow-lg"
                >
                  <div className="bg-emerald-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-700">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Why Choose Kerl?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="text-5xl font-bold text-emerald-600 mb-4">100+</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Happy Customers</h3>
              <p className="text-slate-600">Trusted by satisfied customers who rely on us for their cleaning needs daily.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="text-5xl font-bold text-emerald-600 mb-4">100%</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Quality Assured</h3>
              <p className="text-slate-600">Every product undergoes rigorous testing to ensure maximum effectiveness and safety.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="text-5xl font-bold text-emerald-600 mb-4">24hrs</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Fast Delivery</h3>
              <p className="text-slate-600">Quick and reliable delivery across Ghana. Your order reaches you promptly.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
