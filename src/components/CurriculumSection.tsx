import React, { useState } from 'react';
import { LESSONS } from '../data/courseData';
import { Sparkles, PlayCircle, ChevronDown, Check } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);

  const toggleLesson = (num: number) => {
    setExpandedLesson(expandedLesson === num ? null : num);
  };

  return (
    <section id="aulas" className="py-8 sm:py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161824] border border-[#2b2e40] text-[#e6af5d] text-xs font-semibold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>O Roteiro da Transformação</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4f6fa] tracking-tight mb-2">
            A jornada em 6 aulas
          </h2>
          <p className="text-sm sm:text-base text-[#a9aebd] leading-relaxed">
            Cada aula leva você um passo mais perto do ponto zero, o lugar do observador, de onde uma nova realidade pode ser escolhida.
          </p>
        </div>

        {/* Lessons List / Timeline */}
        <div className="space-y-3">
          {LESSONS.map((lesson) => {
            const isExpanded = expandedLesson === lesson.number;

            return (
              <div
                key={lesson.number}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#141624] border-[#e6af5d]/50 shadow-xl shadow-black/50'
                    : 'bg-[#11131c] border-[#222638] hover:border-[#353b54]'
                }`}
              >
                <div
                  onClick={() => toggleLesson(lesson.number)}
                  className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-5">
                    {/* Lesson number badge */}
                    <div className="w-10 h-10 rounded-2xl bg-[#1b1e2c] border border-[#2f354c] flex-shrink-0 flex items-center justify-center text-sm font-bold font-cinzel text-[#fae19c]">
                      0{lesson.number}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-[#e6af5d] uppercase tracking-wider">
                          {lesson.title}
                        </span>
                        <span className="text-[#555a6d] text-xs">·</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#191c28] text-[#9ca3af] border border-[#272c3d]">
                          {lesson.focusTag}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#f0f2f7] font-sans">
                        {lesson.subtitle}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#8d92a4] hidden md:inline">
                      {isExpanded ? 'Recolher' : 'Ver detalhes'}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[#1b1e2b] flex items-center justify-center text-[#c4c8d6] transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#e6af5d]' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Lesson Body Content */}
                <div className={`px-5 pb-5 pt-1 text-sm text-[#c0c5d4] border-t border-[#1d2130] leading-relaxed ${
                  isExpanded ? 'block' : 'sm:block'
                }`}>
                  <p className="max-w-3xl">
                    {lesson.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
