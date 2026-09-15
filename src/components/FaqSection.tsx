import React, { useState } from 'react';
import { FAQS } from '../data/courseData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  // All opened by default or first open for great accessibility
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2, 3]);

  const toggle = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  return (
    <section id="duvidas" className="py-8 sm:py-12 relative border-t border-[#1b1e2c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161824] border border-[#2b2e40] text-[#e6af5d] text-xs font-semibold uppercase tracking-widest mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4f6fa] tracking-tight mb-2">
            Dúvidas
          </h2>
          <div className="w-12 h-[2px] bg-[#e6af5d]/50 mx-auto" />
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-[#131520] border-[#2d3248]'
                    : 'bg-[#10121a] border-[#1e2231] hover:border-[#2b3044]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-sm sm:text-base font-bold text-[#fae19c]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#1b1e2b] flex items-center justify-center text-[#c4c8d6] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#e6af5d]' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#c0c5d5] leading-relaxed border-t border-[#1c202e]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
