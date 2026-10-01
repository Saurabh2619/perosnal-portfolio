"use client";

import React, { useState } from 'react';
import { C, SERIF, DISPLAY, MONO } from '../hero/constants';
import { FiShield, FiLayers, FiZap, FiStar } from 'react-icons/fi';

const PRINCIPLES = [
  {
    id: '01',
    title: 'Security First',
    icon: <FiShield size={40} strokeWidth={1.5} />,
    description: 'Cloud infrastructure must be hardened before it ever reaches production. I integrate CSPM and SAST tooling from day one to ensure watertight deployments.',
    color: '#FFBFA9'
  },
  {
    id: '02',
    title: 'Scalable Architecture',
    icon: <FiLayers size={40} strokeWidth={1.5} />,
    description: 'Code should be built to grow, not just to work. I engineer multi-tenant systems designed to effortlessly handle sudden spikes and massive user bases.',
    color: '#B4D4FF'
  },
  {
    id: '03',
    title: 'Performance Obsessed',
    icon: <FiZap size={40} strokeWidth={1.5} />,
    description: 'From SEO-optimized microsites to heavy database queries, I prioritize speed and efficiency, delivering lightning-fast, resource-lean experiences.',
    color: '#FFF2B2'
  },
  {
    id: '04',
    title: 'Beautiful UX',
    icon: <FiStar size={40} strokeWidth={1.5} />,
    description: 'Aesthetic designs that blend style with extreme usability. Even the most complex security and data tools should feel intuitive and enjoyable to use.',
    color: '#B9FFC6'
  }
];

export function PrinciplesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 px-5 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: C.ink, fontFamily: DISPLAY }}
          >
            My <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: C.blue }}>Principles</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-70 max-w-2xl" style={{ color: C.ink }}>
            The core philosophy behind every line of code I write.
          </p>
        </div>
      </div>

      {/* Massive Accordion */}
      <div className="w-full mt-16 border-t-[1.5px]" style={{ borderColor: C.ink }}>
        {PRINCIPLES.map((p, idx) => (
          <div 
            key={p.id}
            className="w-full transition-colors duration-500 ease-out border-b-[1.5px] group"
            style={{ 
              borderColor: C.ink, 
              backgroundColor: hoveredIndex === idx ? p.color : 'transparent' 
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onClick={() => setHoveredIndex(idx)}
          >
            <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 md:py-10 cursor-pointer">
              <div className="flex flex-col gap-2">
                
                {/* Title Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5 md:gap-8">
                    <span 
                      className="text-lg md:text-xl font-bold pt-1" 
                      style={{ fontFamily: MONO, color: C.ink, opacity: hoveredIndex === idx ? 0.8 : 0.4 }}
                    >
                      {p.id}
                    </span>
                    <h3 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
                      style={{ fontFamily: DISPLAY, color: C.ink }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  
                  {/* Sticker Icon */}
                  <div 
                    className="transition-transform duration-500 opacity-60 group-hover:opacity-100"
                    style={{ color: C.ink, transform: hoveredIndex === idx ? 'rotate(-10deg) scale(1.1)' : 'rotate(0deg) scale(1)' }}
                  >
                    {p.icon}
                  </div>
                </div>

                {/* Animated Description (Accordion) */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out pl-[3rem] md:pl-[4rem] ${
                    hoveredIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed" style={{ color: C.ink, opacity: 0.9 }}>
                      {p.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
