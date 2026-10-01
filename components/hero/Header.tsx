"use client";

import React, { useState, useEffect } from 'react';
import { C, KEYNAV, MONO, DISPLAY } from './constants';
import { useISTClock } from './hooks';
import { FiMenu, FiX, FiArrowUpRight, FiDownload } from 'react-icons/fi';

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
    <>
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

        {/* Resume Button, Clock & Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Permanent Resume Button */}
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold transition-transform hover:-translate-y-0.5 active:scale-95"
            style={{ 
              backgroundColor: C.blue, 
              color: '#fff', 
              fontSize: 13, 
              boxShadow: `2px 2px 0 ${C.ink}`,
              border: `1.5px solid ${C.ink}`
            }}
          >
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
            <FiDownload size={16} strokeWidth={2.5} className="shrink-0" />
          </a>

          {/* 24h IST clock */}
          <div className="flex items-end gap-2">
            <span style={{ fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              {hh}<span style={{ color: C.blue }}>:</span>{mm}
            </span>
            <div className="hidden sm:flex flex-col pb-0.5" style={{ fontFamily: MONO, fontSize: 11, lineHeight: 1.3 }}>
              <span style={{ color: C.blue, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>:{ss}</span>
              <span style={{ color: C.muted }}>IST</span>
            </div>
          </div>

          {/* Hamburger Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-xl transition-transform active:scale-90"
            style={{ border: `1.5px solid ${C.ink}`, background: C.paper, color: C.ink, boxShadow: `2px 2px 0 ${C.blue}` }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={22} strokeWidth={2.5} /> : <FiMenu size={22} strokeWidth={2.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[60] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Drawer (Slides Right to Left) */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm flex flex-col p-8 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] z-[70] md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ borderLeft: `2px solid ${C.ink}`, backgroundColor: C.paper }}
      >
        <div className="flex justify-end mb-12">
          <button
            className="flex items-center justify-center p-3 rounded-full transition-colors hover:bg-black/5"
            style={{ border: `2px solid ${C.ink}`, color: C.ink, boxShadow: `3px 3px 0 ${C.ink}` }}
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX size={24} strokeWidth={2.5} />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {KEYNAV.map((item, i) => (
            <a
              key={item.k}
              href={`#${item.id}`}
              onClick={(e) => { 
                e.preventDefault(); 
                setIsMenuOpen(false);
                setTimeout(() => go(item), 100); 
              }}
              className={`group flex items-center justify-between pb-4 border-b transition-colors`}
              style={{ borderColor: 'rgba(17,17,17,0.15)', color: item.primary ? C.blue : C.ink }}
            >
              <div className="flex flex-col">
                <span style={{ fontFamily: MONO, fontSize: 12, opacity: 0.6, fontWeight: 700, marginBottom: 4 }}>
                  0{i + 1}
                </span>
                <span className="text-4xl font-extrabold tracking-tighter" style={{ fontFamily: DISPLAY, lineHeight: 1 }}>
                  {item.label}
                </span>
              </div>
              <FiArrowUpRight size={28} className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-active:opacity-100 group-active:translate-x-0" />
            </a>
          ))}
        </nav>
        
        <div className="mt-auto flex flex-col gap-1 opacity-40 pt-8" style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          <span>© {new Date().getFullYear()} Saurabh Sharma</span>
          <span>All Systems Operational</span>
        </div>
      </div>
    </>
  );
}
