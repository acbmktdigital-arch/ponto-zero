import React from 'react';
import { COURSE_INFO, CHECKOUT_URL } from '../data/courseData';
import { ArrowRight, ShieldCheck, Sparkles, Video, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 overflow-hidden">
      {/* Background celestial glow and radial gradient */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#5B24E8]/20 via-[#0B2244]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle star particle grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#5B24E8_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-4">
          
          {/* Accessible Heading for Screen Readers and SEO */}
          <h1 className="sr-only">Ponto Zero | Moana Grandinetti</h1>

          {/* Institution & Creator Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2244] border border-[#5B24E8]/40 mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#F5CE00]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#F5F2F8]">
              {COURSE_INFO.institution} · {COURSE_INFO.instructor}
            </span>
          </div>

          {/* Imagem Oficial no Início do Site */}
          <div className="relative w-full max-w-3xl sm:max-w-4xl mx-auto mb-6 group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#F5CE00]/35 via-[#5B24E8]/50 to-[#F5CE00]/35 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#5B24E8]/50 bg-[#0B2244] shadow-2xl shadow-black/90">
              <picture>
                <source srcSet="/hero-image.webp" type="image/webp" />
                <img
                  src="/hero-image.png"
                  onError={(e) => {
                    e.currentTarget.src = "https://i.postimg.cc/cCMxFSY3/Chat-GPT-Image-11-de-set-de-2026-11-34-40.png";
                  }}
                  alt="PONTO ZERO com Moana Grandinetti"
                  className="w-full h-auto object-cover sm:object-contain max-h-[580px] mx-auto transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </picture>
            </div>
          </div>

          {/* Main Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-[#cbd0dc] font-normal leading-relaxed mb-6 max-w-2xl">
            {COURSE_INFO.headline}
          </p>

          {/* CTA Primary Button */}
          <div className="flex items-center justify-center w-full sm:w-auto">
            <a
              id="hero-cta-button"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold tracking-wider uppercase bg-gradient-to-r from-[#F5CE00] via-[#ffd700] to-[#e6b800] hover:brightness-110 text-[#1E1E1E] transition-all shadow-xl shadow-[#F5CE00]/20 active:scale-[0.98] cursor-pointer"
            >
              <span>{COURSE_INFO.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick trust cues */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-5 text-xs text-[#8d92a4]">
            <div className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#F5CE00]" />
              <span>6 aulas ao vivo, com gravação depois</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#F5CE00]" />
              <span>Grupo de suporte exclusivo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F5CE00]" />
              <span>Garantia incondicional de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
