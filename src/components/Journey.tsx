import { useState, useEffect, useRef } from 'react';
import { Globe, Package, MapPin, Ship } from 'lucide-react';
import './ui/SpiceShowCase.css'
import { Badge } from './ui/badge';


const Journey = () => {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stages = [
    { 
      title: 'Local Cultivation', 
      description: 'Indian farmers and artisans carefully grow and create high-quality products using traditional skills and knowledge.',
      icon: <MapPin className="w-6 h-6 text-spice-saffron" />,
      position: { left: '30%', top: '30%' },
      mobileOrder: 1
    },
    { 
      title: 'Global Journey', 
      description: 'Transported across oceans and continents, connecting cultures through taste.',
      icon: <Ship className="w-6 h-6 text-spice-saffron" />,
      position: { left: '70%', top: '30%' },
      mobileOrder: 3
    },
    { 
      title: 'Quality Check', 
      description: 'The products are cleaned, processed, and checked to ensure they meet high-quality standards before being sent worldwide.',
      icon: <Package className="w-6 h-6 text-spice-saffron" />,
      position: { left: '50%', top: '70%' },
      mobileOrder: 2
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [stages.length]);

  return (
    <section 
      id="journey" 
      ref={sectionRef}
      className="py-20 bg-spice-cream relative flex justify-center items-center min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-8 relative text-center">
        <div className="text-center mb-8 md:mb-16">
          <Badge variant="outline" id='text'className="">
    Our Journey
  </Badge>

          <p className="max-w-2xl mx-auto text-gray-700">
            Follow the remarkable journey of our products as they travel from local farms to global destinations, 
            bringing authentic flavours worldwide.
          </p>
        </div>

        {/* Journey Path Visualization - Desktop */}
        <div className="hidden md:block relative w-full h-[30rem] flex justify-center items-center">
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 1000 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M300 300 Q500 100, 700 300 T1100 300" 
              className="path-line"
            />
          </svg>

          {stages.map((stage, index) => (
            <div 
              key={index}
              className={`absolute transition-all duration-300 transform ${
                activeStage === index ? 'scale-110' : 'scale-100'
              }`}
              style={{ 
                left: stage.position.left, 
                top: stage.position.top,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`spice-card ${
                activeStage === index 
                  ? 'bg-white/80 shadow-lg border-spice-saffron' 
                  : 'bg-white/40'
              }`}>
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

        {/* Journey Cards - Mobile */}
        <div className="md:hidden flex flex-col space-y-6">
          {stages
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((stage, index) => (
              <div 
                key={index}
                className={`transition-all duration-300 transform ${
                  activeStage === index ? 'scale-105' : 'scale-100'
                }`}
              >
                <div className={`spice-card mx-auto max-w-sm ${
                  activeStage === index 
                    ? 'bg-white/80 shadow-lg border-spice-saffron' 
                    : 'bg-white/40'
                }`}>
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
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;