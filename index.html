import React, { useState, useEffect } from "react";
import { Layout } from "./components/snapph/Layout";
import { Hero } from "./components/snapph/Hero";
import { FeatureTabs } from "./components/snapph/TabsSection";
import { TelegramSection } from "./components/snapph/TelegramSection";
import { EconomicsAndGamification } from "./components/snapph/Economics";
import { PhotoChallenge } from "./components/snapph/PhotoChallenge";
import { ArrowRight } from "lucide-react";
import logoImg from "figma:asset/aa9e66faae6808f5dd04b96c49227bfcf566f1a0.png";

type PageType = 'home' | 'challenges';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const scrollTo = (id: string) => {
    // If we are not on home page, switch to home first
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Use setTimeout to allow render cycle to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToChallenges = () => {
    setCurrentPage('challenges');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-[#050b1a]/50 border-b border-white/5">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={navigateToHome}
        >
           <img src={logoImg} className="h-8 w-auto" alt="SNAPPH Logo" />
           <div className="text-2xl font-bold tracking-tighter text-white">
             SNAPPH<span className="text-[#3bb1f9]">.</span>
           </div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          <button 
            onClick={navigateToHome} 
            className={`hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer ${currentPage === 'home' ? 'text-white' : ''}`}
          >
            Главная
          </button>
          <button 
            onClick={() => scrollTo('telegram-section')} 
            className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Как это работает
          </button>
          <button 
            onClick={navigateToChallenges} 
            className={`hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer ${currentPage === 'challenges' ? 'text-white text-[#3bb1f9]' : ''}`}
          >
            Челленджи
          </button>
          <button 
            onClick={() => scrollTo('economics-section')} 
            className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Доход
          </button>
        </div>
        <button className="text-white/70 hover:text-[#3bb1f9] transition-colors">
           <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
           >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
           </svg>
        </button>
      </nav>

      <main className="min-h-screen pt-20">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <FeatureTabs />
            <TelegramSection />
            {/* Removed PhotoChallenge from here */}
            <EconomicsAndGamification />
            
            {/* FINAL CTA - Only shown on Home Page */}
            <section className="relative py-32 px-4 flex flex-col items-center text-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-[#3bb1f9]/20 to-transparent pointer-events-none" />
               <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3bb1f9] to-transparent" />
               
               <h2 className="text-5xl md:text-7xl font-bold mb-8 relative z-10">
                  Стань уличным фотографом <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3bb1f9] to-blue-400">
                     нового поколения
                  </span>
               </h2>
               
               <button className="relative px-10 py-5 rounded-2xl bg-[#3bb1f9] text-[#050b1a] font-bold text-xl shadow-[0_0_50px_rgba(59,177,249,0.4)] hover:shadow-[0_0_80px_rgba(59,177,249,0.6)] hover:scale-105 transition-all duration-300 group z-10">
                  <span className="flex items-center gap-3">
                     Стать фотографом <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
               </button>
               
               <p className="mt-8 text-white/40 text-sm">
                  Бесплатная регистрация. Никаких скрытых комиссий.
               </p>
            </section>
          </>
        ) : (
          <PhotoChallenge />
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050b1a] py-16 px-4 md:px-12">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold tracking-tighter text-white">
               SNAPPH<span className="text-[#3bb1f9]">.</span>
            </div>
            
            <div className="text-white/40 text-sm">
               © 2026 SNAPPH Inc. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
               <a href="mailto:infosnapph@gmail.com" className="text-white/40 hover:text-[#3bb1f9] transition-colors text-sm font-medium">
                  infosnapph@gmail.com
               </a>
               <a href="#" className="text-white/40 hover:text-[#3bb1f9] transition-colors">
                  <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     width="20" 
                     height="20" 
                     viewBox="0 0 24 24" 
                     fill="none" 
                     stroke="currentColor" 
                     strokeWidth="2" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                  >
                     <line x1="22" y1="2" x2="11" y2="13"></line>
                     <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
               </a>
            </div>
         </div>
      </footer>
    </Layout>
  );
}
