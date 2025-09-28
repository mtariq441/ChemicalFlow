import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@assets/generated_images/Industrial_steel_facility_background_429032b1.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block" data-testid="text-hero-title">Advanced Fluoride-Based Solutions</span>
          <span className="block text-sustainability-green">for Global Industries</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200" data-testid="text-hero-subtitle">
          Supplying sustainable, innovative, and cost-efficient chemical products worldwide
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="text-center" data-testid="stat-experience">
            <div className="text-3xl md:text-4xl font-bold text-sustainability-green">10+</div>
            <div className="text-sm md:text-base text-gray-300">Years of Expertise</div>
          </div>
          <div className="text-center" data-testid="stat-countries">
            <div className="text-3xl md:text-4xl font-bold text-sustainability-green">30+</div>
            <div className="text-sm md:text-base text-gray-300">Countries Served</div>
          </div>
          <div className="text-center" data-testid="stat-continents">
            <div className="text-3xl md:text-4xl font-bold text-sustainability-green">4</div>
            <div className="text-sm md:text-base text-gray-300">Continents</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('products')}
            className="bg-sustainability-green hover:bg-sustainability-green/90 text-white px-8 py-4 text-lg"
            data-testid="button-explore-products"
          >
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            data-testid="button-contact-us"
          >
            Contact Us
            <Play className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;