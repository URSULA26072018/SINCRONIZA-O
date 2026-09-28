import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';

interface AppPreloaderProps {
  isLoading: boolean;
}

export const AppPreloader: React.FC<AppPreloaderProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const [isSlowInternet, setIsSlowInternet] = useState(false);

  const tips = [
    'Garimpando as melhores ofertas da internet...',
    'Verificando vendedores e links oficiais com segurança...',
    'Buscando os maiores cupons de desconto ativos...',
    'Separando achadinhos virais com frete e preço justo...',
  ];

  // Rotate tips while loading
  useEffect(() => {
    const tipInterval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 2200);

    // Detect if connection is taking longer than 2.8s
    const slowTimer = setTimeout(() => {
      setIsSlowInternet(true);
    }, 2800);

    return () => {
      clearInterval(tipInterval);
      clearTimeout(slowTimer);
    };
  }, []);

  // Handle smooth fade out when isLoading turns false
  useEffect(() => {
    if (!isLoading) {
      setIsFadingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // 500ms match fade-out duration
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF7ED] via-[#FFF1E6] to-[#F8F9FA] px-4 transition-all duration-500 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-102' : 'opacity-100'
      }`}
      aria-label="Carregando aplicativo Achados do Dia"
    >
      {/* Decorative ambient blurred glows */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-400/20 blur-3xl -top-10 pointer-events-none animate-pulse"></div>
      <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-amber-400/20 blur-3xl bottom-10 pointer-events-none"></div>

      <div className="relative flex flex-col items-center max-w-sm w-full mx-auto text-center z-10">
        
        {/* ANIMATED MOVING FIGURE (Character Mascot) */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-5">
          
          {/* Floating Sparkles around character */}
          <div className="absolute top-2 left-4 text-amber-500 animate-bounce" style={{ animationDuration: '1.8s' }}>
            <Sparkles className="w-5 h-5 fill-amber-400" />
          </div>
          <div className="absolute top-6 right-3 text-orange-500 animate-bounce" style={{ animationDuration: '2.4s', animationDelay: '0.4s' }}>
            <Sparkles className="w-4 h-4 fill-orange-400" />
          </div>
          <div className="absolute bottom-10 left-3 text-emerald-500 animate-pulse">
            <Tag className="w-4 h-4" />
          </div>

          {/* Bouncing Mascot Body */}
          <div className="relative flex flex-col items-center animate-mascot-bounce">
            
            {/* The Mascot Bag / Box */}
            <div className="relative w-24 h-26 rounded-3xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 p-0.5 shadow-xl shadow-orange-500/25">
              <div className="w-full h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-[22px] flex flex-col items-center justify-center p-3 relative overflow-hidden">
                
                {/* Shiny highlight reflection */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/25 rounded-full blur-xs"></div>
                
                {/* Bag Handle */}
                <div className="absolute -top-3 w-10 h-7 rounded-t-full border-4 border-amber-300 border-b-0"></div>

                {/* Friendly Face */}
                <div className="flex items-center justify-center gap-4 mt-2 mb-1.5">
                  {/* Eye Left */}
                  <div className="w-2.5 h-3.5 bg-slate-900 rounded-full flex items-start justify-end p-0.5 animate-pulse">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  {/* Eye Right */}
                  <div className="w-2.5 h-3.5 bg-slate-900 rounded-full flex items-start justify-end p-0.5 animate-pulse">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Rosy Cheeks */}
                <div className="flex items-center justify-between w-14 mb-1">
                  <div className="w-2 h-1 bg-rose-400/80 rounded-full blur-2xs"></div>
                  {/* Happy Smile */}
                  <div className="w-4 h-2 border-b-2 border-slate-900 rounded-full"></div>
                  <div className="w-2 h-1 bg-rose-400/80 rounded-full blur-2xs"></div>
                </div>

                {/* Discount Tag Swinging */}
                <div className="mt-1 px-2 py-0.5 rounded-full bg-amber-300 text-orange-900 text-[10px] font-black tracking-wider shadow-sm flex items-center gap-1 animate-tag-swing">
                  <span>%</span>
                  <span>OFERTA</span>
                </div>
              </div>
            </div>

            {/* Little bouncing feet */}
            <div className="flex items-center justify-center gap-6 -mt-1.5">
              <div className="w-4 h-2.5 bg-orange-700 rounded-full shadow-inner"></div>
              <div className="w-4 h-2.5 bg-orange-700 rounded-full shadow-inner"></div>
            </div>
          </div>

          {/* Dynamic Ground Shadow that expands & contracts with the bounce */}
          <div className="absolute bottom-2 w-20 h-3 bg-orange-950/15 rounded-full blur-xs animate-mascot-shadow"></div>
        </div>

        {/* Brand Name Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-black tracking-wide uppercase mb-3 shadow-xs">
          <ShoppingBag className="w-3.5 h-3.5 text-orange-600" />
          <span>Achados do Dia</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight mb-2">
          Quase pronto pra economizar!
        </h2>

        {/* Dynamic Tip Text with smooth fade */}
        <p className="text-xs sm:text-sm text-slate-500 font-medium min-h-[36px] flex items-center justify-center px-4 leading-relaxed transition-opacity duration-300">
          {tips[tipIndex]}
        </p>

        {/* Animated Progress Bar */}
        <div className="w-56 h-2 bg-orange-100 rounded-full overflow-hidden mt-3 mb-3 border border-orange-200/60 shadow-inner relative">
          <div className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 animate-progress-shimmer"></div>
        </div>

        {/* Security & Authenticity Trust badge */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium mt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Links oficiais e 100% seguros</span>
        </div>

        {/* Slow Internet Friendly Reassurance Message (only shows if loading takes > 2.8s) */}
        {isSlowInternet && (
          <div className="mt-4 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-300/40 text-amber-800 text-[11px] leading-snug flex items-center gap-2 animate-fadeIn">
            <span className="text-base shrink-0">📶</span>
            <span>Sua internet parece um pouco lenta hoje, mas já estamos finalizando tudo pra você!</span>
          </div>
        )}
      </div>
    </div>
  );
};
