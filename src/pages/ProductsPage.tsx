import { useState } from 'react';
import { Search, Filter, Heart, MessageCircle } from 'lucide-react';

interface Showcase {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

interface ProductsPageProps {
  onNavigateToContact?: () => void;
}

export default function ProductsPage({ onNavigateToContact }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Creations' },
    { id: 'home-decor', name: 'Home Décor' },
    { id: 'fashion', name: 'Fashion & Wearables' },
    { id: 'custom', name: 'Custom Projects' },
  ];

  const showcases: Showcase[] = [
    {
      id: 1,
      name: 'Classic Table Runner',
      category: 'home-decor',
      description: 'Elegant handcrafted lace table runner featuring traditional floral patterns. Perfect for dining tables and special occasions.',
      image: 'table-runner'
    },
    {
      id: 2,
      name: 'Decorative Doilies Set',
      category: 'home-decor',
      description: 'Set of intricate crochet doilies in various sizes. Ideal for tea tables, side tables, and decorative displays.',
      image: 'doilies'
    },
    {
      id: 3,
      name: 'Lace Curtain Panels',
      category: 'home-decor',
      description: 'Delicate lace curtain panels that add vintage charm to any window. Available in various sizes and patterns.',
      image: 'curtains'
    },
    {
      id: 4,
      name: 'Decorative Cushion Covers',
      category: 'home-decor',
      description: 'Luxurious cushion covers with intricate lace details. Each piece showcases unique traditional designs.',
      image: 'cushions'
    },
    {
      id: 5,
      name: 'Lace Shawl',
      category: 'fashion',
      description: 'Lightweight and elegant lace shawl perfect for special occasions. Delicate patterns showcase masterful craftsmanship.',
      image: 'shawl'
    },
    {
      id: 6,
      name: 'Bridal Veil',
      category: 'fashion',
      description: 'Exquisite handcrafted bridal veil with traditional motifs. A timeless piece for your special day.',
      image: 'veil'
    },
    {
      id: 7,
      name: 'Lace Collar Set',
      category: 'fashion',
      description: 'Detachable lace collar and cuffs set. Perfect for adding vintage elegance to traditional attire.',
      image: 'collar'
    },
    {
      id: 8,
      name: 'Fashion Stole',
      category: 'fashion',
      description: 'Versatile lace stole that complements both traditional and contemporary attire. Handcrafted with precision.',
      image: 'stole'
    },
    {
      id: 9,
      name: 'Custom Wedding Décor',
      category: 'custom',
      description: 'Personalized lace decorations for weddings including table settings, backdrops, and aisle runners.',
      image: 'wedding'
    },
    {
      id: 10,
      name: 'Bespoke Table Settings',
      category: 'custom',
      description: 'Custom-designed placemats, napkin rings, and table runners tailored to your specifications.',
      image: 'table-settings'
    },
    {
      id: 11,
      name: 'Personalized Gifts',
      category: 'custom',
      description: 'Create unique lace pieces with custom patterns, initials, or special messages for memorable gifts.',
      image: 'gifts'
    },
    {
      id: 12,
      name: 'Corporate Event Collections',
      category: 'custom',
      description: 'Bespoke lace collections for corporate events, hotels, and retail establishments. Bulk orders welcome.',
      image: 'corporate'
    },
  ];

  const filteredShowcases = showcases.filter(showcase => {
    const matchesCategory = selectedCategory === 'all' || showcase.category === selectedCategory;
    const matchesSearch = showcase.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         showcase.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Creations</h1>
          <p className="text-xl text-amber-100">Explore our portfolio of handcrafted lace masterpieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our creations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredShowcases.length}</span> creations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShowcases.map(showcase => (
            <div key={showcase.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl mb-2">🧶</div>
                  <p className="text-sm text-amber-800 font-medium">{showcase.name}</p>
                </div>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-amber-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                    {categories.find(c => c.id === showcase.category)?.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{showcase.name}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {showcase.description}
                </p>

                <button onClick={onNavigateToContact} className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2 font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span>Inquire About This</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Something Beautiful?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Browse our portfolio and connect with us to discuss your custom lace project. Our artisans are ready to bring your vision to life.
          </p>
          <button onClick={onNavigateToContact} className="bg-white text-amber-700 px-10 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-200 shadow-lg">
            Get in Touch
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Browse & Connect</h3>
            <p className="text-gray-600">
              Explore our portfolio of handcrafted pieces and reach out with your interests and requirements.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customization Options</h3>
            <p className="text-gray-600">
              Every piece can be customized. Share your specifications and our team will provide detailed quotes.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Handcrafted Excellence</h3>
            <p className="text-gray-600">
              From concept to creation, every lace piece is made with traditional techniques and utmost care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
