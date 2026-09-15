import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AudienceSection } from './components/AudienceSection';
import { CurriculumSection } from './components/CurriculumSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { BonusSection } from './components/BonusSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from './data/courseData';

export default function App() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 600px
      setShowStickyCta(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B2244] text-[#F5F2F8] relative selection:bg-[#F5CE00]/30 selection:text-[#F5CE00]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <AboutSection />
        <AudienceSection />
        <CurriculumSection />
        <DeliverablesSection />
        <BonusSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Bar for mobile/tablet when scrolled */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-30 p-3.5 bg-[#0B2244]/95 backdrop-blur-lg border-t border-[#5B24E8]/40 shadow-2xl flex items-center justify-between gap-4 sm:hidden animate-slideUp">
          <div className="flex flex-col">
            <span className="font-cinzel text-xs font-bold text-[#F5CE00]">PONTO ZERO</span>
            <span className="text-[11px] text-[#cbd0dc]">6 aulas ao vivo + Suporte</span>
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#F5CE00] to-[#e6b800] text-[#1E1E1E] flex items-center gap-1.5 shadow-md shadow-[#F5CE00]/20 active:scale-95 cursor-pointer shrink-0"
          >
            <span>Recalcular Rota</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
