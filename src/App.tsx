import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigateToContact={() => setCurrentPage('contact')}
            onNavigateToStory={() => setCurrentPage('story')}
          />
        );
      case 'story':
        return <StoryPage onNavigateToContact={() => setCurrentPage('contact')} />;
      case 'products':
        return <ProductsPage onNavigateToContact={() => setCurrentPage('contact')} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Narasapur Lace</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Preserving the heritage of traditional crochet lace artistry from Andhra Pradesh since 1870.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('story')} className="text-gray-400 hover:text-white transition-colors">Our Story</button></li>
                <li><button onClick={() => setCurrentPage('products')} className="text-gray-400 hover:text-white transition-colors">Gallery</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Care Instructions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Narasapur, West Godavari</li>
                <li>Andhra Pradesh 534275</li>
                <li>+91 8074426242</li>
                <li>info@narasapurlace.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Narasapur Lace. All rights reserved. Handcrafted with love in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
