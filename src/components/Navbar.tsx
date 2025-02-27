import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 rounded-full bg-spice-saffron flex items-center justify-center">
              <span className="text-white font-playfair font-bold"></span>
            </div> */}
            <span className="font-playfair font-semibold text-lg">
              <img src="./nobackgroundMCE.png" alt="" className="w-16 h-16" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-sm font-medium hover:text-spice-saffron transition-colors">Home</a>
            <a href="#journey" className="text-sm font-medium hover:text-spice-saffron transition-colors">Journey</a>
            <a href="#spices" className="text-sm font-medium hover:text-spice-saffron transition-colors">Our Products</a>
            <a href="#story" className="text-sm font-medium hover:text-spice-saffron transition-colors">Story</a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-spice-saffron text-white text-sm font-medium transition-all hover:shadow-md hover:bg-spice-saffron/90"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#hero" 
              className="py-2 border-b border-gray-100 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#journey" 
              className="py-2 border-b border-gray-100 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Journey
            </a>
            <a 
              href="#spices" 
              className="py-2 border-b border-gray-100 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Spices
            </a>
            <a 
              href="#story" 
              className="py-2 border-b border-gray-100 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Story
            </a>
            <a 
              href="#contact" 
              className="py-2 text-sm font-medium text-spice-saffron"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
