import React, { useState } from 'react';
import { Sparkles, Sliders, Zap } from 'lucide-react';
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

  const themeOptions: { id: ColorTheme; name: string; color: string; border: string; glow: string }[] = [
    {
      id: 'cyan',
      name: 'Cyber Cyan',
      color: 'from-cyan-400 to-blue-500',
      border: 'border-cyan-400',
      glow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]',
    },
    {
      id: 'amber',
      name: 'Solar Amber',
      color: 'from-amber-400 to-orange-500',
      border: 'border-amber-400',
      glow: 'shadow-[0_0_15px_rgba(255,184,0,0.4)]',
    },
    {
      id: 'emerald',
      name: 'Emerald Aurora',
      color: 'from-emerald-400 to-teal-500',
      border: 'border-emerald-400',
      glow: 'shadow-[0_0_15px_rgba(0,255,163,0.4)]',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {isOpen && (
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-3 min-w-[220px] shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200 border border-white/20">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              3D Environment
            </span>
            <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/60">
              Interactive
            </span>
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
                    className={`text-[10px] font-medium py-1.5 px-2 rounded-lg transition-all duration-200 flex flex-col items-center gap-1 border ${
                      isActive
                        ? `${t.border} bg-white/15 text-white ${t.glow}`
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
                  className={`flex-1 text-[10px] py-1 rounded-md transition border ${
                    speed === s
                      ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300'
                      : 'bg-slate-900/40 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>

          <div className="text-[10px] text-slate-400 bg-slate-900/50 p-2 rounded-lg border border-white/5 flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-amber-400 shrink-0" />
            <span>Click or drag canvas to create 3D pulse ripples</span>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-pill px-4 py-2.5 rounded-full flex items-center gap-2 hover:border-cyan-400/60 transition-all duration-300 shadow-xl group hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] active:scale-95"
        title="Customize 3D Graphics"
      >
        <div className="relative">
          <Sliders className="w-4 h-4 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div>
        <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition">
          {isOpen ? 'Close 3D Labs' : '3D Controls'}
        </span>
      </button>
    </div>
  );
};
export default ThemeControlDock;
