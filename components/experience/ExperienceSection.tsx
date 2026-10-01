"use client";

import React from 'react';
import { C, SERIF, DISPLAY, MONO } from '../hero/constants';

const EXPERIENCES = [
  {
    id: 'ipm',
    role: 'Full-Stack Developer',
    company: 'IPM Career Group',
    date: 'June 2024 - Present',
    description: [
      'Migrated and deployed a multi-tenant cloud security platform (TensorShield) from AWS EC2 to Google Cloud.',
      'Containerized security scanners (Prowler, ScoutSuite, Semgrep, Trivy) in hardened Docker sandboxes.',
      'Shipped 4 production ed-tech platforms serving 25,000+ students with Google OAuth and RBAC.',
      'Engineered a dynamic microsite generator for SEO, capturing 50+ keywords on Google page one.'
    ]
  },
  {
    id: 'avaomme',
    role: 'Web Developer',
    company: 'Avaomme Infotech',
    date: 'May 2023 - Nov 2023',
    description: [
      'Built client websites with a front-end focus, ensuring vision alignment.',
      'Key project: Developed Climate IIT (climate.iitb.ac.in) with highly responsive, data-driven pages.'
    ]
  }
];

export function ExperienceSection() {
  const [totalExp, setTotalExp] = React.useState('2.4');

  React.useEffect(() => {
    // Set base date to today so it perfectly displays 2.4, and adds 0.1 every month going forward.
    const baseDate = new Date('2026-10-01');
    const now = new Date();
    const monthsDiff = (now.getFullYear() - baseDate.getFullYear()) * 12 + (now.getMonth() - baseDate.getMonth());
    
    // Calculate new value (2.4 + 0.1 per month that passes from today)
    const currentVal = 2.4 + (Math.max(0, monthsDiff) * 0.1);
    setTotalExp(currentVal.toFixed(1));
  }, []);

  return (
    <section id="experience" className="w-full px-5 md:px-10 py-24 relative" style={{ backgroundColor: C.paper }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-6">
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: C.ink, fontFamily: DISPLAY }}
          >
            My <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: C.blue }}>Experience</span>
          </h2>
          
          <div className="flex flex-col gap-4 max-w-3xl text-lg md:text-xl leading-relaxed opacity-90" style={{ color: C.ink }}>
            <p>
              I am a Full-stack developer with <strong>{totalExp}+ years</strong> of experience building and scaling production ed-tech platforms that serve over 25,000+ users. I now specialize in Cloud Security Engineering, getting hands-on with GCP, AWS, Docker, and CSPM/SAST tooling (Prowler, ScoutSuite, Semgrep, Trivy) alongside React, Node.js, and PostgreSQL.
            </p>
            <p className="text-base md:text-lg font-medium" style={{ color: C.blue }}>
              * I also run high-converting Google and Meta Ads, managing and optimizing campaigns for VLCC franchise clients to maximize their ad-to-lead conversion rates.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-0.5" style={{ backgroundColor: C.ink, opacity: 0.2 }}></div>

          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row gap-6 md:gap-12 pl-12">
              
              {/* Timeline Dot */}
              <div 
                className="absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10"
                style={{ backgroundColor: C.paper, borderColor: C.ink }}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: idx === 0 ? C.blue : C.ink }}></div>
              </div>

              {/* Date Column (Left) */}
              <div className="md:w-1/4 shrink-0 pt-1.5">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: C.ink, color: C.paper, fontFamily: MONO }}
                >
                  {exp.date}
                </span>
              </div>

              {/* Content Column (Right) */}
              <div className="md:w-3/4 flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: C.ink }}>{exp.role}</h3>
                  <h4 className="text-lg font-semibold" style={{ color: C.blue, fontFamily: SERIF, fontStyle: 'italic' }}>
                    @ {exp.company}
                  </h4>
                </div>
                
                <ul className="flex flex-col gap-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start opacity-80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.ink }}></span>
                      <span className="text-base leading-relaxed" style={{ color: C.ink }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
