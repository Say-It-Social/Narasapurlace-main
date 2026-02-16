import { Home, ShoppingBag, Mail, BookOpen } from 'lucide-react';
import logo from "../assets/logo.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'story', label: 'Our Story', icon: BookOpen },
    { id: 'products', label: 'Gallery', icon: ShoppingBag },
    { id: 'contact', label: 'Contact Us', icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Narasapur Lace Logo"
              className="h-10 sm:h-20 w-auto"
            />
            <div className="hidden sm:block text-sm text-amber-700 leading-tight">
              Traditional<br />Crochet Artistry
            </div>
          </div>

          <div className="flex space-x-1 sm:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 ${currentPage === item.id
                      ? 'bg-amber-100 text-amber-900 font-semibold'
                      : 'text-gray-700 hover:bg-amber-50'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
