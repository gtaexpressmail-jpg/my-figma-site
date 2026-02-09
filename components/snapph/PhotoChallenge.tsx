import React from "react";
import { Camera, Clock, Trophy, Upload, ArrowRight, Heart, Gift, Award, Zap } from "lucide-react";

export const PhotoChallenge = () => {
  return (
    <div id="challenges-section" className="w-full py-20 relative overflow-hidden bg-[#050b1a] min-h-screen">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#3bb1f9]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-32">
        
        {/* HEADER & HERO */}
        <section>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3bb1f9]/30 bg-[#3bb1f9]/10 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#3bb1f9]" />
                <span className="text-xs font-semibold tracking-wide text-[#3bb1f9] uppercase">Фото-челлендж дня</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Каждый день — <span className="text-[#3bb1f9]">новая тема.</span>
             </h2>
             <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Снимай, участвуй, зарабатывай, прокачивайся.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
             <div className="space-y-8 order-2 lg:order-1">
                <div>
                   <div className="text-sm font-bold text-[#3bb1f9] mb-2 flex items-center gap-2">
                      <Clock size={16} /> Осталось: 14:23:05
                   </div>
                   <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                      "Движение города"
                   </h3>
                   <p className="text-lg text-white/60 leading-relaxed">
                      Поймай момент городской жизни: эмоции, люди, движение, ритм мегаполиса. Покажи, как дышит город.
                   </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                   <button className="px-8 py-4 rounded-xl bg-[#3bb1f9] text-[#050b1a] font-bold text-lg hover:shadow-[0_0_30px_rgba(59,177,249,0.4)] transition-all">
                      Участвовать сейчас
                   </button>
                   <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg transition-all">
                      Смотреть примеры
                   </button>
                </div>

                <div className="flex items-center gap-4 text-sm text-white/40">
                   <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050b1a] bg-white/10" />
                      ))}
                   </div>
                   <span>+1,204 участника сегодня</span>
                </div>
             </div>

             <div className="relative order-1 lg:order-2 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                   <img 
                      src="https://images.unsplash.com/photo-1761774958099-247c52665097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMG1vdGlvbiUyMGJsdXIlMjBzdHJlZXQlMjBwaG90b2dyYXBoeSUyMGNpdHl8ZW58MXx8fHwxNzcwMjIxMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                      alt="Challenge Preview" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] to-transparent opacity-60" />
                   
                   <div className="absolute top-4 right-4 bg-[#050b1a]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-bold text-white">LIVE</span>
                   </div>

                   <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-white font-bold text-xl mb-1">Призовой фонд</div>
                      <div className="flex items-baseline gap-2">
                         <span className="text-3xl font-bold text-[#3bb1f9]">15 000 ₽</span>
                         <span className="text-sm text-white/50">распределяется между победителями</span>
                      </div>
                   </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-white/5 bg-[#0b1d3a]/30" />
             </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section>
           <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Как это работает</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                 { icon: Zap, title: "Получаешь тему", desc: "Каждое утро в 10:00" },
                 { icon: Camera, title: "Делаешь фото", desc: "Снимай на что угодно" },
                 { icon: Upload, title: "Загружаешь", desc: "Перейди во вкладку «Челленджи» в официальном чате TG и загрузи туда контент." },
                 { icon: Gift, title: "Получаешь бонус", desc: "Дождись подведения итогов и получи свои призы!" },
              ].map((step, i) => (
                 <div key={i} className="p-6 rounded-2xl bg-[#0b1d3a]/40 border border-white/5 flex flex-col items-start gap-4 hover:border-[#3bb1f9]/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-[#3bb1f9]">
                       <step.icon size={24} />
                    </div>
                    <div>
                       <div className="text-white/20 font-bold text-xs mb-1">ШАГ 0{i+1}</div>
                       <h4 className="text-lg font-bold text-white">{step.title}</h4>
                       <p className="text-sm text-white/50">{step.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* PRIZES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="col-span-1 md:col-span-3 mb-4">
              <h3 className="text-2xl font-bold text-center md:text-left">Призы и бонусы</h3>
           </div>
           
           {/* 1st Place */}
           <div className="p-8 rounded-2xl bg-gradient-to-br from-[#3bb1f9]/20 to-[#0b1d3a] border border-[#3bb1f9]/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Trophy size={120} />
              </div>
              <div className="relative z-10">
                 <div className="text-[#3bb1f9] font-bold text-lg mb-2">🥇 1 место</div>
                 <div className="text-4xl font-bold text-white mb-4">2 000 ₽</div>
                 <div className="flex items-center gap-2 text-sm text-white/80 bg-white/10 w-fit px-3 py-1 rounded-full">
                    <Award size={14} /> + PRO-бейдж на неделю
                 </div>
              </div>
           </div>

           {/* 2nd-3rd Place */}
           <div className="p-8 rounded-2xl bg-[#0b1d3a] border border-white/10 relative overflow-hidden">
              <div className="relative z-10">
                 <div className="text-white/60 font-bold text-lg mb-2">🥈 2–3 место</div>
                 <div className="text-3xl font-bold text-white mb-4">1 000 ₽</div>
                 <div className="text-sm text-white/50">
                    + Повышенный коэффициент показов
                 </div>
              </div>
           </div>

           {/* Top 10 */}
           <div className="p-8 rounded-2xl bg-[#0b1d3a] border border-white/10 relative overflow-hidden">
              <div className="relative z-10">
                 <div className="text-white/60 font-bold text-lg mb-2">🔥 Топ 10</div>
                 <div className="text-3xl font-bold text-white mb-4">+ Рейтинг</div>
                 <div className="text-sm text-white/50">
                    Попадание в еженедельную подборку
                 </div>
              </div>
           </div>
        </section>

        {/* BEST WORKS GALLERY */}
        <section>
           <div className="flex justify-between items-end mb-8">
              <h3 className="text-2xl font-bold">Лучшие работы вчера</h3>
              <a href="#" className="text-[#3bb1f9] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                 Вся галерея <ArrowRight size={16} />
              </a>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                 { 
                    img: "https://images.unsplash.com/photo-1680347955968-d6634c67f036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0JTIwdXJiYW58ZW58MXx8fHwxNzcwMjIxMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    author: "Elena M.",
                    city: "Moscow",
                    likes: 245
                 },
                 { 
                    img: "https://images.unsplash.com/photo-1668444264408-09676466c7e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbmlnaHQlMjBjaXR5JTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwMjIxMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    author: "Dmitry K.",
                    city: "St. Petersburg",
                    likes: 189
                 },
                 { 
                    img: "https://images.unsplash.com/photo-1637214270459-0129f5654d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHklMjBzaGFkb3dzfGVufDF8fHx8MTc3MDIyMTI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    author: "Alex R.",
                    city: "Kazan",
                    likes: 312
                 }
              ].map((card, i) => (
                 <div key={i} className="group relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden cursor-pointer">
                    <img src={card.img} alt="Best Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                       <div className="flex justify-between items-end">
                          <div>
                             <div className="text-white font-bold">{card.author}</div>
                             <div className="text-white/50 text-xs">{card.city}</div>
                          </div>
                          <div className="flex items-center gap-1 text-white/80 text-sm">
                             <Heart size={14} className="fill-white" /> {card.likes}
                          </div>
                       </div>
                       <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#3bb1f9] font-bold">
                          <span>Открыть в Telegram</span>
                          <Zap size={12} />
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* MOTIVATION */}
        <section className="relative rounded-3xl bg-gradient-to-r from-[#0b1d3a] to-[#050b1a] border border-white/5 p-8 md:p-16 text-center overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 Челленджи — это не конкурс. <br />
                 <span className="text-white/50">Это ежедневная тренировка твоего взгляда.</span>
              </h2>
              <p className="text-[#3bb1f9] text-xl font-medium">
                 SNAPPH превращает навык в доход.
              </p>
           </div>
           
           {/* Abstract BG Shapes */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#3bb1f9]/5 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        </section>

      </div>
    </div>
  );
};
