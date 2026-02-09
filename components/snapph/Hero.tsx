import React from "react";
import { ArrowRight, Zap, Camera } from "lucide-react";
import characterImg from "figma:asset/4b61a9f986a7a2feb87ab8c9322d8f70df9e8f23.png";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 relative z-20">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3bb1f9]/30 bg-[#3bb1f9]/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#3bb1f9]" />
            <span className="text-xs font-semibold tracking-wide text-[#3bb1f9] uppercase">Новая современная платформа для фотографов</span>
          </div>

          <h1 
            className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight"
          >
            Зарабатывай <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              на фотографии
            </span>
            <br />
            <span className="text-[#3bb1f9] drop-shadow-[0_0_20px_rgba(59,177,249,0.4)]">
              просто выходя на улицу.
            </span>
          </h1>

          <p 
            className="text-lg md:text-xl text-blue-100/60 max-w-lg leading-relaxed font-light"
          >
            <span className="text-white font-medium">SNAPPH</span> — платформа, которая превращает уличные фото в деньги. 
            Ты снимаешь — мы продаём, доставляем и принимаем оплату.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="group relative px-8 py-4 rounded-xl bg-[#3bb1f9] text-[#050b1a] font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(59,177,249,0.5)]">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Начать зарабатывать <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Content - Mascot & Mockup Composition */}
        <div 
          className="relative z-10 flex flex-col items-center lg:items-end"
        >
          {/* Mascot Image - Floating above/integrated */}
          <div
            className="relative z-20 w-[280px] md:w-[350px] lg:w-[400px] -mb-20 lg:-mr-10 lg:-mb-24 drop-shadow-[0_0_50px_rgba(59,177,249,0.3)]"
          >
             <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
               <img src={characterImg} alt="Snapph Mascot" className="w-full h-full object-cover" />
               
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
             </div>
          </div>

          {/* Background Interface Elements */}
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-4 shadow-2xl overflow-hidden -z-10 mt-8 lg:mt-0">
             {/* Decorative Grid inside mockup */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#3bb1f9 1px, transparent 1px), linear-gradient(90deg, #3bb1f9 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

             {/* UI Mockup Elements */}
             <div className="relative h-full flex flex-col gap-4 pt-12 lg:pt-20">
                {/* Header */}
                <div className="h-12 w-full rounded-lg bg-white/5 border border-white/10 flex items-center px-4 justify-between">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   </div>
                   <div className="h-2 w-20 rounded-full bg-white/10" />
                </div>

                {/* Main Body */}
                <div className="flex-1 flex gap-4">
                   {/* Sidebar */}
                   <div className="w-16 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center py-4 gap-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 ? 'bg-[#3bb1f9] shadow-[0_0_15px_rgba(59,177,249,0.4)]' : 'bg-white/10'}`} />
                      ))}
                   </div>
                   
                   {/* Dashboard Content */}
                   <div className="flex-1 rounded-lg bg-[#050b1a]/50 border border-white/10 p-6 flex flex-col gap-6 relative overflow-hidden">
                      {/* Floating Chart Line */}
                      <svg className="absolute bottom-0 left-0 w-full h-32 opacity-30" preserveAspectRatio="none">
                        <path d="M0,100 Q50,50 100,80 T200,40 T300,60 T400,20 V128 H0 Z" fill="url(#gradient)" />
                        <defs>
                          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3bb1f9" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <div className="flex justify-between items-end">
                         <div>
                            <div className="text-xs text-white/40 uppercase tracking-widest">Общий доход</div>
                            <div className="text-3xl font-bold text-white mt-1">₽10,240</div>
                         </div>
                         <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono">+12.4%</div>
                      </div>

                      <div className="grid grid-cols-1 gap-2 mt-2 pt-4 border-t border-white/5 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/50">🆔 Nickname:</span>
                            <span className="text-xs font-bold text-white">Фотограф</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/50">🔖 Статус:</span>
                            <span className="text-xs font-bold text-[#d8b4fe] shadow-[0_0_10px_rgba(168,85,247,0.3)] px-2 py-0.5 rounded-full bg-purple-500/10">🟣 Старший фотограф</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/50">⭐ Рейтинг:</span>
                            <span className="text-xs font-bold text-yellow-400">110</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/50">📊 Продажи за сегодня:</span>
                            <span className="text-xs font-bold text-white">24</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/50">📈 Общие продажи:</span>
                            <span className="text-xs font-bold text-white">221</span>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Floating UI Elements Parallax */}
          <div 
            className="absolute -right-8 bottom-20 w-48 p-4 rounded-xl bg-[#0b1d3a]/90 backdrop-blur-xl border border-white/10 shadow-xl z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3bb1f9] to-blue-600 flex items-center justify-center text-white font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50">Новая продажа</div>
                <div className="text-sm font-bold text-white">+ 2,500 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
