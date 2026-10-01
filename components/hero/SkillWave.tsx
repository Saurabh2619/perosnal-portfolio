"use client";

import React, { useEffect, useRef, useMemo } from 'react';
import { C, DISPLAY, SKILLS } from './constants';

export function SkillWave() {
  const W = 1600, H = 760, A = 120, L = 720, REP = 5;
  const d = useMemo(() => {
    let p = '';
    for (let x = -300; x <= W + 300; x += 6) {
      const y = H / 2 + A * Math.sin((x / L) * 2 * Math.PI - Math.PI / 2);
      p += (x === -300 ? 'M' : 'L') + x + ' ' + y.toFixed(1) + ' ';
    }
    return p;
  }, []);
  const str = (SKILLS.join(' — ') + ' — ').repeat(REP);
  const tRef = useRef<SVGTextElement>(null);
  const pRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    let raf: number;
    let len = 0;
    const measure = () => { if (tRef.current) len = tRef.current.getComputedTextLength() / REP; };
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    const tick = (ts: number) => {
      if (len && pRef.current) pRef.current.setAttribute('startOffset', (-(((ts / 1000) * 40) % len)).toString());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs><path id="skillwave" d={d} /></defs>
      <text ref={tRef} style={{ fontFamily: DISPLAY, fontSize: 17, fill: C.muted }}>
        <textPath ref={pRef} href="#skillwave">{str}</textPath>
      </text>
    </svg>
  );
}
