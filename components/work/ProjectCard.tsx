"use client";

import React from 'react';
import Image from 'next/image';
import { FiExternalLink as ExternalLink } from 'react-icons/fi';
import { C, MONO, DISPLAY } from '../hero/constants';

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    featured?: boolean;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div 
      className="group relative flex flex-col rounded-xl overflow-hidden bg-white transition-all duration-300"
      style={{
        border: `1.5px solid ${C.ink}`,
        boxShadow: `4px 4px 0 ${C.ink}`,
      }}
    >
      {/* Browser Window Header */}
      <div 
        className="flex items-center gap-1.5 px-3 py-2 border-b"
        style={{ borderColor: C.ink, backgroundColor: C.paper }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
      </div>

      {/* Image Container */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noreferrer"
        className="relative block w-full overflow-hidden bg-zinc-100"
        style={{ aspectRatio: project.featured ? '16/9' : '4/3' }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Visit Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span 
            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm"
            style={{ backgroundColor: C.paper, color: C.ink, fontFamily: DISPLAY }}
          >
            Visit Live <ExternalLink size={16} />
          </span>
        </div>
      </a>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-semibold"
              style={{ 
                fontFamily: MONO, 
                backgroundColor: 'rgba(46, 91, 255, 0.1)', 
                color: C.blue,
                border: `1px solid rgba(46, 91, 255, 0.2)`
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div>
          <h3 className="text-xl font-bold leading-tight mb-1" style={{ color: C.ink }}>
            {project.name}
          </h3>
          <p className="text-sm opacity-80 line-clamp-3 leading-relaxed" style={{ color: C.ink }}>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
