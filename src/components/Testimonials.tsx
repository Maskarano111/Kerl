import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Homeowner",
      content: "The multi-purpose liquid soap is incredible. It cuts through grease faster than anything I've used before, and the lemon scent is so refreshing.",
      rating: 5
    },
    {
      name: "David K.",
      role: "Hotel Manager",
      content: "We switched to Kerl for our hotel's cleaning supplies. The bulk pricing is great, and the floor cleaner leaves our lobby looking immaculate.",
      rating: 5
    },
    {
      name: "Grace O.",
      role: "Mother of 3",
      content: "The fabric softener is a game changer. My kids' clothes are softer and smell amazing for days. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-300 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Trusted by Our Customers
          </h3>
          <p className="text-white text-lg">
            Don't just take our word for it. Hear what our satisfied customers have to say about Kerl Detergents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-700/50 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-emerald-300/60" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white mb-8 leading-relaxed relative z-10 font-medium">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                <p className="text-emerald-200 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
