import React from 'react';
import { COURSE_INFO } from '../data/courseData';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#08090d] border-t border-[#1a1c28] text-center text-xs text-[#8c91a3] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Sacred Glyph */}
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#c59b4c] via-[#e6af5d] to-[#fae19c] flex items-center justify-center p-[1px] mx-auto mb-2 shadow-sm shadow-[#e6af5d]/10">
          <div className="w-full h-full bg-[#0b0c10] rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e6af5d]"></span>
          </div>
        </div>

        {/* Brand & Names as requested */}
        <p className="font-cinzel text-sm sm:text-base font-bold text-[#e6af5d] mb-1.5 tracking-wider">
          Ponto Zero · {COURSE_INFO.institution} · {COURSE_INFO.instructor}
        </p>

        {/* Famous Quote */}
        <p className="italic text-xs sm:text-sm text-[#cbd0dc] max-w-md mx-auto mb-3">
          "{COURSE_INFO.quote}"
        </p>

        <p className="text-[11px] text-[#555a6c]">
          © {new Date().getFullYear()} {COURSE_INFO.institution}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
