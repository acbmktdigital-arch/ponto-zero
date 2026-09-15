import React from 'react';
import { MessageSquareQuote, Sparkles, Star, UserCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-8 sm:py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e6af5d] mb-1.5 block">
            Vozes da Comunidade
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4f6fa] tracking-tight mb-2">
            Quem já passou por aqui
          </h2>
          <div className="w-12 h-[2px] bg-[#e6af5d]/60 mx-auto" />
        </div>

        {/* Reserved space notice block (as specified in prompt) */}
        <div className="rounded-3xl p-5 sm:p-7 bg-[#12141e] border border-dashed border-[#343a50] text-center max-w-3xl mx-auto mb-6">
          <div className="w-10 h-10 rounded-full bg-[#1b1e2c] border border-[#2d3348] text-[#e6af5d] flex items-center justify-center mx-auto mb-3">
            <MessageSquareQuote className="w-5 h-5" />
          </div>

          <p className="text-sm sm:text-base font-medium text-[#fae19c] font-cinzel mb-1.5">
            [Espaço reservado para depoimentos reais de alunos: inserir antes da publicação.]
          </p>

          <p className="text-xs text-[#8d92a4] max-w-md mx-auto leading-relaxed">
            Aqui serão destacados os relatos em áudio, texto e vídeo dos alunos da HiperConsciência que vivenciaram a virada de rota e a mudança de linha do tempo.
          </p>
        </div>

        {/* Realistic preview placeholders representing student transformation themes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto opacity-75">
          
          <div className="p-5 rounded-2xl bg-[#10121a] border border-[#1f2334] text-xs">
            <div className="flex items-center gap-1 text-[#e6af5d] mb-2.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#e6af5d]" />
              ))}
            </div>
            <p className="text-[#c0c5d4] italic leading-relaxed mb-3">
              "Entender o colapso para baixo foi o divisor de águas. Parei de repetir o mesmo ciclo no trabalho e destravei minha rota."
            </p>
            <div className="flex items-center gap-2 pt-2.5 border-t border-[#1a1d2c] text-[#818798]">
              <UserCheck className="w-3.5 h-3.5 text-[#e6af5d]" />
              <span>Aluna · Turma Iniciática</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#10121a] border border-[#1f2334] text-xs">
            <div className="flex items-center gap-1 text-[#e6af5d] mb-2.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#e6af5d]" />
              ))}
            </div>
            <p className="text-[#c0c5d4] italic leading-relaxed mb-3">
              "A aula 4 sobre o caos antes do salto me deu paz imediata. Eu achava que estava errando, quando na verdade era o salto quântico."
            </p>
            <div className="flex items-center gap-2 pt-2.5 border-t border-[#1a1d2c] text-[#818798]">
              <UserCheck className="w-3.5 h-3.5 text-[#e6af5d]" />
              <span>Aluno · Turma Iniciática</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#10121a] border border-[#1f2334] text-xs">
            <div className="flex items-center gap-1 text-[#e6af5d] mb-2.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#e6af5d]" />
              ))}
            </div>
            <p className="text-[#c0c5d4] italic leading-relaxed mb-3">
              "O acompanhamento da Moana no grupo faz toda a diferença. Não é um curso solto, a gente se sente guiado a cada passo."
            </p>
            <div className="flex items-center gap-2 pt-2.5 border-t border-[#1a1d2c] text-[#818798]">
              <UserCheck className="w-3.5 h-3.5 text-[#e6af5d]" />
              <span>Aluna · Turma Iniciática</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
