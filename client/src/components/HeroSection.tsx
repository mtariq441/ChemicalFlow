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
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight fade-in">
          <span className="block mb-2 text-gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200" data-testid="text-hero-title">Advanced Fluoride-Based Solutions</span>
          <span className="block text-gradient-accent bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 stagger-2">for Global Industries</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto text-gray-200/90 font-light leading-relaxed slide-up stagger-1" data-testid="text-hero-subtitle">
          Supplying sustainable, innovative, and cost-efficient chemical products worldwide with unmatched quality and precision
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-4xl mx-auto">
          <div className="text-center scale-in stagger-1 group" data-testid="stat-experience">
            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
            <div className="text-base md:text-lg text-gray-300 font-medium tracking-wide">Years of Expertise</div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="text-center scale-in stagger-2 group" data-testid="stat-countries">
            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
            <div className="text-base md:text-lg text-gray-300 font-medium tracking-wide">Countries Served</div>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-400 mx-auto mt-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="text-center scale-in stagger-3 group" data-testid="stat-continents">
            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">4</div>
            <div className="text-base md:text-lg text-gray-300 font-medium tracking-wide">Continents</div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto mt-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in stagger-4">
          <Button 
            size="lg"
            onClick={() => scrollToSection('products')}
            className="btn-premium bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 group"
            data-testid="button-explore-products"
          >
            Explore Products
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="btn-premium border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 font-semibold px-10 py-4 text-lg rounded-full backdrop-blur-sm hover:shadow-2xl hover:shadow-white/10 hover:scale-105 transition-all duration-300 group"
            data-testid="button-contact-us"
          >
            Contact Us
            <Play className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={() => scrollToSection('products')}>
        <div className="w-7 h-12 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-300">
          <div className="w-1.5 h-4 bg-gradient-to-b from-white to-blue-300 rounded-full mt-2 animate-pulse group-hover:h-5 transition-all duration-300"></div>
        </div>
        <div className="text-xs text-white/70 text-center mt-2 font-medium group-hover:text-white transition-colors duration-300">Scroll</div>
      </div>
    </section>
  );
};

export default HeroSection;