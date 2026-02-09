import React from "react";
import { Star, TrendingUp, Award, CheckCircle } from "lucide-react";
import { MarketAnalysis } from "./MarketAnalysis";
import alexKAvatar from "figma:asset/85f7ec9374319893222ae385f012b4b76fd34dbb.png";
import commAvatar1 from "figma:asset/595e9508fa3f743a3bf5142ac42dfd1e496f61bc.png";
import commAvatar2 from "figma:asset/1a9994f014264127c6e32e99750af965c252dbb7.png";
import commAvatar3 from "figma:asset/7295edd9fbddf18553f9b9302f5239a37d4e02d6.png";

export const EconomicsAndGamification = () => {
  return (
    <div id="economics-section" className="space-y-32 py-20">
      
      {/* ECONOMICS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl bg-[#0b1d3a]/30 border border-white/5 p-8 md:p-16 overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3bb1f9 1px, transparent 1px), linear-gradient(90deg, #3bb1f9 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-8">
                   Твой доход <br />
                   <span className="text-[#3bb1f9]">не ограничен.</span>
                 </h2>
                 <div className="space-y-6">
                    <div className="flex items-end gap-4">
                       <span className="text-6xl font-bold text-white tracking-tighter">15 000 ₽</span>
                       <span className="text-xl text-white/50 mb-2">/ в день</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full max-w-sm overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-[#3bb1f9] to-blue-600 w-[85%]"
                       />
                    </div>
                    <p className="text-white/60">
                      Цена фотосессии продолжительностью 10–30 минут варьируется от 700 до 2500 ₽. <br/>
                      Снимая 2-4 часа в день, ты выходишь на уровень зарплаты Senior IT специалиста.
                    </p>
                 </div>
              </div>

              {/* Chart Visualization */}
              <div className="h-[300px] flex items-end gap-4 px-4 pb-4 border-b border-l border-white/10 relative">
                 {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
                    <div 
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-[#3bb1f9]/20 hover:bg-[#3bb1f9] transition-colors rounded-t-sm relative group"
                    >
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {h * 150}₽
                       </div>
                    </div>
                 ))}
                 <div className="absolute top-4 right-4 text-[#3bb1f9] flex items-center gap-2">
                    <TrendingUp size={20} />
                    <span className="font-bold">Рост на 124%</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* GAMIFICATION */}
      <section className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Система уровней</h2>
            <p className="text-white/50">Активная съёмка открывает новые возможности и повышает рейтинг.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: "Новичок", color: "text-green-400", bg: "bg-green-500", progress: 30, features: ["Базовая комиссия", "Доступ к чату", "Если всего было не более 10 продаж"] },
              { level: "Опытный", color: "text-[#3bb1f9]", bg: "bg-[#3bb1f9]", progress: 60, features: ["Базовая комиссия", "Приоритетная модерация", "10 - 200 продаж"] },
              { level: "Мозг сети", color: "text-pink-400", bg: "bg-pink-500", progress: 100, features: ["Возможность управлять собственной командой", "Доход в виде процента с каждой продажи фотографов", "Доступ к аналитике и технической поддержке"] },
            ].map((card, i) => (
               <div key={i} className="relative group p-8 rounded-3xl bg-[#0b1d3a] border border-white/5 hover:border-white/10 transition-all overflow-hidden hover:-translate-y-2 duration-300">
                  <div className={`absolute top-0 left-0 w-full h-1 ${card.bg} opacity-50`} />
                  
                  <div className="flex justify-between items-start mb-8">
                     <div>
                        <div className={`text-sm font-bold uppercase tracking-widest ${card.color} mb-1`}>Level {i === 2 ? 4 : i + 1}</div>
                        <h3 className="text-3xl font-bold text-white">{card.level}</h3>
                     </div>
                     <div className={`w-12 h-12 rounded-full ${card.bg} bg-opacity-20 flex items-center justify-center`}>
                        <Award className={`w-6 h-6 ${card.color}`} />
                     </div>
                  </div>

                  <div className="space-y-4 mb-8">
                     {card.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-white/70">
                           <CheckCircle size={16} className={card.color} />
                           {feat}
                        </div>
                     ))}
                  </div>

                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                     <div className={`h-full ${card.bg}`} style={{ width: `${card.progress}%` }} />
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b1d3a] border border-white/10 text-sm font-medium text-white/60 hover:border-[#3bb1f9]/50 hover:text-white transition-all cursor-pointer group">
               <span className="group-hover:scale-110 transition-transform">✨</span> И другие статусы, доступные в боте
            </div>
         </div>
      </section>

      {/* MARKET ANALYSIS */}
      <MarketAnalysis />

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-md">
               <div className="flex items-center gap-4 mb-6">
                  <img src={alexKAvatar} className="w-16 h-16 rounded-full object-cover border-2 border-[#3bb1f9]" alt="Alex K." />
                  <div>
                     <div className="text-white font-bold text-lg">Alex K.</div>
                     <div className="text-[#3bb1f9] text-sm">Опытный</div>
                  </div>
               </div>
               <p className="text-xl italic text-white/80 leading-relaxed">
                  "Я думал, что уличная фотография — просто хобби. SNAPPH показал, что на этом можно реально зарабатывать. За прошлый месяц я заработал больше, чем в офисе."
               </p>
               <div className="flex gap-1 mt-6 text-[#3bb1f9]">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
               </div>
            </div>
            
            <div className="flex flex-col justify-center items-start space-y-6 pl-0 md:pl-12">
               <h3 className="text-4xl font-bold">Сообщество фотографов</h3>
               <p className="text-white/60 text-lg">Присоединяйся к сотням фотографов по всей России, которые уже зарабатывают прямо сейчас.</p>
               <div className="flex -space-x-4">
                  <img src={commAvatar1} className="w-12 h-12 rounded-full border-2 border-[#050b1a] object-cover" alt="Member 1" />
                  <img src={commAvatar2} className="w-12 h-12 rounded-full border-2 border-[#050b1a] object-cover" alt="Member 2" />
                  <img src={commAvatar3} className="w-12 h-12 rounded-full border-2 border-[#050b1a] object-cover" alt="Member 3" />
                  <div className="w-12 h-12 rounded-full border-2 border-[#050b1a] bg-white/10 flex items-center justify-center text-xs font-bold backdrop-blur-md">
                     +100
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};
