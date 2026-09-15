import React from 'react';
import { Gift, Sparkles, Flame, CheckCircle2, Compass, CircleDot } from 'lucide-react';
import { CHECKOUT_URL } from '../data/courseData';

export const BonusSection: React.FC = () => {
  const tantraTopics = [
    '7 Corpos Sutis',
    'Chakras & Alinhamento',
    'Kundalini & Energia Vital',
    'Meditação & Mantras',
    'Sexualidade Consciente',
    'Expansão da Consciência'
  ];

  const japamalaTopics = [
    'Energia Arcturiana',
    'Práticas de Mantras',
    'Alinhamento Energético',
    'Meditação & Intenção'
  ];

  return (
    <section id="bonus" className="py-8 sm:py-12 relative overflow-hidden bg-gradient-to-b from-[#090b10] via-[#0e111a] to-[#090b10] border-t border-[#1f2334]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#5B24E8]/15 via-[#F5CE00]/10 to-[#5B24E8]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b2e] border border-[#e6af5d]/50 text-[#F5CE00] text-xs font-bold tracking-wider uppercase mb-2 shadow-lg shadow-[#F5CE00]/10">
            <Gift className="w-3.5 h-3.5 text-[#F5CE00]" />
            <span>BÔNUS ESPECIAIS INCLUSOS</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F5CE00]" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F2F8] tracking-tight mb-2">
            Presentes exclusivos para acelerar sua rota
          </h2>
          <p className="text-xs sm:text-sm text-[#cbd0dc]">
            Mais de <strong className="text-[#F5CE00]">R$ 1.170,00</strong> em conteúdos e consagrações liberados gratuitamente na sua matrícula.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          
          {/* BONUS 1: Tantra Além do Prazer */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#141724] via-[#10121b] to-[#0d0f16] border-2 border-[#e6af5d]/40 shadow-2xl shadow-black/80 flex flex-col justify-between overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5CE00] to-transparent" />
            
            <div>
              {/* Card Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#222538] text-[#fae19c] border border-[#373d56]">
                  <Gift className="w-3 h-3 text-[#F5CE00]" />
                  BÔNUS 01
                </span>
                <span className="text-[11px] font-bold text-[#F5CE00] bg-[#F5CE00]/10 px-2.5 py-1 rounded-full border border-[#F5CE00]/30">
                  GRATUITO
                </span>
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F2F8] tracking-tight mb-2 group-hover:text-[#fae19c] transition-colors">
                Tantra Além do Prazer
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-[#fae19c] font-medium leading-relaxed mb-3">
                Uma jornada de <span className="text-[#F5CE00] font-semibold">autoconhecimento, expansão da consciência e conexão</span>.
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#cbd0dc] leading-relaxed mb-4">
                Explore os <strong className="text-[#F5F2F8]">7 corpos sutis, chakras, Kundalini, energia vital, meditação, mantras e sexualidade consciente</strong>, ampliando sua percepção sobre corpo, mente, emoções e espiritualidade.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tantraTopics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#181a28] border border-[#2d3248] text-[10px] sm:text-[11px] font-medium text-[#c9cedd]"
                  >
                    <Flame className="w-2.5 h-2.5 text-[#F5CE00]" />
                    <span>{topic}</span>
                  </span>
                ))}
              </div>

              {/* Inspirational note */}
              <p className="text-[11px] text-[#8e94a6] italic leading-relaxed mb-4 border-l-2 border-[#e6af5d]/40 pl-3">
                Um conteúdo para aprofundar sua experiência e despertar uma nova percepção sobre si mesmo e a vida.
              </p>
            </div>

            {/* Price Box */}
            <div className="pt-3 border-t border-[#232738] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#757a8c] block">Valor do bônus</span>
                <span className="text-xs sm:text-sm text-[#717789] line-through font-semibold">
                  R$ 1.059,00
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#F5CE00] to-[#e6b800] text-[#12141c] text-[11px] sm:text-xs font-black tracking-wider uppercase shadow-md shadow-[#F5CE00]/20">
                INCLUSO GRATUITAMENTE
              </span>
            </div>
          </div>

          {/* BONUS 2: Japamala Consagrado na Energia Arcturiana */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#141724] via-[#10121b] to-[#0d0f16] border-2 border-[#e6af5d]/40 shadow-2xl shadow-black/80 flex flex-col justify-between overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5B24E8] to-transparent" />
            
            <div>
              {/* Card Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#222538] text-[#fae19c] border border-[#373d56]">
                  <CircleDot className="w-3 h-3 text-[#F5CE00]" />
                  BÔNUS 02
                </span>
                <span className="text-[11px] font-bold text-[#F5CE00] bg-[#F5CE00]/10 px-2.5 py-1 rounded-full border border-[#F5CE00]/30">
                  GRATUITO
                </span>
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5F2F8] tracking-tight mb-2 group-hover:text-[#fae19c] transition-colors">
                Japamala Consagrado na Energia Arcturiana
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-[#fae19c] font-medium leading-relaxed mb-3">
                Instrumento sagrado de <span className="text-[#F5CE00] font-semibold">ancoramento de frequências e alta vibração</span>.
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#cbd0dc] leading-relaxed mb-4">
                Um instrumento de <strong className="text-[#F5F2F8]">conexão, expansão da consciência e alinhamento energético</strong>, utilizado em práticas de meditação, mantras e intenção.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {japamalaTopics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#181a28] border border-[#2d3248] text-[10px] sm:text-[11px] font-medium text-[#c9cedd]"
                  >
                    <Compass className="w-2.5 h-2.5 text-[#F5CE00]" />
                    <span>{topic}</span>
                  </span>
                ))}
              </div>

              {/* Spiritual note */}
              <p className="text-[11px] text-[#8e94a6] italic leading-relaxed mb-4 border-l-2 border-[#5B24E8]/60 pl-3">
                Consagrado para potencializar sua prática diária e manter o campo alinhado ao ponto do observador.
              </p>
            </div>

            {/* Price Box */}
            <div className="pt-3 border-t border-[#232738] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#757a8c] block">Valor do bônus</span>
                <span className="text-xs sm:text-sm text-[#717789] line-through font-semibold">
                  R$ 111,00
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#F5CE00] to-[#e6b800] text-[#12141c] text-[11px] sm:text-xs font-black tracking-wider uppercase shadow-md shadow-[#F5CE00]/20">
                INCLUSO GRATUITAMENTE
              </span>
            </div>
          </div>

        </div>

        {/* Global CTA button */}
        <div className="text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1b1e2e] hover:bg-[#25283d] border border-[#e6af5d]/40 text-[#fae19c] hover:text-[#F5CE00] transition-all cursor-pointer shadow-md active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4 text-[#F5CE00]" />
            <span>Garantir Vaga com os 2 Bônus Inclusos</span>
          </a>
        </div>

      </div>
    </section>
  );
};
