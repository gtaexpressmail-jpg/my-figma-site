import React, { useState } from "react";
import { TrendingUp, Users, MapPin, Calculator, Info, DollarSign, BarChart3, PieChart, Activity, Crosshair } from "lucide-react";

// Data
const cityData = [
  { id: "spb", name: "Санкт-Петербург", x: 20, y: 25, income: 200000, other: 75000, growth: 14, emp: 9 },
  { id: "msk", name: "Москва", x: 25, y: 40, income: 230000, other: 110000, growth: 15, emp: 10 },
  { id: "kzn", name: "Казань", x: 35, y: 45, income: 160000, other: 55000, growth: 13, emp: 8 },
  { id: "sam", name: "Самара", x: 32, y: 55, income: 140000, other: 50000, growth: 11, emp: 7 },
  { id: "krd", name: "Краснодар", x: 15, y: 75, income: 155000, other: 52000, growth: 12, emp: 8 },
  { id: "soc", name: "Сочи", x: 10, y: 85, income: 185000, other: 60000, growth: 16, emp: 11 },
  { id: "ekb", name: "Екатеринбург", x: 45, y: 50, income: 150000, other: 58000, growth: 12, emp: 7 },
  { id: "nsk", name: "Новосибирск", x: 65, y: 60, income: 137000, other: 54000, growth: 11, emp: 7 },
];

