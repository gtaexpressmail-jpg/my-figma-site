import React from "react";
import { Send, Menu, Mic, Paperclip, BarChart3, Users, BookOpen, Shield } from "lucide-react";
import snapphLogo from "figma:asset/6af8b27706fc51a40186c4003c2ef2ee72755d8e.png";

export const TelegramSection = () => {
  return (
    <section id="telegram-section" className="relative py-24 px-4 overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3bb1f9] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Features Grid */}
          <div className="space-y-12">
             <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  Всё работает внутри <br />
                  <span className="text-[#3bb1f9]">Telegram</span>
                </h2>
                <p className="text-xl text-white/60">
                  Никаких сайтов. Никаких приложений. <br />
                  Удобный бот с полноценной системой для фотографа.
                </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                   { icon: BarChart3, label: "Дашборд доходов", desc: "Статистика в реальном времени" },
                   { icon: Users, label: "Чат с клиентом", desc: "Анонимное общение внутри бота" },
                   { icon: BookOpen, label: "База знаний", desc: "Гайды по уличной съемке" },
                   { icon: Shield, label: "Личный кабинет", desc: "Безопасный вывод средств" },
                ].map((item, i) => (
                   <div key={i} className="group p-6 rounded-2xl bg-[#0b1d3a]/50 border border-white/5 hover:border-[#3bb1f9]/30 transition-all hover:shadow-[0_0_30px_rgba(59,177,249,0.1)]">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                         <item.icon className="text-[#3bb1f9]" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                      <p className="text-sm text-white/40">{item.desc}</p>
                   </div>
                ))}
             </div>
          </div>

          {/* Right: Telegram Mockup */}
          <div className="relative flex justify-center lg:justify-end">
             <div className="relative w-[350px] h-[700px] rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#0f0f0f] shadow-2xl overflow-hidden">
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-8 bg-black flex justify-between px-6 items-center text-white text-[10px] font-bold z-20">
                   <span>9:41</span>
                   <div className="flex gap-1">
                      <div className="w-3 h-3 bg-white rounded-full" />
                      <div className="w-3 h-3 bg-white rounded-full" />
                   </div>
                </div>

                {/* Telegram Header */}
                <div className="absolute top-8 w-full bg-[#1c2c44] p-3 flex items-center gap-3 z-10 border-b border-black/20">
                   <div className="w-8 h-8 rounded-full bg-[#3bb1f9] flex items-center justify-center overflow-hidden">
                      <img src={snapphLogo} alt="Logo" className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1">
                      <div className="text-white font-bold text-sm">SNAPPH Bot</div>
                      <div className="text-[#3bb1f9] text-xs">bot</div>
                   </div>
                </div>

                {/* Chat Area */}
                <div className="absolute inset-0 pt-24 pb-20 px-3 bg-[#0e1621] space-y-4 overflow-y-auto custom-scrollbar">
                   {/* Date Divider */}
                   <div className="flex justify-center"><span className="bg-black/20 text-white/40 text-[10px] px-2 py-1 rounded-full">Today</span></div>
                   
                   {/* Bot Message (Dashboard) */}
                   <div className="flex flex-col gap-1 items-start max-w-[85%]">
                      <div className="bg-[#182533] p-3 rounded-xl rounded-tl-none border border-white/5 shadow-md w-full">
                         <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                            <span className="text-[#3bb1f9] font-bold text-sm">💰 Balance Update</span>
                         </div>
                         <div className="space-y-2">
                            <div className="flex justify-between text-white text-sm">
                               <span>Новая продажа</span>
                               <span className="font-bold">+ 3,500 ₽</span>
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                               <div className="h-full bg-[#3bb1f9] w-[70%]" />
                            </div>
                            <div className="text-white/40 text-xs mt-1">Всего: 5,000 ₽</div>
                         </div>
                         <div className="mt-3 grid grid-cols-2 gap-2">
                            <button className="bg-[#2b5278] text-white text-xs py-2 rounded text-center">История</button>
                            <button className="bg-[#2b5278] text-white text-xs py-2 rounded text-center">Вывести</button>
                         </div>
                      </div>
                      <span className="text-white/20 text-[10px] ml-2">10:02 AM</span>
                   </div>

                   {/* User Message - Files */}
                   <div className="flex flex-col gap-1 items-end self-end w-full max-w-[85%]">
                      <div className="bg-[#2b5278] p-2 rounded-xl rounded-tr-sm shadow-md flex items-center gap-3 w-full border border-white/5">
                         <div className="w-10 h-10 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1705892751351-496e1217a59e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHVyYmFuJTIwdG9reW8lMjBuaWdodHxlbnwxfHx8fDE3Njk5NzI2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'}} />
                         <div className="flex-1 overflow-hidden min-w-0">
                            <div className="text-white text-xs font-medium truncate">IMG_8291.RAW</div>
                            <div className="text-[#3bb1f9] text-[10px]">24.5 MB</div>
                         </div>
                      </div>
                      <div className="bg-[#2b5278] p-2 rounded-xl rounded-tr-none shadow-md flex items-center gap-3 w-full border border-white/5">
                         <div className="w-10 h-10 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1645161776176-366e9360fa94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMG5lb24lMjByYWlufGVufDF8fHx8MTc2OTk3MjY5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'}} />
                         <div className="flex-1 overflow-hidden min-w-0">
                            <div className="text-white text-xs font-medium truncate">IMG_8292.RAW</div>
                            <div className="text-[#3bb1f9] text-[10px]">25.1 MB</div>
                         </div>
                      </div>
                      <span className="text-white/20 text-[10px] mr-2">10:05 AM</span>
                   </div>

                   {/* Bot Notification */}
                   <div className="flex flex-col gap-1 items-start max-w-[85%]">
                      <div className="bg-[#182533] p-3 rounded-xl rounded-tl-none border border-white/5 shadow-md w-full">
                         <div className="flex gap-3">
                            <div className="w-12 h-12 rounded bg-gray-800 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1764679396903-beb53aed4c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kaWQlMjBzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHVyYmFuJTIwbmVvbiUyMG5pZ2h0fGVufDF8fHx8MTc2OTk2MzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'}} />
                            <div>
                               <div className="text-white text-sm font-bold">Фотографии успешно загружены</div>
                               <div className="text-white/50 text-xs">Уже доступны для продажи. Покупатель уведомлён.</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Input Area */}
                <div className="absolute bottom-0 w-full bg-[#1c2c44] h-16 flex items-center px-4 gap-3 border-t border-black/20">
                   <div className="p-2 text-white/40"><Paperclip size={20} /></div>
                   <div className="flex-1 h-9 bg-[#0e1621] rounded-full px-4 flex items-center text-white/30 text-sm">Message...</div>
                   <div className="p-2 text-[#3bb1f9]"><Mic size={20} /></div>
                </div>

                {/* Floating "Menu" Button */}
                <div className="absolute bottom-20 right-4 w-12 h-12 bg-[#3bb1f9] rounded-full flex items-center justify-center shadow-lg text-white">
                   <Menu size={24} />
                </div>
             </div>
             
             {/* Decorative Elements around Mockup */}
             <div 
               className="absolute -right-8 top-1/3 glass-card p-4 rounded-xl border border-white/10 bg-[#0b1d3a]/80 backdrop-blur-md shadow-2xl z-30"
             >
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <div className="font-bold text-white">Bot Active</div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};
