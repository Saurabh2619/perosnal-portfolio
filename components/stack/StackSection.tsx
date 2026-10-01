"use client";

import React from 'react';
import { C, SERIF, DISPLAY, MONO } from '../hero/constants';
import { FiCloud, FiLayout, FiDatabase, FiTool, FiCode } from 'react-icons/fi';

const STACK = [
  {
    title: 'Frontend',
    icon: <FiLayout size={24} />,
    featured: false,
    items: ['React.js', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Backend & Database',
    icon: <FiDatabase size={24} />,
    featured: false,
    items: ['Node.js', 'Supabase', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Cloud & Security',
    icon: <FiCloud size={24} />,
    featured: true,
    items: [
      'GCP (Compute Engine, IAM)', 
      'AWS (EC2, IAM)', 
      'Docker', 
      'Linux', 
      'Cloud Security Posture (Prowler, ScoutSuite)', 
      'SAST & Secrets Scanning (Semgrep, Trivy, Gitleaks)'
    ]
  },
  {
    title: 'Languages',
    icon: <FiCode size={24} />,
    featured: false,
    items: ['JavaScript (ES6+)', 'Go', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Tools',
    icon: <FiTool size={24} />,
    featured: false,
    items: ['Git', 'GitHub Actions', 'Vercel', 'cPanel', 'Razorpay', 'Google OAuth']
  }
];

export function StackSection() {
  return (
    <section 
      id="stack" 
      className="w-full px-5 md:px-10 py-24 relative"
      style={{ background: `linear-gradient(to bottom, ${C.paper} 0%, #ffffff 150px, #ffffff 100%)` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: C.ink, fontFamily: DISPLAY }}
          >
            Technical <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: C.blue }}>Stack</span>
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-70 max-w-2xl mt-4" style={{ color: C.ink }}>
            The tools I use to build scalable platforms and secure cloud infrastructure.
          </p>
        </div>

        {/* Bento Grid for Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK.map((category, idx) => (
            <div 
              key={idx}
              className={`flex flex-col rounded-xl p-8 transition-transform duration-300 hover:-translate-y-1 ${category.featured ? 'md:col-span-2 bg-zinc-50' : 'bg-white'}`}
              style={{
                border: `1.5px solid ${C.ink}`,
                boxShadow: `4px 4px 0 ${category.featured ? C.blue : C.ink}`,
              }}
            >
              <div className="flex items-center gap-4 mb-6" style={{ color: category.featured ? C.blue : C.ink }}>
                <div className="p-3 rounded-lg" style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-md text-sm font-semibold transition-colors hover:bg-zinc-200"
                    style={{ 
                      fontFamily: MONO,
                      backgroundColor: C.paper,
                      color: C.ink,
                      border: `1px solid ${C.line}`
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
