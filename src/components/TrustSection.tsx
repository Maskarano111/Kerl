import { motion } from 'motion/react';
import { Award, Users, Truck, Leaf } from 'lucide-react';

export function TrustSection() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "All products tested and approved for safety and effectiveness"
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join thousands of satisfied customers nationwide"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable nationwide shipping"
    },
    {
      icon: Leaf,
      title: "Value for Money",
      description: "Best prices on premium cleaning solutions"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
