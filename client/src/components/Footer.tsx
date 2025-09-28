import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import afLogo from '@assets/AFC_Logo_1759067779424.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Industries', id: 'industries' },
    { name: 'Sustainability', id: 'sustainability' },
    { name: 'Global Reach', id: 'global-reach' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' }
  ];

  const industries = [
    'Carbon Steel',
    'Stainless Steel', 
    'Abrasives',
    'Cement Production',
    'Chemical Processing',
    'Industrial Applications'
  ];

  const globalOffices = [
    'Switzerland (HQ)',
    'Germany',
    'Brazil',
    'India',
    'South Africa',
    'China'
  ];

  return (
    <footer className="bg-industrial-blue text-white py-16" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6" data-testid="section-company-info">
            <div>
              <img 
                src={afLogo} 
                alt="AF Chemicals Logo" 
                className="h-12 w-auto mb-4 brightness-0 invert"
                data-testid="img-footer-logo"
              />
              <h3 className="text-xl font-bold mb-4">AF Chemicals AG</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading supplier of advanced fluoride-based solutions for global industries. 
                Committed to sustainability, innovation, and excellence.
              </p>
            </div>
            
            <div className="space-y-2">
              <Badge variant="outline" className="border-white/20 text-white">
                10+ Years Experience
              </Badge>
              <Badge variant="outline" className="border-white/20 text-white ml-2">
                30+ Countries
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div data-testid="section-quick-links">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                  data-testid={`link-footer-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div data-testid="section-industries-served">
            <h4 className="text-lg font-semibold mb-6">Industries Served</h4>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="text-gray-300 text-sm"
                  data-testid={`text-industry-${index}`}
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Global Presence */}
          <div data-testid="section-contact-global">
            <h4 className="text-lg font-semibold mb-6">Contact & Global Presence</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sustainability-green mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>Promenadenstrasse 19</div>
                  <div>CH-8200 Schaffhausen</div>
                  <div>Switzerland</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sustainability-green flex-shrink-0" />
                <a 
                  href="mailto:info@afchemicals.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  data-testid="link-email"
                >
                  info@afchemicals.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sustainability-green flex-shrink-0" />
                <span className="text-sm text-gray-300">+41 52 XXX XXXX</span>
              </div>
            </div>

            {/* Global Offices */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-gray-200">Global Offices</h5>
              <div className="grid grid-cols-2 gap-1">
                {globalOffices.map((office, index) => (
                  <div
                    key={index}
                    className="text-xs text-gray-400"
                    data-testid={`text-office-${index}`}
                  >
                    {office}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400" data-testid="text-copyright">
              © 2024 AF Chemicals AG. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('sustainability')}
                className="text-sm text-gray-400 hover:text-sustainability-green transition-colors flex items-center gap-2"
                data-testid="link-sustainability-footer"
              >
                <Globe className="h-4 w-4" />
                Sustainable Solutions
              </button>
              <div className="text-sm text-gray-400">
                Made with sustainability in mind
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;