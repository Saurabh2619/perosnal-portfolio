"use client";

import { useState, useEffect, useMemo } from 'react';
import { NAMES } from './constants';

export const graphemes = (s: string) => {
  try {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      return [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(s)].map((g) => g.segment);
    }
  } catch {}
  return Array.from(s);
};

export function useTypingName() {
  const [li, setLi] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  const chars = useMemo(() => graphemes(NAMES[li]), [li]);

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (!del) {
      if (n < chars.length) t = setTimeout(() => setN(n + 1), 130);
      else t = setTimeout(() => setDel(true), 1900);
    } else {
      if (n > 0) t = setTimeout(() => setN(n - 1), 65);
      else t = setTimeout(() => { setDel(false); setLi((li + 1) % NAMES.length); }, 350);
    }
    return () => clearTimeout(t);
  }, [n, del, chars, li]);

  return chars.slice(0, n).join('');
}

export function useISTClock() {
  const [now, setNow] = useState(new Date());
  
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  
  const t = now.toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata',
  });
  
  const [hh, mm, ss] = t.split(':');
  const date = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', timeZone: 'Asia/Kolkata' });
  
  return { hh, mm, ss, date };
}
