import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    title: "High Demand Superfood",
    description: "Rapidly growing popularity in health-conscious global markets"
  },
  {
    title: "Global Export Potential",
    description: "India is positioned to be the leading exporter worldwide"
  },
  {
    title: "Low Investment, High Returns",
    description: "40-50% profit margins with proper marketing and distribution"
  }
];

const KeyHighlights = () => {
  return (
    <div className="bg-gradient-to-r from-[#059669] to-[#1e392a] py-10 px-4 rounded-xl shadow-lg overflow-hidden relative">
      <div className="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center px-4"
            >
              <h2 className="text-2xl font-bold mb-2">{highlight.title}</h2>
              <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
              <p>{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const initialData = [
  { year: '2018', profit: 100 },
  { year: '2019', profit: 140 },
  { year: '2020', profit: 200 },
  { year: '2021', profit: 280 },
  { year: '2022', profit: 380 },
  { year: '2023', profit: 500 },
  { year: '2024', profit: 650 },
  { year: '2025', profit: 800 }
];

const ProfitChart = () => {
  const [data, setData] = useState<Array<{ year: string; profit: number }>>([]);
  
  useEffect(() => {
    // Animation effect for chart data loading
    const timer = setTimeout(() => {
      setData(initialData);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-emerald-50">
        <CardTitle className="text-xl md:text-2xl text-center">Company's portfolio after adding fox nuts</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 10,
              }}
            >
              <defs>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.4} />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#6B7280' }}
                tickLine={false}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis 
                tick={{ fill: '#6B7280' }}
                tickLine={false}
                axisLine={{ stroke: '#E5E7EB' }}
                tickFormatter={(value) => `$${value}k`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}k`, 'Annual Profit']}
                labelFormatter={(value) => `Year: ${value}`}
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  border: 'none'
                }}
              />
              <ReferenceLine y={500} stroke="#DC2626" strokeDasharray="3 3" label="2023" />
              <Area 
                type="monotone" 
                dataKey="profit" 
                stroke="#10B981" 
                fillOpacity={1} 
                fill="url(#profitGradient)" 
                strokeWidth={3}
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-8 mt-4 flex-wrap">
          <div className="text-center">
            <p className="text-gray-500 text-sm">Annual Growth Rate</p>
            <p className="text-2xl font-bold text-emerald-600">32%</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm">Profit Margin</p>
            <p className="text-2xl font-bold text-emerald-600">45%</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm">ROI</p>
            <p className="text-2xl font-bold text-emerald-600">3.2x</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BenefitsSection = () => {
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
    <section className="py-20 bg-[#F5EFE7]" id="BenefitsSection" ref={elementsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="title-badge bg-[#1e392a] text-white">
            Market Growth
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-earth-800">
            Projected <span className="text-gold-500">Growth</span>
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            The global market for foxnuts (makhana) has shown remarkable growth over the past century, with Asia emerging as a key growth region alongside North America.
          </p>
        </div>
        
        <div className="mb-10 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <KeyHighlights />
        </div>
        
        <div className="max-w-5xl mx-auto animate-on-scroll" style={{ animationDelay: "0.5s" }}>
          <ProfitChart />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 