import React from 'react';
import { Video, Users, Sparkles, Quote, Award, CheckCircle } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

export const DeliverablesSection: React.FC = () => {
  return (
    <section id="o-que-recebe" className="py-8 sm:py-12 relative bg-[#0e1017] border-t border-b border-[#1b1e2c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e6af5d] mb-1.5 block">
            Formato & Acompanhamento
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4f6fa] tracking-tight mb-2">
            O que você recebe
          </h2>
          <p className="text-sm sm:text-base text-[#cbd0dc] leading-relaxed">
            Seis encontros ao vivo com a Moana, e a gravação de cada um para rever depois. E você não atravessa isso sozinho.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          
          {/* Deliverable 1: 6 Aulas ao vivo com gravação */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#131520] border border-[#24283b] hover:border-[#333952] transition-colors relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#1b1e2c] border border-[#2d3248] flex items-center justify-center text-[#e6af5d] mb-4">
              <Video className="w-5 h-5" />
            </div>
            
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="text-lg sm:text-xl font-bold text-[#f3f5f8] font-sans tracking-tight">
                6 aulas ao vivo
              </h3>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#1e2333] text-[#fae19c] border border-[#31374d]">
                Com gravação
              </span>
            </div>

            <p className="text-sm text-[#a8adbd] leading-relaxed">
              Encontros ao vivo com a Moana. A gravação fica disponível depois, para rever quantas vezes precisar.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-[#8c92a2]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#e6af5d] shrink-0" />
                <span>Ao vivo, com espaço para perguntas na hora</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#e6af5d] shrink-0" />
                <span>Não perde nada: a gravação fica disponível depois</span>
              </li>
            </ul>
          </div>

          {/* Deliverable 2: Grupo de suporte */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#131520] border border-[#24283b] hover:border-[#333952] transition-colors relative overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#1b1e2c] border border-[#2d3248] flex items-center justify-center text-[#e6af5d] mb-4">
              <Users className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="text-lg sm:text-xl font-bold text-[#f3f5f8] font-sans tracking-tight">
                Grupo de suporte
              </h3>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#1e2333] text-[#fae19c] border border-[#31374d]">
                Comunidade Exclusiva
              </span>
            </div>

            <p className="text-sm text-[#a8adbd] leading-relaxed">
              Você entra no grupo de suporte e conta com um espaço dedicado para esclarecer dúvidas e acompanhar as orientações.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-[#8c92a2]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#e6af5d] shrink-0" />
                <span>Canal estruturado para esclarecer dúvidas da jornada</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#e6af5d] shrink-0" />
                <span>Troca segura no ambiente iniciático</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Facilitator & Quote Callout */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#161826] to-[#0f111a] border border-[#2c3046] shadow-2xl relative overflow-hidden text-center max-w-3xl mx-auto">
          <div className="w-9 h-9 rounded-full bg-[#e6af5d]/15 flex items-center justify-center text-[#e6af5d] mx-auto mb-3">
            <Quote className="w-4 h-4" />
          </div>

          <p className="text-xs uppercase tracking-widest font-semibold text-[#a3a8b9] mb-2">
            Com a {COURSE_INFO.instructor}: {COURSE_INFO.institution}
          </p>

          <blockquote className="font-cinzel text-lg sm:text-xl md:text-2xl text-[#fae19c] font-bold leading-snug mb-2">
            "{COURSE_INFO.quote}"
          </blockquote>

          <cite className="text-xs sm:text-sm text-[#8d92a4] font-medium not-italic block">
            — {COURSE_INFO.instructor}
          </cite>
        </div>

      </div>
    </section>
  );
};
