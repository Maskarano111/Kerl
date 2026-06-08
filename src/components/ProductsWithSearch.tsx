import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { useToast } from '../context/ToastContext';
import multiPurposeSoapImg from '../assets/images/liquid-soap.jpg';
import fabricSoftenerImg from '../assets/images/fabric-softener.jpg';
import bleachImg from '../assets/images/bleach.jpg';
import floorCleanerImg from '../assets/images/floor-cleaner.jpg';
import antisepticImg from '../assets/images/antiseptic.jpg';
import glassCleanerImg from '../assets/images/glass-cleaner.jpg';
import shampooImg from '../assets/images/shampoo.jpg';
import wcCleanerImg from '../assets/images/wc-cleaner.jpg';
import conditionerImg from '../assets/images/conditioner.jpg';

interface ProductPrice {
  size: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  image: string;
  color: string;
  category: string;
  prices: ProductPrice[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Multi-Purpose Liquid Soap",
    description: "Versatile cleaning power for dishes, surfaces, and everyday messes.",
    benefits: ["Cuts through grease", "Gentle on hands", "Fresh scent"],
    image: multiPurposeSoapImg,
    color: "bg-yellow-50",
    category: "Soaps",
    prices: [
      { size: "200ml", price: 5 },
      { size: "500ml", price: 10 },
      { size: "1 Litre", price: 15 },
      { size: "4.5 Litre", price: 50 },
    ]
  },
  {
    id: 2,
    name: "Fabric Softener",
    description: "Keep your clothes feeling incredibly soft and smelling fresh for days.",
    benefits: ["Reduces static", "Long-lasting fragrance", "Protects fabric fibers"],
    image: fabricSoftenerImg,
    color: "bg-pink-50",
    category: "Fabric Care",
    prices: [
      { size: "500ml", price: 10 },
      { size: "1 Litre", price: 20 },
      { size: "4.5 Litre", price: 80 },
    ]
  },
  {
    id: 3,
    name: "Bleach",
    description: "Industrial-strength whitening and disinfecting for tough jobs.",
    benefits: ["Kills 99.9% of germs", "Removes stubborn stains", "Whitens whites"],
    image: bleachImg,
    color: "bg-blue-50",
    category: "Disinfectants",
    prices: [
      { size: "500ml", price: 7 },
      { size: "1 Litre", price: 15 },
      { size: "4.5 Litre", price: 70 },
    ]
  },
  {
    id: 4,
    name: "Floor Cleaner",
    description: "Leaves floors sparkling clean with a streak-free shine.",
    benefits: ["Quick drying", "Safe for most surfaces", "Floral fragrance"],
    image: floorCleanerImg,
    color: "bg-emerald-50",
    category: "Surface Cleaners",
    prices: [
      { size: "1 Litre", price: 25 },
      { size: "4.5 Litre", price: 100 },
    ]
  },
  {
    id: 5,
    name: "Antiseptic (Dettol-type)",
    description: "First aid and personal hygiene liquid for complete protection.",
    benefits: ["Medical grade", "Soothes cuts & scratches", "Household disinfection"],
    image: antisepticImg,
    color: "bg-amber-50",
    category: "Disinfectants",
    prices: [
      { size: "250ml", price: 7 },
      { size: "500ml", price: 15 },
      { size: "1 Litre", price: 30 },
    ]
  },
  {
    id: 6,
    name: "Glass Cleaner",
    description: "Crystal-clear shine on all glass surfaces without streaks.",
    benefits: ["Streak-free finish", "Crystal clear", "Ammonia-free"],
    image: glassCleanerImg,
    color: "bg-cyan-50",
    category: "Surface Cleaners",
    prices: [
      { size: "500ml", price: 15 },
      { size: "750ml", price: 20 },
    ]
  },
  {
    id: 7,
    name: "WC Cleaner",
    description: "Powerful cleaning and sanitizing for toilet bowls.",
    benefits: ["Kills bacteria", "Removes stains", "Fresh scent"],
    image: wcCleanerImg,
    color: "bg-indigo-50",
    category: "Disinfectants",
    prices: [
      { size: "750ml", price: 25 },
      { size: "1 Litre", price: 30 },
    ]
  },
  {
    id: 8,
    name: "Shampoo",
    description: "Gentle hair cleansing with natural ingredients.",
    benefits: ["Nourishes scalp", "Strengthens hair", "Natural formula"],
    image: shampooImg,
    color: "bg-purple-50",
    category: "Hair Care",
    prices: [
      { size: "500ml", price: 15 },
      { size: "4.5 Litre", price: 50 },
    ]
  },
  {
    id: 9,
    name: "Conditioner",
    description: "Deep conditioning treatment for smooth, healthy hair.",
    benefits: ["Moisturizes deeply", "Adds shine", "Easy detangle"],
    image: conditionerImg,
    color: "bg-rose-50",
    category: "Hair Care",
    prices: [
      { size: "500ml", price: 20 },
      { size: "4.5 Litre", price: 60 },
    ]
  }
];

export function ProductsWithSearch({ preview = false }: { preview?: boolean }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>(() => {
    const obj: { [key: number]: string } = {};
    products.forEach(p => {
      if (p.prices && p.prices.length > 0) obj[p.id] = p.prices[0].size;
    });
    return obj;
  });

  const { addToCart } = useCart();
  const { addToast } = useToast();

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const displayProducts = preview ? filteredProducts.slice(0, 4) : filteredProducts;

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product: Product) => {
    const size = selectedSizes[product.id];
    const priceObj = product.prices.find(p => p.size === size);
    if (!priceObj) return;
    addToCart({
      productId: product.id,
      name: product.name,
      size,
      price: priceObj.price,
      quantity: 1,
    });
    addToast('success', `${product.name} added to cart!`);
  };

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Range</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {preview ? "Featured Products" : "Premium Cleaning Products"}
          </h3>
          <p className="text-lg text-slate-600">
            Discover our comprehensive range of cleaning solutions designed to tackle every challenge, leaving your space spotless and fresh.
          </p>
        </div>

        {!preview && (
          <>
            {/* Search Bar */}
            <div className="mb-8 relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="mb-12 flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category || (category === 'All' && !selectedCategory)
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mb-6 text-center text-slate-600">
              <p>Showing <span className="font-bold text-slate-900">{displayProducts.length}</span> product{displayProducts.length !== 1 ? 's' : ''}</p>
            </div>
          </>
        )}

        {displayProducts.length === 0 && !preview ? (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600">No products found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="mt-4 text-emerald-600 font-medium hover:text-emerald-700"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {displayProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
              >
                <div className="w-full aspect-4/7 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
                  <span className="text-xs font-bold text-emerald-600 mb-2 uppercase tracking-wide">{product.category}</span>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-2 line-clamp-2">{product.name}</h4>
                  <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                  <ul className="space-y-1.5 mb-3 sm:mb-4 grow hidden sm:block">
                    {product.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Size:</label>
                    <select
                      className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-colors"
                      value={selectedSizes[product.id]}
                      onChange={e => handleSizeChange(product.id, e.target.value)}
                    >
                      {product.prices.map((p) => (
                        <option key={p.size} value={p.size}>{p.size} - {p.price} GH</option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:shadow-emerald-600/50 transition-all duration-300 mt-auto"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {preview && (
          <div className="mt-16 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 transition-colors"
            >
              View All Products <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
