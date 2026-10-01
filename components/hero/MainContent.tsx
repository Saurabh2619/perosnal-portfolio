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

      <p className="rise d3 mt-3 max-w-2xl" style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', lineHeight: 1.3, fontWeight: 500, letterSpacing: '-0.01em' }}>
        I build things, then figure out{' '}
        <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: '1.15em', background: C.sky, padding: '0 8px', borderRadius: 6 }}>
          how they break.
        </span>
      </p>
    </div>
  );
}
