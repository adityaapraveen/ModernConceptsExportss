import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const spices = [
  {
    name: 'Multani Mitti',
    description: 'A golden spice with earthy, warm flavor and powerful health benefits.',
    image: './multanimitti.jpg',
    benefits: ['Skin Detox', 'Oil Control', 'Cooling Effect'],
  },
  {
    name: 'Moringa Powder',
    description: 'The world\'s most precious spice, known for its distinct flavor and golden hue.',
    image: './moringapowder.jpg',
    benefits: ['Rich in Nutrients', 'Boosts Immunity', 'Supports Metabolism'],
  },
  {
    name: 'Fox Nuts',
    description: 'Intensely aromatic pods with a complex sweet-spicy flavor profile.',
    image: './makhana.jpg',
    benefits: ['High in Protein', 'Low Glycemic Index', 'Rich in Antioxidants'],
  },
  {
    name: 'Coffee',
    description: 'A versatile spice ranging from mild to hot with a sweet pepper flavor.',
    image: './coffee.jpg',
    benefits: ['Boosts Energy', 'Rich in Antioxidants', 'Enhances Mood'],
  },
];

export const SpiceShowcase = () => {
  return (
    <section id='productcollection' className="py-24 bg-gradient-to-b from-sage-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sage-700 border-sage-200 bg-sage-50">
            Our Products
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-earth-800">Discover Our Products</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Explore our carefully selected spices that bring authentic flavors from around the world to your kitchen.
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