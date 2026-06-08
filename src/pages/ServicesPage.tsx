import { Services } from '../components/Services';
import { PageHeader } from '../components/PageHeader';
import { CTA } from '../components/CTA';
import { Clock, Truck, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function ServicesPage() {
  const highlights = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Get your orders delivered quickly across Ghana. Usually within 1-2 business days."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "All products meet strict quality standards and are tested for effectiveness."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our team is here to help you find the perfect cleaning solution for your needs."
    },
    {
      icon: Clock,
      title: "Easy Ordering",
      description: "Simple online ordering process with multiple payment options for your convenience."
    }
  ];

  const services = [
    {
      title: "Bulk Orders",
      description: "Wholesale pricing for businesses, retailers, and organizations. Contact us for custom quotes.",
      features: ["Custom quantities", "Wholesale pricing", "Dedicated support"]
    },
    {
      title: "Product Consultation",
      description: "Need help choosing the right product? Our experts can recommend the best solutions.",
      features: ["Free advice", "Product recommendations", "Usage tips"]
    },
    {
      title: "Corporate Supplies",
      description: "Reliable supply partnerships for businesses and institutions across Ghana.",
      features: ["Regular delivery schedules", "Invoice payment options", "Customized packages"]
    },
    {
      title: "Subscription Service",
      description: "Never run out of your favorite cleaning products with our convenient subscription.",
      features: ["Auto-replenishment", "Save 10% on subscriptions", "Flexible scheduling"]
    }
  ];

  return (
    <div className="pb-0">
      <PageHeader 
        title="Our Services" 
        description="Beyond products, we offer tailored solutions to meet the unique needs of families and businesses."
      />
      
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">What We Offer</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Beyond just selling products, we provide comprehensive solutions tailored to your specific needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-linear-to-br from-white to-emerald-50 p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <span className="text-emerald-600 font-bold mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Why Our Service Stands Out</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-3xl text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="bg-emerald-600 text-white rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-slate-600">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Original Services */}
      <Services preview={false} />
      
      <CTA />
    </div>
  );
}
