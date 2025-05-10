import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Locations data for reference
const locations = {
  india: { name: "India", x: 0.68, y: 0.42, color: "#E2703A" },
  usa: { name: "USA", x: 0.20, y: 0.32, color: "#4D96FF" },
  // middleEast: { name: "Middle East", x: 0.58, y: 0.38, color: "#9CFF2E" }, // Will be replaced by uae for display
  australia: { name: "Australia", x: 0.12, y: 0.68, color: "#FFD24C" },
  europe: { name: "Europe", x: 0.48, y: 0.25, color: "#9C51E0" },
  uae: { name: "UAE", x: 0.10, y: 0.40, color: "#000000" } // Added UAE
};

const AboutSection = () => {
  const elementsRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<string>("india");
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [hoveredMarkerInfo, setHoveredMarkerInfo] = useState<{ name: string; coordinates: [number, number] } | null>(null); // State for tooltip
  const [currentMapScale, setCurrentMapScale] = useState(200); // Initial scale

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) { // Tailwind 'lg' breakpoint
        setCurrentMapScale(175); // Zoom in more for mobile/tablet
      } else {
        setCurrentMapScale(200); // Default scale for desktop
      }
    };

    handleResize(); // Set initial scale on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 bg-[#F5EFE7]" id="aboutSection" ref={elementsRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Div - will be ordered second on mobile, first on lg screens */}
          <div className="order-2 lg:order-1">
            <div className="relative world-map-container rounded-lg shadow-xl overflow-hidden bg-[#F5F5DC] animate-on-scroll">
              {/* World Map using react-simple-maps */}
              <div className="relative h-[300px] lg:h-[400px] w-full"> {/* Responsive height */}
                <ComposableMap
                  projectionConfig={{
                    scale: currentMapScale // Responsive scale
                  }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Geographies geography="/features.json">
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#A8D8B9" // Changed fill color
                          stroke="#F5F5DC" // Changed stroke color
                          strokeWidth={0.5}
                        />
                      ))
                    }
                  </Geographies>
                  {/* Markers for specified locations */}
                  {["usa", "australia", "uae"].map(locKey => {
                    const loc = locations[locKey as keyof typeof locations];
                    
                    let coordinates: [number, number] = [0,0];
                    let markerSvg: React.ReactNode;

                    switch (locKey) {
                      case "usa":
                        coordinates = [-115.5795, 50.8283]; 
                        markerSvg = (
                          <svg viewBox="0 0 30 45" width="25" height="50" style={{ transform: 'translate(-50%, -100%)' }}>
                            <path
                              d="M15 0 C6.716 0 0 6.716 0 15 C0 27 15 45 15 45 C15 45 30 27 30 15 C30 6.716 23.284 0 15 0 Z"
                              fill="#000000"
                            />
                            <circle cx="15" cy="15" r="5" fill="white" />
                          </svg>
                        );
                        break;
                      case "australia":
                        coordinates = [125.13, -15.28]; 
                        markerSvg = (
                          <svg viewBox="0 0 30 45" width="25" height="50" style={{ transform: 'translate(-50%, -100%)' }}>
                            <path
                              d="M15 0 C6.716 0 0 6.716 0 15 C0 27 15 45 15 45 C15 45 30 27 30 15 C30 6.716 23.284 0 15 0 Z"
                              fill="#000000"
                            />
                            <circle cx="15" cy="15" r="5" fill="white" />
                          </svg>
                        );
                        break;
                      case "uae": 
                        coordinates = [35.2708, 45.2048]; 
                        markerSvg = (
                          <svg viewBox="0 0 30 45" width="25" height="50" style={{ transform: 'translate(-50%, -100%)' }}>
                            <path
                              d="M15 0 C6.716 0 0 6.716 0 15 C0 27 15 45 15 45 C15 45 30 27 30 15 C30 6.716 23.284 0 15 0 Z"
                              fill="#000000"
                            />
                            <circle cx="15" cy="15" r="5" fill="white" />
                          </svg>
                        );
                        break;
                      default:
                        markerSvg = null;
                    }
                    
                    return (
                      <Marker 
                        key={loc.name} 
                        coordinates={coordinates}
                        onMouseEnter={() => {
                          setHoveredMarkerInfo({ name: loc.name, coordinates: coordinates });
                        }}
                        onMouseLeave={() => {
                          setHoveredMarkerInfo(null);
                        }}
                      >
                        {markerSvg}
                      </Marker>
                    );
                  })}

                  {/* Tooltip Display */}
                  {hoveredMarkerInfo && (
                    <Marker coordinates={hoveredMarkerInfo.coordinates}>
                      <g transform="translate(0, -65)"> {/* Increased Y offset for a bit more space above the pin */}
                        <rect
                          x={-45} // Adjusted for new width
                          y={-15} // Adjusted for new height
                          width={90} // Increased width for more padding
                          height={30} // Increased height for more padding
                          fill="#1E392A" // Set background color
                          stroke="#1E392A" // Stroke to match fill or a subtle border
                          strokeWidth={1}
                          rx={5} // More rounded corners
                          ry={5}
                        />
                        <text
                          x={0} // Centered horizontally
                          y={0} // Centered vertically by dominant-baseline
                          textAnchor="middle"
                          dominantBaseline="middle"
                          style={{
                            fontFamily: "Arial, sans-serif", 
                            fill: "#FFFFFF", // White text for contrast
                            fontSize: "12px", 
                            fontWeight: "normal"
                          }}
                        >
                          {hoveredMarkerInfo.name}
                        </text>
                      </g>
                    </Marker>
                  )}
                </ComposableMap>
              </div>
            </div>
          </div>
          
          {/* Text Content Div - will be ordered first on mobile, second on lg screens */}
          <div className="order-1 lg:order-2">
            <div className="text-center mb-8">
              <div className="title-badge bg-[#1e392a] text-white">
                About Us
              </div>
              
              <h2 className="text-4xl font-bold mb-4 text-earth-800">
                About <span className="text-gold-500">Modern Concepts Exports</span>
              </h2>
            </div>
            
            <p className="text-makhana-700 mb-4 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            Our journey starts in the quiet ponds of Northern India, where families have been growing Makhana—foxnuts—for generations. It's more than just a crop; it's a way of life, nurtured with care, tradition, and pride.            </p>
            
            <p className="text-makhana-700 mb-6 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
            At Modern Concepts Exports, we work hand-in-hand with these farmers to bring their harvest to the world. Every crunchy, nutrient-rich kernel tells a story—of heritage, hard work, and a little piece of India shared with you.
             </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-makhana-50 p-4 rounded-lg animate-on-scroll" style={{ animationDelay: "0.4s" }}>
                <h3 className="font-bold text-makhana-800 mb-2">Premium Quality</h3>
                <p className="text-makhana-700 text-sm">Only the highest grade foxnuts make it to our export selections.</p>
              </div>
              
              <div className="bg-makhana-50 p-4 rounded-lg animate-on-scroll" style={{ animationDelay: "0.5s" }}>
                <h3 className="font-bold text-makhana-800 mb-2">Global Standards</h3>
                <p className="text-makhana-700 text-sm">All products meet international safety and quality certifications.</p>
              </div>
              
              <div className="bg-makhana-50 p-4 rounded-lg animate-on-scroll" style={{ animationDelay: "0.6s" }}>
                <h3 className="font-bold text-makhana-800 mb-2">Sustainable Sourcing</h3>
                <p className="text-makhana-700 text-sm">Supporting local farmers with fair trade practices.</p>
              </div>
              
              <div className="bg-makhana-50 p-4 rounded-lg animate-on-scroll" style={{ animationDelay: "0.7s" }}>
                <h3 className="font-bold text-makhana-800 mb-2">Timely Delivery</h3>
                <p className="text-makhana-700 text-sm">Efficient logistics ensure your orders arrive on schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;