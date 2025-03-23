import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import './ui/SpiceShowCase.css';
import { Description } from '@radix-ui/react-toast';

const spices = [

  {
    name: 'Moringa Powder',
    description: 'A superfood packed with vitamins, minerals, and antioxidants for overall wellness.',
    image: './MoringaPowder.png',
    benefits: ['Boosts Immunity', 'Rich in Nutrients', 'Detoxifying Properties'],
  },
  {
    name: 'Fox Nuts',
    description: 'Premium fox nuts harvested from the pure waters of India.',
    image: './makhana1.jpg',
    benefits: ['High in Protein', 'Low Glycemic Index', 'Rich in Antioxidants'],
  },
  {
    name: 'Cashew',
    description: 'Premium Indian cashews with a rich, creamy texture and naturally sweet flavor.',
    image: './Cashew.png',
    benefits: ['Boosts Immunity', 'Rich in Healthy Fats', 'Supports Heart Health'],
  },
  {
    name: 'Almonds',
    description: 'High-quality almonds packed with essential nutrients for a healthy lifestyle. ',
    image: './Almonds.png',
    benefits: ['Enhances Brain Function', 'Rich in Vitamin E', 'Supports Digestion'],
  },
];

export const SpiceShowcase = () => {
  return (
    <section id='productcollection' className="py-24 bg-gradient-to-b from-sage-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          
          <Badge variant="outline" id='text'className="">
    Our Products
  </Badge>

          <h2 className="text-4xl font-bold mb-4 text-earth-800">Discover Our Products</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Explore our carefully selected products that bring authentic flavours from India.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {spices.map((spice) => (
            <Card key={spice.name} className="group hover-lift overflow-hidden bg-white">
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