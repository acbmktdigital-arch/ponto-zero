import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B2244]/95 backdrop-blur-md border-b border-[#5B24E8]/40 py-2.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F5CE00] via-[#ffd700] to-[#F5CE00] flex items-center justify-center p-[1px] shadow-sm shadow-[#F5CE00]/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0B2244] rounded-full flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#F5CE00] animate-pulse"></span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-base sm:text-lg tracking-[0.2em] font-bold text-[#F5F2F8] group-hover:text-[#F5CE00] transition-colors">
              PONTO ZERO
            </span>
            <span className="text-[10px] text-[#cbd0dc] tracking-widest uppercase -mt-1 font-medium">
              Moana Grandinetti
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};
