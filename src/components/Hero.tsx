import { useState, useEffect } from 'react';
import SplitText from './animations/SplitText';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const backgrounds = [
    '/bg1.jpg',
    '/bg2.jpg',
    '/bg3.jpg',
    '/bg4.jpg'
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setIsTransitioning(false);
      }, 1000); // Fade out duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden md:flex-row md:py-0 md:items-center md:justify-start"
    >
      {/* Background Slideshow */}
      <div 
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgrounds[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isTransitioning ? 0 : 1
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col items-center text-center md:items-start md:text-left">
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="title-badge bg-[#1e392a] text-white">In a world where innovation meets tradition,</div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-white">
                {/* The Voyage of <span className="text-spice-saffron">Spices</span> 
                <br />From Local to Global */}
                {/* MODERN CONCEPTS EXPORTS */}
                <SplitText 
                  text="MODERN CONCEPTS EXPORTS"
                  className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight"
                  delay={50}
                  textAlign="left"
                />
              </h1>
              <p className="text-white mb-8 md:pr-12 text-lg">
                is more than just an exporter—it's a gateway for local artisans, farmers, and businesses to reach the global marketplace.
              </p>
              <div className="flex flex-col items-center sm:flex-row sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#journey" 
                  className="px-8 py-3 rounded-full bg-[#1e392a] text-white font-medium transition-all hover:shadow-md hover:bg-[#1e392a]/90 text-center"
                >
                  Explore The Journey
                </a>
                <a 
                  href="#productcollection" 
                  className="px-8 py-3 rounded-full bg-[#1e392a] text-white font-medium transition-all hover:shadow-md hover:bg-[#1e392a]/90 text-center"
                >
                  View Our Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
