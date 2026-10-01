"use client";

import React, { useState, useEffect } from 'react';
import { C, KEYNAV, MONO } from './constants';
import { useISTClock } from './hooks';

export function Header() {
  const { hh, mm, ss, date } = useISTClock();
  const [pressed, setPressed] = useState<string | null>(null);

  const go = (item: typeof KEYNAV[0]) => {
    setPressed(item.k);
    setTimeout(() => setPressed(null), 220);
    const el = document.getElementById(item.id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement)?.tagName || '';
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;
      const item = KEYNAV.find((i) => i.k.toLowerCase() === e.key.toLowerCase());
      if (item) go(item);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between gap-x-4 gap-y-4 px-5 md:px-10 pt-6">
      {/* Identity */}
      <div className="flex items-center gap-4 shrink-0">
        <div
          className="flex items-center justify-center"
          style={{
            width: 44, height: 44, borderRadius: 12, background: C.ink, color: C.paper,
            fontWeight: 800, fontSize: 18, letterSpacing: '-0.04em',
            transform: 'rotate(-6deg)', boxShadow: `3px 3px 0 ${C.blue}`,
          }}
        >
          SS
        </div>
        <div className="hidden sm:flex md:hidden lg:flex flex-col" style={{ lineHeight: 1.35 }}>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em' }}>Saurabh Sharma</span>
          <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 11, color: '#6B6A64' }}>
            <span className="relative inline-flex" style={{ width: 7, height: 7 }}>
              <span className="ping absolute inset-0 rounded-full" style={{ background: C.blue }} />
              <span className="relative rounded-full" style={{ width: 7, height: 7, background: C.blue }} />
            </span>
            open to work · Kanpur, IN
          </span>
        </div>
      </div>

      {/* Keycap nav — always open */}
      <nav
        className="navbar order-3 md:order-none w-full md:w-auto flex items-center gap-1 p-1.5 rounded-full overflow-x-auto"
        style={{ border: `1.5px solid ${C.ink}`, background: C.paper, boxShadow: `3px 3px 0 ${C.ink}` }}
        aria-label="Main"
      >
        {KEYNAV.map((item) => (
          <a
            key={item.k}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); go(item); }}
            className={`navk ${item.primary ? 'primary' : ''} ${pressed === item.k ? 'pressed' : ''}`}
            title={`Press ${item.k}`}
          >
            {item.label}
            <kbd className="key">{item.k}</kbd>
          </a>
        ))}
      </nav>

      {/* 24h IST clock */}
      <div className="flex items-end gap-2 shrink-0">
        <span style={{ fontSize: 'clamp(26px,2.8vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
          {hh}<span style={{ color: C.blue }}>:</span>{mm}
        </span>
        <div className="flex flex-col pb-0.5" style={{ fontFamily: MONO, fontSize: 11, lineHeight: 1.3 }}>
          <span style={{ color: C.blue, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>:{ss}</span>
          <span style={{ color: C.muted }}>IST · {date}</span>
        </div>
      </div>
    </header>
  );
}
