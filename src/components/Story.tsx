
import { useEffect, useRef } from 'react';

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
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 scroll-reveal">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/lovable-uploads/a3507432-3981-4891-88f4-9005d9d1f442.png"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-spice-turmeric/20 backdrop-blur-md z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-spice-saffron/20 backdrop-blur-md z-0"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 scroll-reveal">
            <div className="title-badge">Our Heritage</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Journey Through Tradition</h2>
            <p className="text-gray-700 mb-6">
              Our story begins in the rich soils of traditional spice-growing regions, where 
              generations of farmers have cultivated these precious ingredients with care and expertise.
            </p>
            <p className="text-gray-700 mb-6">
              We work directly with farmers and artisans who maintain time-honored techniques, 
              ensuring that each spice reaches you with its authentic flavor and aroma intact.
            </p>
            <p className="text-gray-700 mb-8">
              From these local origins to kitchens around the world, we bridge cultures through taste, 
              connecting the hands that nurture the land with the chefs and home cooks who create moments 
              of joy through food.
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
