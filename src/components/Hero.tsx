import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-20 pb-16 md:py-0 md:flex md:items-center relative overflow-hidden"
    >
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[url('./lovable-uploads/a3507432-3981-4891-88f4-9005d9d1f442.png')] bg-cover bg-center opacity-[0.07] z-0"
        style={{ backgroundSize: '50%', backgroundRepeat: 'repeat' }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="title-badge">In a world where innovation meets tradition,</div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                {/* The Voyage of <span className="text-spice-saffron">Spices</span> 
                <br />From Local to Global */}
                MODERN CONCEPTS EXPORTS
                <br />
              </h1>
              <p className="text-gray-700 mb-8 md:pr-12 text-lg">
                is more than just an exporter—it's a gateway for local artisans, farmers, and businesses to reach the global marketplace.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#journey" 
                  className="px-8 py-3 rounded-full bg-spice-saffron text-white font-medium transition-all hover:shadow-md hover:bg-spice-saffron/90 text-center"
                >
                  Explore The Journey
                </a>
                <a 
                  href="#productcollection" 
                  className="px-8 py-3 rounded-full border border-spice-saffron text-spice-saffron font-medium hover:bg-spice-saffron/5 transition-all text-center"
                >
                  View Our Products
                </a>
              </div>
            </div>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-full border-4 border-spice-saffron/30 p-4 animate-rotate-slow">
                  <div className="w-full h-full rounded-full border-2 border-spice-saffron/20 p-4 animate-rotate-slow" style={{ animationDirection: 'reverse' }}>
                    <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                      <img 
                        src="./lovable-uploads/a3507432-3981-4891-88f4-9005d9d1f442.png" 
                        alt="From Local to Global" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Spice Elements */}
                <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg animate-float bg-white">
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#B5925C' }}>
                    <span className="font-playfair text-white font-bold text-center">Cashews</span>
                  </div>
                </div>

                <div className="absolute top-1/3 left-0 -translate-x-1/3 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg animate-float bg-white">
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#667e2c' }}>
                    <span className="font-playfair text-white font-bold text-center">Moringa Powder</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg animate-float bg-white" style={{ animationDelay: '1.5s' }}>
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#A67B5B' }}>
                    <span className="font-playfair text-white font-bold">Almonds</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg animate-float bg-white" style={{ animationDelay: '0.8s' }}>
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#faf9f6' }}>
                    <span className="font-playfair text-black font-bold text-xs md:text-sm">Fox Nuts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
