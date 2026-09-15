import React from 'react';
import { Compass, Sparkles, Orbit, RefreshCw, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-8 sm:py-12 relative border-t border-[#1b1e2c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161824] border border-[#2b2e40] text-[#e6af5d] text-xs font-semibold uppercase tracking-widest mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Fundamentos da Realidade</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4f6fa] tracking-tight mb-2">
            Do que o Ponto Zero fala
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#e6af5d] to-transparent mx-auto" />
        </div>

        {/* Narrative Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#12141e] border border-[#232738] relative overflow-hidden group hover:border-[#383d54] transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-[#1b1e2c] border border-[#2e3348] flex items-center justify-center text-[#e6af5d] mb-4 group-hover:scale-105 transition-transform">
              <Orbit className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#fae19c] font-cinzel mb-2">
              Mudança de Linha do Tempo & Eu Estelar
            </h3>
            <p className="text-[#c7cbd7] text-sm leading-relaxed mb-3">
              O Ponto Zero fala de mudança de linha do tempo, de conexão com o eu do futuro, de conexão com o eu estelar.
            </p>
            <p className="text-[#969ba8] text-xs sm:text-sm leading-relaxed">
              Fala das crenças, dos padrões, de tudo que te limita de chegar onde você quer chegar.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#12141e] border border-[#232738] relative overflow-hidden group hover:border-[#383d54] transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-[#1b1e2c] border border-[#2e3348] flex items-center justify-center text-[#e6af5d] mb-4 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#fae19c] font-cinzel mb-2">
              A Regra do Jogo & A Matrix
            </h3>
            <p className="text-[#c7cbd7] text-sm leading-relaxed mb-3">
              Fala que a gente tem uma regra do jogo: que a gente pode entender como é o funcionamento da Matrix e usar isso a nosso favor.
            </p>
            <p className="text-[#969ba8] text-xs sm:text-sm leading-relaxed">
              Destravar a linha, mudar de linha do tempo, entender como você conecta e colapsa para cima, ou quando você está colapsando a realidade para baixo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#12141e] border border-[#232738] relative overflow-hidden group hover:border-[#383d54] transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-[#1b1e2c] border border-[#2e3348] flex items-center justify-center text-[#e6af5d] mb-4 group-hover:scale-105 transition-transform">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#fae19c] font-cinzel mb-2">
              Repetições
            </h3>
            <p className="text-[#e2e5ee] font-medium text-sm sm:text-base leading-relaxed mb-2">
              Por que as coisas estão se repetindo? Quando as coisas se repetem? Qual o motivo das coisas se repetirem?
            </p>
            <p className="text-[#969ba8] text-xs sm:text-sm leading-relaxed">
              Descubra a raiz inconsciente que mantém você girando no mesmo circuito emocional e relacional, e como desarmar esses gatilhos na origem.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#12141e] border border-[#232738] relative overflow-hidden group hover:border-[#383d54] transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-[#1b1e2c] border border-[#2e3348] flex items-center justify-center text-[#e6af5d] mb-4 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#fae19c] font-cinzel mb-2">
              O Caos Antes do Salto & O Observador
            </h3>
            <p className="text-[#c7cbd7] text-sm leading-relaxed mb-3">
              A gente vai falar de que, toda vez que a gente está realmente chegando num ponto ápice de dar um salto quântico, a gente vai ter um bocado de problema, um tanto de coisa acontecendo.
            </p>
            <p className="text-[#e6af5d] text-xs sm:text-sm font-semibold leading-relaxed">
              E de como a gente pode, a partir do ponto do observador, mudar toda a perspectiva da nossa vida.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
