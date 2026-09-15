import React from 'react';
import { COURSE_INFO, CHECKOUT_URL } from '../data/courseData';
import { ArrowRight, Check, ShieldCheck, Zap, Lock, CreditCard, QrCode } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="inscricao" className="py-8 sm:py-12 relative bg-[#0a0c12]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e6af5d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Pricing Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#151724] to-[#0e1018] border border-[#2d3248] shadow-2xl shadow-black/80 relative overflow-hidden">
          
          {/* Top subtle highlight line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e6af5d] to-transparent" />

          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e6af5d] mb-1.5 block">
              Inscrições Abertas
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#f4f6fa] tracking-tight mb-2">
              Recalcule a rota
            </h2>
            <p className="text-xs sm:text-sm text-[#a2a7b8]">
              O ponto de virada definitivo para destravar sua linha do tempo e sair dos ciclos de repetição.
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-[#0b0d14] rounded-2xl p-5 sm:p-6 border border-[#212537] text-center max-w-lg mx-auto mb-5 shadow-2xl">
            <div className="text-xs text-[#8c91a3] uppercase tracking-wider mb-1">
              Investimento
            </div>

            <div className="text-3xl sm:text-5xl font-bold text-[#fae19c] my-1 font-sans tracking-tight">
              12x <span className="text-xl sm:text-3xl font-semibold text-[#c59b4c]">de</span> R$ 19,44
            </div>

            <p className="text-xs sm:text-sm text-[#f4f6fa] font-medium mt-1 mb-2">
              ou <strong className="text-[#fae19c]">{COURSE_INFO.cashPriceText}</strong>
            </p>

            <p className="text-xs text-[#8c91a3] mb-3">
              {COURSE_INFO.priceFormat}
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#959aa9] bg-[#141622] px-3.5 py-1 rounded-full border border-[#24283b]">
              <span>À vista no PIX ou em até 12x no Cartão</span>
            </div>
          </div>

          {/* Included Features List */}
          <div className="max-w-md mx-auto space-y-2 mb-6 text-xs sm:text-sm text-[#cbd0dc]">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e6af5d]/20 text-[#e6af5d] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>6 aulas ao vivo com a Moana</strong> (gravação disponível depois)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e6af5d]/20 text-[#e6af5d] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Grupo de suporte exclusivo</strong> para tirar dúvidas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e6af5d]/20 text-[#e6af5d] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong className="text-[#fae19c]">BÔNUS 1: Hiper Remoção de Chips e Implantes</strong> (de R$ 33 por R$ 0)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e6af5d]/20 text-[#e6af5d] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong className="text-[#fae19c]">BÔNUS 2: Japamala Consagrado na Energia Arcturiana</strong> (de R$ 111 por R$ 0)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e6af5d]/20 text-[#e6af5d] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Acesso imediato à área de membros da HiperConsciência</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e6af5d]/20 text-[#e6af5d] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Garantia incondicional de 7 dias para testar</span>
            </div>
          </div>

          {/* Big Action Button */}
          <div className="max-w-md mx-auto text-center">
            <a
              id="pricing-cta-button"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 sm:py-4 px-8 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#c59b4c] via-[#e6af5d] to-[#fae19c] hover:brightness-110 text-[#0b0c10] transition-all shadow-xl shadow-[#e6af5d]/25 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3"
            >
              <span>{COURSE_INFO.secondaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Security badges */}
            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-[#7d8293]">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#e6af5d]" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e6af5d]" />
                <span>Garantia de 7 Dias</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
