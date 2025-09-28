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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
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
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-industrial-blue transition-colors"
              data-testid="link-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-industrial-blue transition-colors"
              data-testid="link-products"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-foreground hover:text-industrial-blue transition-colors"
              data-testid="link-industries"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('sustainability')}
              className="text-foreground hover:text-industrial-blue transition-colors"
              data-testid="link-sustainability"
            >
              Sustainability
            </button>
            <button 
              onClick={() => scrollToSection('global-reach')}
              className="text-foreground hover:text-industrial-blue transition-colors"
              data-testid="link-global"
            >
              Global Reach
            </button>
            <button 
              onClick={() => scrollToSection('careers')}
              className="text-foreground hover:text-industrial-blue transition-colors"
              data-testid="link-careers"
            >
              Careers
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-industrial-blue hover:bg-industrial-blue/90"
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
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border" data-testid="nav-mobile">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-industrial-blue transition-colors"
                data-testid="link-mobile-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-industrial-blue transition-colors"
                data-testid="link-mobile-products"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-industrial-blue transition-colors"
                data-testid="link-mobile-industries"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('sustainability')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-industrial-blue transition-colors"
                data-testid="link-mobile-sustainability"
              >
                Sustainability
              </button>
              <button 
                onClick={() => scrollToSection('global-reach')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-industrial-blue transition-colors"
                data-testid="link-mobile-global"
              >
                Global Reach
              </button>
              <button 
                onClick={() => scrollToSection('careers')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-industrial-blue transition-colors"
                data-testid="link-mobile-careers"
              >
                Careers
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 bg-industrial-blue hover:bg-industrial-blue/90"
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