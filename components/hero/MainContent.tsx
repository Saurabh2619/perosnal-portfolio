"use client";

import React from 'react';
import { C, SERIF } from './constants';
import { useTypingName } from './hooks';

export function MainContent() {
  const name = useTypingName();

  return (
    <div className="relative z-10 flex flex-col items-center">
      <p
        className="rise d1"
        style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 'clamp(28px, 3.6vw, 50px)', lineHeight: 1, marginBottom: 3 }}
      >
        Hey there… meet
      </p>

      <div className="rise d2 w-full" style={{ fontSize: 'clamp(72px, 15vw, 220px)' }}>
        <h1
          className="flex items-center justify-center whitespace-nowrap"
          style={{ height: '1.15em', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.05em', textShadow: `0.035em 0.035em 0 ${C.sky}` }}
          aria-label="Saurabh"
        >
          <span>{name}</span>
          <span className="blink" style={{ display: 'inline-block', width: '0.06em', height: '0.75em', background: C.blue, marginLeft: '0.05em' }} />
        </h1>
      </div>

      <div className="rise d3 mt-2 mb-6 flex justify-center w-full px-4">
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 px-5 py-3 sm:py-2.5 rounded-2xl sm:rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-center"
          style={{ 
            backgroundColor: '#F4F4F4',
            border: `1.5px solid ${C.ink}`,
            boxShadow: `3px 3px 0 ${C.blue}`,
            color: C.ink 
          }}
        >
          <span>Full Stack Developer</span>
          <span className="hidden sm:inline" style={{ color: C.blue, fontSize: '0.8em' }}>◆</span>
          <span>Cloud Security Engineer</span>
        </div>
      </div>

      <p className="rise d3 max-w-2xl" style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', lineHeight: 1.3, fontWeight: 500, letterSpacing: '-0.01em' }}>
        I build things, then figure out{' '}
        <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: '1.15em', background: C.sky, padding: '0 8px', borderRadius: 6 }}>
          how they break.
        </span>
      </p>
    </div>
  );
}
