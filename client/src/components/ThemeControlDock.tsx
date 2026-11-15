import React, { useState, useEffect } from 'react';
import { Sparkles, Sliders, Zap, X } from 'lucide-react';
import type { ColorTheme } from './ThreeBackground';

interface ThemeControlDockProps {
  currentTheme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  speed: number;
  setSpeed: (speed: number) => void;
}

export const ThemeControlDock: React.FC<ThemeControlDockProps> = ({
  currentTheme,
  setTheme,
  speed,
  setSpeed,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close panel on escape or scroll on small devices so it never blocks content
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 640 && isOpen) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const themeOptions: { id: ColorTheme; name: string; color: string; border: string; glow: string }[] = [
    {
      id: 'cyan',
      name: 'Deep Teal',
      color: 'from-cyan-400 to-blue-500',
      border: 'border-cyan-400',
      glow: 'shadow-[0_0_15px_rgba(79,209,192,0.4)]',
    },
    {
      id: 'amber',
      name: 'Coral Dusk',
      color: 'from-amber-400 to-orange-500',
      border: 'border-amber-400',
      glow: 'shadow-[0_0_15px_rgba(255,149,128,0.4)]',
    },
    {
      id: 'emerald',
      name: 'Sage Aurora',
      color: 'from-emerald-400 to-teal-500',
      border: 'border-emerald-400',
      glow: 'shadow-[0_0_15px_rgba(147,221,185,0.4)]',
    },
  ];

  return (
    <div className="fixed bottom-3.5 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 select-none">
      {isOpen && (
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-3 w-[calc(100vw-2rem)] max-w-[270px] shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200 border border-white/20 bg-slate-950/90 backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              3D Environment
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition"
              aria-label="Close 3D Controls"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Selector */}
          <div>
            <label className="text-[11px] text-slate-400 font-medium block mb-1.5">Color Atmosphere</label>
            <div className="grid grid-cols-3 gap-1.5">
              {themeOptions.map((t) => {
                const isActive = currentTheme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`text-[10px] font-medium py-2 px-1.5 rounded-xl transition-all duration-200 flex flex-col items-center gap-1 border active:scale-95 cursor-pointer ${
                      isActive
                        ? `${t.border} bg-white/20 text-white ${t.glow}`
                        : 'border-white/10 bg-slate-900/60 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${t.color}`} />
                    <span className="truncate w-full text-center">{t.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Speed Control */}
          <div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium mb-1.5">
              <span>Orbital Speed</span>
              <span className="text-white font-mono">{speed}x</span>
            </div>
            <div className="flex gap-1.5">
              {[0.5, 1, 2].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`flex-1 text-[11px] py-1.5 rounded-lg transition border active:scale-95 cursor-pointer ${
                    speed === s
                      ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-slate-900/40 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>

          <div className="text-[10px] text-slate-400 bg-slate-900/60 p-2 rounded-lg border border-white/5 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Tap or drag screen to pulse 3D shockwaves</span>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-pill px-3.5 sm:px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-cyan-400/60 transition-all duration-300 shadow-xl group hover:shadow-[0_0_20px_rgba(79,209,192,0.3)] active:scale-95 min-h-[42px] cursor-pointer bg-slate-950/80 backdrop-blur-xl border border-white/20"
        title="Customize 3D Graphics"
        aria-label="Toggle 3D Controls"
      >
        <div className="relative">
          <Sliders className="w-4 h-4 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div>
        <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition">
          {isOpen ? 'Close Controls' : '3D Controls'}
        </span>
      </button>
    </div>
  );
};
export default ThemeControlDock;
