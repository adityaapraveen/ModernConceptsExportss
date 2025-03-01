import { useEffect, useRef } from 'react';
import { Badge } from './ui/badge';
import './ui/SpiceShowCase.css';

const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.scroll-reveal');
        
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;
          
          if (isVisible) {
            element.classList.add('revealed');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="story" 
      ref={sectionRef}
      className="py-20 bg-spice-cream relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-5">
                  
                  <Badge variant="outline" id='text'className="">
            Our Story
          </Badge> </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 scroll-reveal">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-spice-turmeric/20 backdrop-blur-md z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-spice-saffron/20 backdrop-blur-md z-0"></div>
              <div className="w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl relative z-10">
                <img
                  src="./bri.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bringing India's Richness to the World.</h2>
            <p className="text-gray-700 mb-6">
              Our journey begins in the heart of India, where generations of artisans, 
              farmers, and craftsmen have perfected their skills, creating products that 
              reflect the richness of our land and culture. From fertile fields to skilled 
              hands, every item carries a legacy of dedication and authenticity.
            </p>
            <p className="text-gray-700 mb-6">
              At Modern Concepts Exports, we partner with those who uphold these traditions, 
              ensuring that every product—be it nutrient-rich Makhana, powerful Moringa, aromatic 
              Coffee, or pure Multani Mitti—reaches the world in its finest form.
            </p>
            <p className="text-gray-700 mb-8">
              By blending heritage with modern trade, we take India's best to global markets, 
              bridging local to global.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center font-medium text-spice-saffron hover:underline"
            >
              Learn more about our commitment to quality
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
