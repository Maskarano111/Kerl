import { motion } from 'motion/react';
import { Package, Truck, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services({ preview = false }: { preview?: boolean }) {
  const services = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Bulk Purchase Options",
      description: "Get the best value for your money with our wholesale and bulk purchase discounts. Perfect for large families or resellers.",
      color: "bg-sky-100 text-sky-600"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Nationwide Delivery",
      description: "We deliver our premium cleaning products right to your doorstep, anywhere in the country. Fast, reliable, and secure.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Custom Orders for Business",
      description: "Tailored cleaning solutions and supply contracts for hotels, schools, hospitals, and corporate offices.",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              More Than Just Products
            </h3>
          </div>
          {preview ? (
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              Discuss your needs <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:bg-emerald-50/30 transition-colors"
            >
              <div className={`inline-flex p-4 rounded-2xl ${service.color} mb-6`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
