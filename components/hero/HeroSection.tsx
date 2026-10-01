"use client";

import React from 'react';
import { C, DISPLAY, MONO } from './constants';
import { Header } from './Header';
import { SocialsRail } from './SocialsRail';
import { SkillWave } from './SkillWave';
import { MainContent } from './MainContent';

export default function HeroSection() {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Noto+Sans+Devanagari:wght@800&family=Noto+Sans+Bengali:wght@800&family=Noto+Sans+JP:wght@800&family=Noto+Sans+SC:wght@800&family=Noto+Sans+KR:wght@800&display=swap');
    @keyframes blink { 50% { opacity: 0; } }
    .blink { animation: blink 1s steps(1) infinite; }
    @keyframes ping { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(2.6); opacity: 0; } }
    .ping { animation: ping 1.6s ease-out infinite; }
    @keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    .rise { opacity: 0; animation: rise .7s cubic-bezier(.2,.7,.2,1) forwards; }
    .d1 { animation-delay: .1s; } .d2 { animation-delay: .3s; } .d3 { animation-delay: .55s; }

    .navbar { scrollbar-width: none; }
    .navbar::-webkit-scrollbar { display: none; }
    .navk { display: inline-flex; align-items: center; gap: 9px; padding: 8px 10px 8px 16px; border-radius: 99px; white-space: nowrap;
            font-weight: 600; font-size: 14px; color: ${C.ink}; transition: background .2s, color .2s; cursor: pointer; }
    .navk:hover, .navk.pressed { background: ${C.ink}; color: ${C.paper}; }
    .navk.primary { background: ${C.blue}; color: #fff; }
    .navk.primary:hover, .navk.primary.pressed { background: ${C.ink}; }
    .key { font-family: ${MONO}; font-size: 10.5px; font-weight: 700; box-sizing: border-box; min-width: 21px; height: 21px;
           padding: 0 5px; display: inline-flex; align-items: center; justify-content: center;
           border: 1.3px solid currentColor; border-bottom-width: 3.5px; border-radius: 6px; opacity: .8;
           transition: transform .12s, border-bottom-width .12s; }
    .navk:hover .key { transform: translateY(1px); }
    .navk.pressed .key { transform: translateY(2px); border-bottom-width: 1.3px; }

    /* Phones: no keyboard, so hide keycaps and tighten pills */
    @media (max-width: 767px) {
      .key { display: none; }
      .navk { padding: 8px 14px; font-size: 13px; }
    }

    .soc { width: 38px; height: 38px; border-radius: 99px; display: flex; align-items: center; justify-content: center;
           border: 1.5px solid ${C.ink}; transition: all .2s; }
    .soc:hover { background: ${C.blue}; color: #fff; border-color: ${C.blue}; transform: translateX(-3px); }

    @media (prefers-reduced-motion: reduce) {
      .blink, .ping { animation: none; }
      .rise { opacity: 1; animation: none; }
    }
  `;

  return (
    <div
      id="home"
      className="relative overflow-hidden flex flex-col"
      style={{ background: C.paper, color: C.ink, fontFamily: DISPLAY, minHeight: 'min(90vh, 900px)' }}
    >
      <style>{css}</style>

      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.1" fill={C.line} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <Header />
      <SocialsRail />

      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-20 md:py-28">
        <SkillWave />
        <MainContent />
      </main>
    </div>
  );
}
