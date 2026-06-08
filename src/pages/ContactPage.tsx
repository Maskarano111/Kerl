import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { PageHeader } from '../components/PageHeader';
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactPage() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp for quick responses",
      detail: "+233 246 907 045",
      link: "https://wa.me/233246907045"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email and we'll respond within 24 hours",
      detail: "info@kerldetergents.com",
      link: "mailto:info@kerldetergents.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come visit our office or store location",
      detail: "Somaya & Accra, Ghana",
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      description: "We're available to serve you during business hours",
      detail: "Mon - Fri: 8am - 6pm",
      link: "#"
    }
  ];

  return (
    <div className="pb-0">
      <PageHeader 
        title="Contact Us" 
        description="We're always here to help. Reach out to us for orders, inquiries, or support."
      />

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We're here to help! Choose your preferred way to contact us and we'll get back to you promptly</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-linear-to-br from-emerald-50 to-emerald-100 p-6 rounded-3xl text-center border-2 border-emerald-200 hover:border-emerald-400 transition-all cursor-pointer hover:shadow-lg"
                >
                  <div className="bg-emerald-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{method.description}</p>
                  <p className="text-emerald-600 font-bold text-base">{method.detail}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Response Banner */}
      <section className="py-12 bg-emerald-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-emerald-600 to-emerald-700 p-8 rounded-3xl text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-3">Quick Response Guaranteed</h3>
            <p className="mb-1 text-emerald-100">Have a question about our products or services?</p>
            <p className="text-emerald-100">We typically respond within 24 hours during business days via your preferred contact method.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
