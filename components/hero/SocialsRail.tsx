import React from 'react';
import { C, MONO, SOCIALS } from './constants';

export function SocialsRail() {
  return (
    <div className="hidden xl:flex fixed z-20 right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3">
      <span style={{ writingMode: 'vertical-rl', fontFamily: MONO, fontSize: 11, letterSpacing: '0.2em', color: C.muted }}>SAY HI</span>
      <span style={{ width: 1.5, height: 40, background: C.line }} />
      {SOCIALS.map(({ Icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="soc">
          <Icon size={16} strokeWidth={2} />
        </a>
      ))}
    </div>
  );
}
