"use client";

import React from 'react';
import { C, SERIF, DISPLAY, MONO } from '../hero/constants';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export function ContactSection() {
  return (
    <section id="contact" className="w-full px-5 md:px-10 pt-24 pb-48 md:pt-32 md:pb-56 relative" style={{ backgroundColor: C.paper }}>
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Huge CTA */}
          <div className="flex flex-col gap-6 md:w-2/3">
            <h2 
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
              style={{ color: C.ink, fontFamily: DISPLAY }}
            >
              Let's <br/>
              <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: C.blue }}>Talk.</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium opacity-80 max-w-md mt-4" style={{ color: C.ink }}>
              Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sharmasaurabh2606@gmail.com"
              className="group inline-flex items-center justify-between gap-2 sm:gap-4 mt-8 px-5 sm:px-8 py-4 sm:py-5 rounded-full w-full sm:w-max max-w-full transition-transform hover:-translate-y-1"
              style={{ 
                backgroundColor: C.ink, 
                color: C.paper,
                fontFamily: MONO,
                boxShadow: `6px 6px 0 ${C.blue}`
              }}
            >
              <span className="text-xs sm:text-lg font-bold tracking-wider truncate">sharmasaurabh2606@gmail.com</span>
              <FiArrowUpRight size={20} className="shrink-0 transition-transform group-hover:rotate-45 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/2 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-2" style={{ color: C.ink, fontFamily: MONO }}>
              Socials
            </h3>
            
            <div className="flex flex-col gap-6">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-6">
                <a href="https://github.com/Saurabh2619" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm lg:text-lg font-bold hover:underline transition-colors shrink-0" style={{ color: C.ink }}>
                  <div className="p-2 rounded-full border-2 shrink-0" style={{ borderColor: C.ink }}><FiGithub size={18} /></div>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/saurabh-sharma-3a4011247/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm lg:text-lg font-bold hover:underline transition-colors shrink-0" style={{ color: C.ink }}>
                  <div className="p-2 rounded-full border-2 shrink-0" style={{ borderColor: C.ink }}><FiLinkedin size={18} /></div>
                  LinkedIn
                </a>
                <a href="https://wa.me/917084024231" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm lg:text-lg font-bold hover:underline transition-colors shrink-0" style={{ color: C.ink }}>
                  <div className="p-2 rounded-full border-2 shrink-0" style={{ borderColor: C.ink }}><FaWhatsapp size={18} /></div>
                  WhatsApp
                </a>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap gap-6">
                <a href="https://www.facebook.com/100rabhsharma19" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm lg:text-lg font-bold hover:underline transition-colors shrink-0" style={{ color: C.ink }}>
                  <div className="p-2 rounded-full border-2 shrink-0" style={{ borderColor: C.ink }}><FaFacebookF size={18} /></div>
                  Facebook
                </a>
                <a href="https://www.instagram.com/sharmasaurabh_26/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm lg:text-lg font-bold hover:underline transition-colors shrink-0" style={{ color: C.ink }}>
                  <div className="p-2 rounded-full border-2 shrink-0" style={{ borderColor: C.ink }}><FaInstagram size={18} /></div>
                  Instagram
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full Bleed Marquee Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t-[1.5px] overflow-hidden flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.paper, color: C.ink, fontFamily: MONO }}>
        
        {/* Row 1 (Moving Left) */}
        <div className="w-full border-b-[1px] py-4 flex overflow-hidden whitespace-nowrap" style={{ borderColor: C.line }}>
          <div className="animate-marquee flex whitespace-nowrap text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 w-max">
            <div className="flex">
              {Array(10).fill('THANKS FOR VISITING MY PORTFOLIO | ').map((text, i) => <span key={`1a-${i}`} className="mx-2">{text}</span>)}
            </div>
            <div className="flex">
              {Array(10).fill('THANKS FOR VISITING MY PORTFOLIO | ').map((text, i) => <span key={`1b-${i}`} className="mx-2">{text}</span>)}
            </div>
          </div>
        </div>

        {/* Row 2 (Moving Right) */}
        <div className="w-full py-4 flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-reverse flex whitespace-nowrap text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 w-max">
            <div className="flex">
              {Array(10).fill('DESIGNED & ENGINEERED BY SAURABH SHARMA | ').map((text, i) => <span key={`2a-${i}`} className="mx-2">{text}</span>)}
            </div>
            <div className="flex">
              {Array(10).fill('DESIGNED & ENGINEERED BY SAURABH SHARMA | ').map((text, i) => <span key={`2b-${i}`} className="mx-2">{text}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
