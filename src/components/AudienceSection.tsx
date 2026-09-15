import React from 'react';
import { AUDIENCE_ITEMS } from '../data/courseData';
import { Layers, Clock, Compass, CheckCircle2 } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Layers className="w-7 h-7 text-[#e6af5d]" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-[#e6af5d]" />;
      case 'Compass':
      default:
        return <Compass className="w-7 h-7 text-[#e6af5d]" />;
    }
  };

  return (
    <section id="para-quem-e" className="py-8 sm:py-12 relative bg-[#0e1017]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e6af5d] mb-1.5 block">
            Diagnóstico de Rota
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4f6fa] tracking-tight mb-2">
            Para quem é
          </h2>
          <p className="text-base sm:text-lg text-[#fae19c] font-medium leading-relaxed max-w-xl mx-auto">
            "Se a sua vida parece andar em círculo, este é o lugar de onde se muda a direção."
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {AUDIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#131520] border border-[#24283b] hover:border-[#e6af5d]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1b1e2c] border border-[#2b3046] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-[#f3f5f8] mb-2 font-sans">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#a8adbd] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1f2334] flex items-center gap-2 text-xs text-[#e6af5d]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>O Ponto Zero é o ponto de virada</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
