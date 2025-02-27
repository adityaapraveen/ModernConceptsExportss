
import { useState, useEffect, useRef } from 'react';
import { Globe, Package, MapPin, Ship } from 'lucide-react';

const Journey = () => {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stages = [
    { 
      title: 'Local Cultivation', 
      description: 'Carefully grown by skilled farmers who nurture the land and harvest at peak flavor.',
      icon: <MapPin className="w-6 h-6 text-spice-saffron" />,
      position: { left: '10%', top: '20%' }
    },
    { 
      title: 'Tradition & Craft', 
      description: 'Processed using time-honored techniques that preserve authentic flavors and aromas.',
      icon: <Package className="w-6 h-6 text-spice-saffron" />,
      position: { left: '30%', top: '40%' }
    },
    { 
      title: 'Global Journey', 
      description: 'Transported across oceans and continents, connecting cultures through taste.',
      icon: <Ship className="w-6 h-6 text-spice-saffron" />,
      position: { left: '60%', top: '60%' }
    },
    { 
      title: 'Worldwide Kitchens', 
      description: 'Reaching tables around the world, inspiring culinary creativity across cultures.',
      icon: <Globe className="w-6 h-6 text-spice-saffron" />,
      position: { left: '85%', top: '40%' }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4000);

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
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stages.length]);

  return (
    <section 
      id="journey" 
      ref={sectionRef}
      className="py-20 bg-spice-cream relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <div className="title-badge">The Spice Journey</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Farm to Your Table</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Follow the remarkable journey of our spices as they travel from local farms to global destinations, 
            bringing authentic flavors to kitchens worldwide.
          </p>
        </div>

        <div className="relative scroll-reveal">
          {/* Journey Path Visualization */}
          <div className="hidden md:block relative h-[30rem] mx-auto">
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 1000 600" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M100 150 C200 50, 300 200, 400 250 C500 300, 700 350, 850 200" 
                className="path-line"
              />
            </svg>

            {/* Journey Points */}
            {stages.map((stage, index) => (
              <div 
                key={index}
                className={`absolute transition-all duration-300 ${
                  activeStage === index ? 'scale-110' : 'scale-100'
                }`}
                style={{ 
                  left: stage.position.left, 
                  top: stage.position.top,
                }}
              >
                <div className={`spice-card ${
                  activeStage === index 
                    ? 'bg-white/80 shadow-lg border-spice-saffron' 
                    : 'bg-white/40'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${
                    activeStage === index 
                      ? 'bg-spice-saffron text-white' 
                      : 'bg-spice-saffron/10 text-spice-saffron'
                  }`}>
                    {stage.icon}
                  </div>
                  <h3 className="font-playfair font-bold text-lg mb-2">{stage.title}</h3>
                  <p className="text-sm text-gray-700 max-w-xs">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Journey (visible on small screens) */}
          <div className="md:hidden space-y-6">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                className={`spice-card transition-all duration-300 ${
                  activeStage === index 
                    ? 'bg-white/80 shadow-lg border-spice-saffron' 
                    : 'bg-white/40'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${
                  activeStage === index 
                    ? 'bg-spice-saffron text-white' 
                    : 'bg-spice-saffron/10 text-spice-saffron'
                }`}>
                  {stage.icon}
                </div>
                <h3 className="font-playfair font-bold text-lg mb-2">{stage.title}</h3>
                <p className="text-sm text-gray-700">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-spice-saffron/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-spice-turmeric/5 blur-3xl"></div>
    </section>
  );
};

export default Journey;
