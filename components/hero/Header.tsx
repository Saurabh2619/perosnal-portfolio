"use client";

import React, { useState, useEffect } from 'react';
import { C, KEYNAV, MONO } from './constants';
import { useISTClock } from './hooks';
import { FiMenu, FiX } from 'react-icons/fi';

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-5"
      style={{
        backgroundColor: 'rgba(242, 241, 236, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid rgba(17, 17, 17, 0.05)`
      }}
    >
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
        <div className="hidden sm:flex flex-col" style={{ lineHeight: 1.35 }}>
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

      {/* Desktop Keycap nav */}
      <nav
        className="hidden md:flex items-center gap-1 p-1.5 rounded-full"
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
            <span className="font-bold tracking-tight text-sm">{item.label}</span>
            <kbd className="key">{item.k}</kbd>
          </a>
        ))}
      </nav>

      {/* 24h IST clock & Mobile Hamburger */}
      <div className="flex items-end gap-4 shrink-0">
        <div className="flex items-end gap-2">
          <span style={{ fontSize: 'clamp(26px,2.8vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
            {hh}<span style={{ color: C.blue }}>:</span>{mm}
          </span>
          <div className="flex flex-col pb-0.5" style={{ fontFamily: MONO, fontSize: 11, lineHeight: 1.3 }}>
            <span style={{ color: C.blue, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>:{ss}</span>
            <span style={{ color: C.muted }}>IST · {date}</span>
          </div>
        </div>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-xl transition-colors"
          style={{ border: `1.5px solid ${C.ink}`, background: C.paper, color: C.ink, boxShadow: `2px 2px 0 ${C.blue}` }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} strokeWidth={2.5} /> : <FiMenu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div 
          className="absolute top-full left-5 right-5 mt-4 p-4 rounded-2xl flex flex-col gap-3 md:hidden"
          style={{ border: `1.5px solid ${C.ink}`, background: C.paper, boxShadow: `4px 4px 0 ${C.ink}` }}
        >
          {KEYNAV.map((item) => (
            <a
              key={item.k}
              href={`#${item.id}`}
              onClick={(e) => { 
                e.preventDefault(); 
                setIsMenuOpen(false);
                go(item); 
              }}
              className={`navk w-full justify-center ${item.primary ? 'primary' : ''} ${pressed === item.k ? 'pressed' : ''}`}
              style={{ padding: '12px 16px', fontSize: '16px' }}
            >
              <span className="font-bold tracking-tight">{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
