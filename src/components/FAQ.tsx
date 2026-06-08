import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Do you offer nationwide delivery?",
      answer: "Yes, we deliver across the country. Delivery times and fees vary depending on your location. Contact us via WhatsApp for specific delivery details to your area."
    },
    {
      question: "Can I buy in bulk for my business?",
      answer: "Absolutely! We supply hotels, schools, hospitals, and offices. We offer special wholesale pricing for bulk purchases. Please reach out to our sales team for a custom quote."
    },
    {
      question: "Are your products safe for children and pets?",
      answer: "Our standard cleaning products are safe when used as directed. However, like all cleaning agents, they should be stored out of reach of children and pets. We also offer specific gentle formulations."
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order directly through our WhatsApp line (024 690 7045 or 0505 841 022), call us, or fill out the contact form on this website. Our team will process your order immediately."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
