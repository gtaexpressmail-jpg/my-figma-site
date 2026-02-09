import React, { useState } from "react";
import { Camera, CreditCard, MessageCircle, TrendingUp, Users, Target, ShieldCheck, Search } from "lucide-react";
import problemImage from "figma:asset/a7a6bcc2d16dcc482855221baf2d018cc619a6c3.png";
import solutionImage from "figma:asset/03e216eb5c45f445ad2dae579aca2b2d719bf16c.png";
import logoImage from "figma:asset/410aa57cffd2778299ace016857810f235a45487.png";

const tabs = [
  { id: "problem", label: "Проблема" },
  { id: "solution", label: "Решение" },
  { id: "telegram", label: "Telegram" },
  { id: "income", label: "Доход" },
];

export const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <section className="w-full py-20 px-4 md:px-12 relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Floating Navigation */}
        <div className="flex justify-center mb-16 sticky top-8 z-50">
          <div className="bg-[#0b1d3a]/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex gap-1 shadow-2xl overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab.id ? "text-[#050b1a]" : "text-white/60 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <div
                    className="absolute inset-0 bg-[#3bb1f9] rounded-xl"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[500px] relative">
            
            {/* PROBLEM TAB */}
            {activeTab === "problem" && (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">
                    80% фотографов уходят не из-за камеры.
                  </h2>
                  <p className="text-xl text-white/60">
                    А из-за продаж, переговоров и бесконечных просьб скинуть "исходники". Творчество умирает в рутине.
                  </p>
                  
                  <div className="grid gap-4 mt-8">
                    {[
                      { icon: Search, title: "Поиск клиентов", text: "Холодные звонки, спам в директ" },
                      { icon: MessageCircle, title: "Переговоры", text: "Убеждение, торги" },
                      { icon: CreditCard, title: "Выбивание оплаты", text: "Ожидание переводов неделями" }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{item.title}</h4>
                          <p className="text-sm text-white/50">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-[#050b1a] group">
                   <img 
                     src={problemImage} 
                     alt="Problem Chaos" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            )}

            {/* SOLUTION TAB */}
            {activeTab === "solution" && (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                 <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-[#3bb1f9]/30 bg-[#050b1a] order-2 md:order-1 group">
                    <img 
                      src={solutionImage}
                      alt="Solution Happy Mascot"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-transparent opacity-40" />
                    
                    <div className="absolute bottom-8 left-8 right-8">
                       <div className="glass-card p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full border-2 border-[#3bb1f9] bg-white flex items-center justify-center overflow-hidden">
                                <img src={logoImage} alt="Logo" className="w-full h-full object-contain p-0.5" />
                             </div>
                             <div>
                                <div className="text-xs text-[#3bb1f9]">Продано только что</div>
                                <div className="text-white font-bold">1500 ₽</div>
                             </div>
                          </div>
                          <div className="px-3 py-1 rounded bg-[#3bb1f9]/20 text-[#3bb1f9] text-xs font-bold">ОПЛАЧЕНО</div>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-8 order-1 md:order-2">
                    <h2 className="text-5xl font-bold leading-tight">
                      Ты не продаёшь. <br />
                      <span className="text-[#3bb1f9]">Ты создаёшь.</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { title: "Ты фотографируешь", sub: "Просто лови момент" },
                         { title: "Клиент получает", sub: "Автоматическое превью" },
                         { title: "Платит если нравится", sub: "Без давления" },
                         { title: "Деньги у тебя", sub: "Моментальный вывод" }
                       ].map((card, i) => (
                         <div 
                            key={i} 
                            className="p-6 rounded-2xl bg-[#0b1d3a] border border-white/5 hover:border-[#3bb1f9]/50 transition-colors group"
                         >
                            <div className="w-2 h-2 rounded-full bg-[#3bb1f9] mb-4 group-hover:scale-150 transition-transform" />
                            <h3 className="text-white font-bold mb-1">{card.title}</h3>
                            <p className="text-sm text-white/40">{card.sub}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}

            {/* TELEGRAM & INCOME TABS */}
            {(activeTab === "telegram" || activeTab === "income") && (
              <div
                className="flex flex-col items-center justify-center py-20 text-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <div className="w-20 h-20 rounded-full bg-[#3bb1f9]/10 flex items-center justify-center mb-6">
                  {activeTab === "telegram" ? <MessageCircle size={40} className="text-[#3bb1f9]" /> : <TrendingUp size={40} className="text-[#3bb1f9]" />}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {activeTab === "telegram" ? "Экосистема в твоём кармане" : "Экономика нового уровня"}
                </h3>
                <p className="max-w-md text-white/50 mb-8">
                  Подробный обзор функционала смотрите в следующих блоках лендинга.
                </p>
                <button onClick={() => {
                   const el = document.getElementById(activeTab === "telegram" ? "telegram-section" : "economics-section");
                   el?.scrollIntoView({ behavior: 'smooth' });
                }} className="px-6 py-2 rounded-full border border-[#3bb1f9] text-[#3bb1f9] hover:bg-[#3bb1f9] hover:text-[#050b1a] transition-colors">
                  Смотреть детали ↓
                </button>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};