export const MarketAnalysis = () => {
  const [activeCity, setActiveCity] = useState(cityData[1]); // Moscow default

  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3bb1f9]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
               Аналитика доходов <br/>
               <span className="text-[#3bb1f9]">по городам</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
               Живая статистика рынка уличной фотографии в реальном времени.
            </p>
        </div>

        {/* MODERN MAP WIDGET */}
        <div className="relative rounded-2xl bg-[#0b1d3a]/40 border border-[#3bb1f9]/20 overflow-hidden backdrop-blur-sm max-w-5xl mx-auto shadow-2xl shadow-[#050b1a]/50">
             {/* Decorative HUD Elements */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3bb1f9]/50 to-transparent opacity-50" />
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />
             
             {/* Corner Accents */}
             <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-[#3bb1f9] rounded-tl-sm opacity-60" />
             <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-[#3bb1f9] rounded-tr-sm opacity-60" />
             <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-[#3bb1f9] rounded-bl-sm opacity-60" />
             <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-[#3bb1f9] rounded-br-sm opacity-60" />

             <div className="grid grid-cols-1 md:grid-cols-3 min-h-[400px]">
                
                {/* LIST / DATA PANEL (Left side) */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-white/5 bg-[#050b1a]/50 flex flex-col z-10 relative">
                   <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xs font-bold text-[#3bb1f9] uppercase tracking-widest flex items-center gap-2">
                         <Activity size={14} /> Live Monitor
                      </h3>
                      <div className="flex gap-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </div>
                   </div>
                   
                   <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar max-h-[250px] md:max-h-none">
                      {cityData.map(city => (
                         <button
                            key={city.id}
                            onClick={() => setActiveCity(city)}
                            onMouseEnter={() => setActiveCity(city)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex justify-between items-center group relative overflow-hidden ${
                               activeCity.id === city.id 
                               ? 'bg-[#3bb1f9]/10 text-white border border-[#3bb1f9]/30' 
                               : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'
                            }`}
                         >
                            {activeCity.id === city.id && (
                               <div className="absolute left-0 top-0 h-full w-[2px] bg-[#3bb1f9]" />
                            )}
                            <span className="font-medium">{city.name}</span>
                            <span className="text-xs font-mono opacity-50">{city.id.toUpperCase()}</span>
                         </button>
                      ))}
                   </div>

                   {/* Active City Stats Summary */}
                   <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                      <div>
                         <div className="text-[10px] uppercase text-white/30 mb-1">Средний доход (SNAPPH)</div>
                         <div className="text-2xl font-bold text-white tracking-tight flex items-baseline gap-2">
                            {activeCity.income.toLocaleString()} ₽
                            <span className="text-xs text-green-400 font-normal">+{activeCity.growth}%</span>
                         </div>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-[#3bb1f9] animate-pulse" style={{ width: `${(activeCity.income / 250000) * 100}%` }} />
                      </div>
                   </div>
                </div>

                {/* MAP VISUALIZATION (Right side) */}
                <div className="md:col-span-2 relative bg-[#050b1a] overflow-hidden group">
                   {/* Background Image */}
                   <div className="absolute inset-0 opacity-40 mix-blend-screen transition-transform duration-1000 group-hover:scale-105 pointer-events-none">
                       <img 
                         src="https://images.unsplash.com/photo-1720962158937-7ea890052166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjB3b3JsZCUyMG1hcCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDIyMjE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                         className="w-full h-full object-cover grayscale brightness-75"
                         alt="Map"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-[#050b1a]/50" />
                   </div>

                   {/* Grid Overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(59,177,249,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,177,249,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                   {/* Interactive Points */}
                   <div className="absolute inset-0 p-8 z-10">
                      <div className="relative w-full h-full">
                          {cityData.map((city) => (
                             <button
                                key={city.id}
                                onClick={() => setActiveCity(city)}
                                className={`absolute transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 group/point ${
                                   activeCity.id === city.id ? 'z-20' : 'z-10'
                                }`}
                                style={{ left: `${city.x}%`, top: `${city.y}%` }}
                             >
                                {/* Active State Ring */}
                                {activeCity.id === city.id && (
                                   <>
                                      <div className="absolute -inset-4 border border-[#3bb1f9]/30 rounded-full animate-ping" />
                                      <div className="absolute -inset-8 border border-[#3bb1f9]/10 rounded-full animate-[ping_2s_ease-out_infinite]" />
                                      <Crosshair className="absolute -top-6 -left-6 w-12 h-12 text-[#3bb1f9]/50 animate-[spin_10s_linear_infinite]" strokeWidth={1} />
                                   </>
                                )}
                                
                                {/* Dot */}
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                   activeCity.id === city.id 
                                   ? 'bg-[#3bb1f9] shadow-[0_0_15px_#3bb1f9] scale-125' 
                                   : 'bg-white/50 hover:bg-white scale-100 hover:scale-150'
                                }`} />
                             </button>
                          ))}
                      </div>
                   </div>

                   {/* Data Floating Card (Visual decor only for the active selection on map) */}
                   <div 
                      className="absolute z-30 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{ 
                         left: `${activeCity.x}%`, 
                         top: `${activeCity.y}%`,
                         transform: 'translate(30px, -40px)' 
                      }}
                   >
                      <div className="backdrop-blur-md bg-[#050b1a]/90 border border-[#3bb1f9]/30 px-4 py-2 rounded-lg shadow-xl">
                         <div className="flex items-center gap-3 mb-1">
                            <span className="text-white font-bold whitespace-nowrap">{activeCity.name}</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#3bb1f9]/20 text-[#3bb1f9] text-[10px] font-bold">TOP 5</span>
                         </div>
                         <div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
                            <span>GROWTH</span>
                            <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                               <div className="h-full bg-green-400" style={{ width: `${activeCity.growth * 5}%` }} />
                            </div>
                         </div>
                      </div>
                      {/* Connection Line */}
                      <svg className="absolute top-8 -left-8 w-8 h-8 pointer-events-none" style={{ transform: 'scaleY(-1)' }}>
                         <path d="M0,0 L15,15 L32,15" fill="none" stroke="#3bb1f9" strokeWidth="1" strokeOpacity="0.5" />
                         <circle cx="0" cy="0" r="1.5" fill="#3bb1f9" />
                      </svg>
                   </div>
                </div>
             </div>
        </div>

        {/* INFO CARDS (Kept as footer context) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
              { icon: TrendingUp, title: "Спрос растёт", text: "Уличная фотография становится новым трендом соцсетей." },
              { icon: DollarSign, title: "Ставки +20%", text: "За последние 12 месяцев стоимость сессии выросла." },
              { icon: MapPin, title: "Регионы догоняют", text: "Сочи и Казань показывают самый быстрый рост." }
           ].map((card, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0b1d3a]/20 hover:bg-[#0b1d3a]/40 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-[#3bb1f9]/10 flex items-center justify-center text-[#3bb1f9] flex-shrink-0">
                    <card.icon size={18} />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-white leading-tight mb-1">{card.title}</h4>
                    <p className="text-xs text-white/50">{card.text}</p>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};
