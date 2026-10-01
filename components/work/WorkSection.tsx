"use client";

import React from 'react';
import { C, SERIF, DISPLAY } from '../hero/constants';
import { FEATURED_PROJECTS, FREELANCE_PROJECTS } from './data';
import { ProjectCard } from './ProjectCard';
import { FiBriefcase } from 'react-icons/fi';

export function WorkSection() {
  const featured = FEATURED_PROJECTS.filter(p => p.featured);
  const otherProjects = FEATURED_PROJECTS.filter(p => !p.featured);

  return (
    <section id="work" className="w-full px-5 md:px-10 py-24 bg-white relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: C.ink, fontFamily: DISPLAY }}
          >
            Selected <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: C.blue }}>Work</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-70 max-w-2xl" style={{ color: C.ink }}>
            Production platforms, massive scale, and breaking things securely.
          </p>
        </div>

        {/* Featured Projects (Crown Jewels) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other Major Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Freelance & Internships */}
        <div className="pt-16 mt-8 border-t-2" style={{ borderColor: C.line }}>
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Freelance Projects */}
            <div className="flex-1 flex flex-col gap-8">
              <h3 className="text-3xl font-bold flex items-center gap-3" style={{ color: C.ink }}>
                <span className="p-2 rounded-lg" style={{ backgroundColor: C.paper }}><FiBriefcase /></span>
                Freelance Work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {FREELANCE_PROJECTS.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* Internships & Research */}
            <div className="w-full md:w-1/3 flex flex-col gap-8">
               <h3 className="text-3xl font-bold flex items-center gap-3" style={{ color: C.ink }}>
                Research & Labs
              </h3>
              
              {/* Climate IIT Badge */}
              <div 
                className="p-6 rounded-xl flex flex-col gap-4 bg-zinc-50 transition-all duration-300 hover:-translate-y-1"
                style={{ border: `1.5px solid ${C.ink}`, boxShadow: `4px 4px 0 ${C.ink}` }}
              >
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white">
                    Internship
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1" style={{ color: C.ink }}>Climate Study for IIT B</h4>
                  <p className="text-sm opacity-80 mb-4">
                    Built responsive, data-driven pages ensuring vision alignment for the Climate IIT research team.
                  </p>
                  <a 
                    href="https://www.climate.iitb.ac.in/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex font-bold text-sm hover:underline"
                    style={{ color: C.blue }}
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
