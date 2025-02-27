
import { useEffect, useRef } from 'react';

const spices = [
  {
    name: 'Turmeric',
    description: 'A golden spice with earthy, warm flavor and powerful health benefits.',
    color: 'bg-spice-turmeric',
    origin: 'India & Southeast Asia',
    image: '/lovable-uploads/a3507432-3981-4891-88f4-9005d9d1f442.png',
    uses: 'Curries, golden milk, medicinal'
  },
  {
    name: 'Saffron',
    description: 'The world\'s most precious spice, known for its distinct flavor and golden hue.',
    color: 'bg-spice-saffron',
    origin: 'Iran, India & Mediterranean',
    image: '/lovable-uploads/a3507432-3981-4891-88f4-9005d9d1f442.png',
    uses: 'Paella, biryani, desserts'
  },
  {
    name: 'Cardamom',
    description: 'Intensely aromatic pods with a complex sweet-spicy flavor profile.',
    color: 'bg-spice-cardamom',
    origin: 'Southern India & Sri Lanka',
    image: '/lovable-uploads/a3507432-3981-4891-88f4-9005d9d1f442.png',
    uses: 'Chai, curries, baked goods'
  },
  {
    name: 'Paprika',
    description: 'A versatile spice ranging from mild to hot with a sweet pepper flavor.',
    color: 'bg-spice-paprika',
    origin: 'Central America & Europe',
    image: '/lovable-uploads/a3507432-3981-4891-88f4-9005d9d1f442.png',
    uses: 'Stews, marinades, seasoning'
  }
];

const SpiceShowcase = () => {
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
      id="spices" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <div className="title-badge">Our Collection</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Spices</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Explore our carefully selected spices that bring authentic flavors from around the world to your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {spices.map((spice, index) => (
            <div 
              key={index} 
              className="scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="spice-card h-full flex flex-col">
                <div className={`w-20 h-20 ${spice.color} rounded-full mb-6 shadow-lg flex items-center justify-center`}>
                  <span className="font-playfair text-white font-bold">
                    {spice.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-playfair font-bold text-xl mb-2">{spice.name}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{spice.description}</p>
                <div className="mt-auto space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Origin:</span>
                    <span className="font-medium">{spice.origin}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Uses:</span>
                    <span className="font-medium">{spice.uses}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-40 h-40 rounded-full bg-spice-paprika/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 rounded-full bg-spice-saffron/5 blur-3xl"></div>
    </section>
  );
};

export default SpiceShowcase;
