import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import IndustriesSection from '@/components/IndustriesSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import GlobalReachSection from '@/components/GlobalReachSection';
import CareersSection from '@/components/CareersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <IndustriesSection />
        <SustainabilitySection />
        <GlobalReachSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;