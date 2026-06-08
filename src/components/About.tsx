/* eslint-disable i18next/no-literal-string */
import { motion } from 'motion/react';
import { CheckCircle2, Users, Building2, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About({ preview = false }: { preview?: boolean }) {
  const features = [
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Quality Cleaning Solutions",
      description: "Formulated with premium ingredients to tackle the toughest dirt and grime."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Affordable Pricing",
      description: "Premium quality doesn't have to break the bank. We offer competitive prices."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Trusted by Households",
      description: "Thousands of families rely on Kerl for a safe, clean home environment."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Commercial Grade",
      description: "Powerful enough for hotels, schools, offices, and industrial spaces."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
                alt="Clean home environment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">About Kerl Detergents</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Redefining Cleanliness for Every Space
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Kerl Detergents, we believe that a clean environment is the foundation of a healthy, happy life. Born out of a passion for hygiene and freshness, our brand has grown to become a trusted name in households and businesses alike. We combine advanced cleaning technology with refreshing fragrances to deliver products that don't just clean—they revitalize.
            </p>

            {!preview ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1 text-emerald-500">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors text-lg"
              >
                Read More About Us <ArrowRight className="h-5 w-5" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
