import { ProductsWithSearch } from '../components/ProductsWithSearch';
import { CTA } from '../components/CTA';
import { PageHeader } from '../components/PageHeader';
import { Testimonials } from '../components/Testimonials';
import { Check, Sparkles, Droplet, Wind } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductsPage() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Lab-tested formulas that deliver superior cleaning power"
    },
    {
      icon: Droplet,
      title: "Effective Results",
      description: "Powerful formulations that remove stubborn stains and dirt"
    },
    {
      icon: Wind,
      title: "Fresh Scent",
      description: "Leaves your home smelling clean and fresh all day long"
    },
    {
      icon: Check,
      title: "Best Value",
      description: "Affordable pricing without compromising on quality"
    }
  ];

  const features = [
    "✓ Safe for your family and pets",
    "✓ Environmentally conscious formulations",
    "✓ Suitable for all surfaces",
    "✓ Long-lasting freshness",
    "✓ Trusted by thousands of households"
  ];

  return (
    <div className="pb-0">
      <PageHeader 
        title="Our Products" 
        description="Explore our full range of premium cleaning solutions designed for every surface and fabric."
      />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Why Our Products Excel</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-linear-to-br from-emerald-50 to-emerald-100 p-6 rounded-3xl text-center border-2 border-emerald-200 hover:border-emerald-400 transition-colors"
                >
                  <div className="bg-emerald-600 text-white rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-700">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Every Product Guaranteed</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start text-slate-700 text-lg"
                  >
                    <span className="text-emerald-600 font-bold mr-4 text-2xl">✓</span>
                    <span className="font-medium">{feature.split('✓')[1]}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-block px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors"
              >
                Shop Our Collection
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-emerald-100 to-emerald-50 rounded-3xl p-12 text-center border-2 border-emerald-200"
            >
              <div className="text-6xl font-bold text-emerald-600 mb-4">100%</div>
              <p className="text-2xl font-semibold text-slate-900 mb-3">Satisfaction Guaranteed</p>
              <p className="text-slate-700 leading-relaxed">We stand behind every product. If you're not completely satisfied with the quality and results, we're here to make it right. Your happiness is our priority.</p>
              <motion.div
                className="mt-8 pt-8 border-t border-emerald-200"
              >
                <p className="text-sm font-semibold text-emerald-600 mb-3">Trusted Quality Indicators:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">Lab Tested</span>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">Safe Formula</span>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">Fast Acting</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <ProductsWithSearch preview={false} />

      {/* Testimonials */}
      <Testimonials />
      
      <CTA />
    </div>
  );
}
