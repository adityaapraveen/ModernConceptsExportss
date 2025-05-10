import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SpiceShowcase from '../components/SpiceShowcase';
import ClientsSection from '../components/ClientsSection';
import BenefitsSection from '../components/BenefitsSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Check on mount
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <SpiceShowcase />
      <ClientsSection />
      <BenefitsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
