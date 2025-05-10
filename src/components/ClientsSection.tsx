import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";

const ClientsSection = () => {
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (elementsRef.current) {
      const animatedElements = elementsRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
    }

    return () => {
      if (elementsRef.current) {
        const animatedElements = elementsRef.current.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="py-20 bg-earth-50" id="ClientsSection" ref={elementsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="title-badge bg-[#1e392a] text-white">
            Our Services
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-earth-800">
            Why <span className="text-gold-500">Choose Us?</span>
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
          At Modern Concepts, we supply premium-grade Makhana that is carefully sourced and processed under strict quality standards. Our Makhana is certified for purity and safety, ensuring a healthy, crunchy snack trusted by global buyers.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#2d6a4f] to-[#1e392a] rounded-lg overflow-hidden shadow-lg animate-on-scroll" style={{ animationDelay: "0.5s" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Services We Provide</h3>
              <p className="text-white/80 mb-6">
              We offer end-to-end fox nut sourcing, packaging, and export services tailored to global importers seeking quality and consistency
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-5 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center mb-3">
                    {/* <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div> */}
                    <h4 className="text-xl font-bold text-white">White Labeling</h4>
                  </div>
                  <p className="text-white/70 text-sm text-center">Custom branding options for your business</p>
                </div>
                <div className="flex flex-col items-center p-5 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center mb-3">
                    {/* <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div> */}
                    <h4 className="text-xl font-bold text-white">Customized Packaging</h4>
                  </div>
                  <p className="text-white/70 text-sm text-center">Tailored packaging solutions to your specifications</p>
                </div>
                
                {/* Middle div - centered with margin */}
                <div className="flex flex-col items-center p-5 bg-white/10 rounded-lg sm:col-span-2 mx-auto my-4 mt-1 w-full sm:w-auto sm:max-w-md transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center mb-3">
                    {/* <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div> */}
                    <h4 className="text-xl font-bold text-white">Supply Chain Solutions</h4>
                  </div>
                  <p className="text-white/70 text-sm text-center">End-to-end logistics and distribution support</p>
                </div>
                
                {/* <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                  <span className="text-3xl font-bold text-gold-500">5000+</span>
                  <span className="text-white/80 text-sm">Tons Exported</span>
                </div> */}
                {/* <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                  <span className="text-3xl font-bold text-gold-500">xx+</span>
                  <span className="text-white/80 text-sm">Years Experience</span>
                </div> */}
              </div>
            </div>
            <div className="bg-center bg-cover lg:h-auto" style={{ backgroundImage: "url('/images/client-map.jpg')" }}>
              <div className="w-full h-full bg-gradient-to-t from-[#1e392a]/80 to-[#1e392a]/50 p-10 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-4">Certifications</h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <img src="./fssai.png" alt="FSSAI Certified" className="h-20 w-auto" />
                      <p className="text-white mt-2 text-sm font-medium">FSSAI</p>
                    </div>
                    
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <img src="./fda.png" alt="FDA Certified" className="h-20 w-auto" />
                      <p className="text-white mt-2 text-sm font-medium">FDA</p>
                    </div>
                    <br />
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm h-22 w-26">
                      <img src="./Halal.svg" alt="Halal Certified" className="h-28 w-auto" />
                      <p className="text-white mt-2 text-sm font-medium">Halal</p>
                    </div>
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

export default ClientsSection; 