import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#050b1a] text-white font-sans selection:bg-[#3bb1f9] selection:text-white overflow-x-hidden">
      {/* Background Gradients & Noise */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep background base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#0b1d3a] to-[#102f5e]" />
        
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }} 
        />
        
        {/* Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#3bb1f9] opacity-[0.08] blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-[#4f46e5] opacity-[0.1] blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Grid Overlay for "Dense" feel */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
    </div>
  );
};
