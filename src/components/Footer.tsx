import { Droplets, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setSubscriptionStatus('error');
      return;
    }

    setSubscriptionStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 mb-12 lg:mb-16 lg:grid lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6 order-1">
            <Link to="/" className="flex items-center gap-2 mb-2">
              <Droplets className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold text-white tracking-tight">Kerl Detergents</span>
            </Link>
            <p className="text-slate-400 max-w-md">
              Providing premium, affordable, and effective cleaning solutions for households and businesses nationwide. Deep clean, fresh fragrance, powerful results.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe to our newsletter"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={subscriptionStatus === 'loading'}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {subscriptionStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {subscriptionStatus === 'success' && (
              <p className="text-emerald-400 text-sm">✓ Thanks for subscribing!</p>
            )}
            {subscriptionStatus === 'error' && (
              <p className="text-red-400 text-sm">Please enter a valid email address.</p>
            )}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com/@kerl.ent" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="order-3 lg:order-2">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="order-2 lg:order-3">
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li>Phone: 024 690 7045 / 0505 841 022</li>
              <li>Email: info@kerldetergents.com</li>
              <li>Location: Accra, Ghana</li>
              <li>Hours: Mon - Sat, 8am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 mt-8">
          <p className="text-center">&copy; {new Date().getFullYear()} Kerl Detergents. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
