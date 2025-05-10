import React, { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import './ui/SpiceShowCase.css';
import { Description } from '@radix-ui/react-toast';

const spices = [
  
  {
    name: 'Unroasted Fox Nuts',
    description: 'Naturally harvested fox nuts, perfect for guilt-free snacking or cooking.',
    image: './finalmakhana.jpg',
    benefits: ['High in Protein', 'Low in Calories', 'Controls Blood Sugar'],
  },
  {
    name: 'Flavoured Fox Nuts',
    description: 'Deliciously spiced fox nuts that make healthy snacking fun and flavorful.',
    image: './flavoured.png',
    benefits: ['Tasty Yet Healthy', 'Low in Fat', 'Satisfies Cravings'],
  },
  {
    name: 'Fox Nuts Flour',
    description: 'Gluten-free flour made from ground fox nuts, ideal for healthy baking.',
    image: './flour.png',
    benefits: ['Easy to Digest', 'Rich in Calcium', 'Used in Baby Food'],
  }
];

export const SpiceShowcase = () => {
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
    <section id='productcollection' className="py-24 bg-[#F5EFE7]" ref={elementsRef}>
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16 animate-on-scroll">
          
          <div className="title-badge bg-[#1e392a] text-white">
    Our Products
  </div>

          <h2 className="text-4xl font-bold mb-4 text-earth-800"><span className="text-gold-500">Discover</span> Our Products</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
          Explore our carefully selected Makhana, bringing you authentic taste and tradition straight from India
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {spices.map((spice, index) => (
            <Card key={spice.name} className="group hover-lift overflow-hidden bg-white animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={spice.image}
                  alt={spice.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-earth-800">{spice.name}</h3>
                <p className="text-earth-600 mb-4">{spice.description}</p>
                <div className="flex flex-wrap gap-2">
                  {spice.benefits.map((benefit, index) => (
                    <div key={index} className="inline-block text-green-700 bg-green-100 p-2 rounded-md text-xs">
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiceShowcase;