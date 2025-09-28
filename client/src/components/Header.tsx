import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import afLogo from '@assets/AFC_Logo_1759067779424.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-border/20' : 'bg-white/90 backdrop-blur-sm'
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={afLogo} 
              alt="AF Chemicals Logo" 
              className="h-10 w-auto"
              data-testid="img-logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="relative px-3 py-2 font-medium text-premium-dark/80 hover:text-industrial-blue transition-all duration-300 hover:scale-105"
              data-testid="link-home"
            >
              Home
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-industrial-blue to-sustainability-green scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="relative px-3 py-2 font-medium text-premium-dark/80 hover:text-industrial-blue transition-all duration-300 hover:scale-105"
              data-testid="link-products"
            >
              Products
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-industrial-blue to-sustainability-green scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="relative px-3 py-2 font-medium text-premium-dark/80 hover:text-industrial-blue transition-all duration-300 hover:scale-105"
              data-testid="link-industries"
            >
              Industries
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-industrial-blue to-sustainability-green scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('sustainability')}
              className="relative px-3 py-2 font-medium text-premium-dark/80 hover:text-industrial-blue transition-all duration-300 hover:scale-105"
              data-testid="link-sustainability"
            >
              Sustainability
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-industrial-blue to-sustainability-green scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('global-reach')}
              className="relative px-3 py-2 font-medium text-premium-dark/80 hover:text-industrial-blue transition-all duration-300 hover:scale-105"
              data-testid="link-global"
            >
              Global Reach
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-industrial-blue to-sustainability-green scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('careers')}
              className="relative px-3 py-2 font-medium text-premium-dark/80 hover:text-industrial-blue transition-all duration-300 hover:scale-105"
              data-testid="link-careers"
            >
              Careers
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-industrial-blue to-sustainability-green scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-premium bg-gradient-to-r from-cta-red to-highlight-orange text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              data-testid="button-contact"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            size="icon" 
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/30 shadow-lg" data-testid="nav-mobile">
            <div className="px-4 pt-4 pb-6 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 font-medium text-premium-dark/80 hover:text-industrial-blue hover:bg-muted/50 rounded-lg transition-all duration-300"
                data-testid="link-mobile-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-4 py-3 font-medium text-premium-dark/80 hover:text-industrial-blue hover:bg-muted/50 rounded-lg transition-all duration-300"
                data-testid="link-mobile-products"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className="block w-full text-left px-4 py-3 font-medium text-premium-dark/80 hover:text-industrial-blue hover:bg-muted/50 rounded-lg transition-all duration-300"
                data-testid="link-mobile-industries"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('sustainability')}
                className="block w-full text-left px-4 py-3 font-medium text-premium-dark/80 hover:text-industrial-blue hover:bg-muted/50 rounded-lg transition-all duration-300"
                data-testid="link-mobile-sustainability"
              >
                Sustainability
              </button>
              <button 
                onClick={() => scrollToSection('global-reach')}
                className="block w-full text-left px-4 py-3 font-medium text-premium-dark/80 hover:text-industrial-blue hover:bg-muted/50 rounded-lg transition-all duration-300"
                data-testid="link-mobile-global"
              >
                Global Reach
              </button>
              <button 
                onClick={() => scrollToSection('careers')}
                className="block w-full text-left px-4 py-3 font-medium text-premium-dark/80 hover:text-industrial-blue hover:bg-muted/50 rounded-lg transition-all duration-300"
                data-testid="link-mobile-careers"
              >
                Careers
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 btn-premium bg-gradient-to-r from-cta-red to-highlight-orange text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-mobile-contact"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;