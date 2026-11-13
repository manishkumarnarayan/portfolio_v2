import React, { useState, useRef } from 'react';
import myPhoto from '../assets/MySelf.jpg';
import { Code2, Terminal, Cpu } from 'lucide-react';

export const Hero3DCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isInteracting, setIsInteracting] = useState(false);

  const calculateTilt = (clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 14;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    calculateTilt(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches && e.touches.length > 0) {
      calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleEnd = () => {
    setIsInteracting(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleStart = () => {
    setIsInteracting(true);
  };

  return (
    <div className="perspective-container relative w-full max-w-[340px] xs:max-w-[370px] sm:max-w-[420px] mx-auto">
      {/* Decorative ambient 3D back-glow */}
      <div
        className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-amber-500/15 to-emerald-500/20 blur-2xl -z-10 transition-opacity duration-500"
        style={{ opacity: isInteracting ? 0.9 : 0.4 }}
      />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleStart}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isInteracting ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="preserve-3d relative w-full rounded-3xl p-5 sm:p-7 glass-card-interactive border border-white/20 shadow-2xl cursor-pointer overflow-hidden group select-none"
      >
        {/* Dynamic Glare Reflection Layer */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 -z-0"
          style={{
            opacity: isInteracting ? 0.35 : 0,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.7) 0%, rgba(0,240,255,0.15) 35%, transparent 70%)`,
          }}
        />

        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-4 sm:mb-5" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00FFA3]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-emerald-300 uppercase">Available to Build</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] text-cyan-300 font-mono">
            <Terminal className="w-3 h-3" />
            <span>manish.dev</span>
          </div>
        </div>

        {/* Photo Container with 3D Pop-out */}
        <div className="relative mb-4 sm:mb-5 flex justify-center" style={{ transform: 'translateZ(45px)' }}>
          <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
            {/* Glowing ring frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400 via-amber-300 to-emerald-400 opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
            <img
              src={myPhoto}
              alt="Manish Kumar Narayan"
              className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 object-cover rounded-2xl shadow-xl border-2 border-white/30"
            />
          </div>

          {/* Floating Tag 1: React.ts */}
          <div
            className="absolute left-0 sm:-left-3 top-4 sm:top-6 glass-pill px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-cyan-400/40 shadow-lg flex items-center gap-1.5 text-[11px] sm:text-xs text-white"
            style={{ transform: 'translateZ(60px)' }}
          >
            <Code2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyan-400" />
            <span className="font-semibold">React + TS</span>
          </div>

          {/* Floating Tag 2: Python / AI */}
          <div
            className="absolute right-0 sm:-right-3 bottom-4 sm:bottom-6 glass-pill px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-amber-400/40 shadow-lg flex items-center gap-1.5 text-[11px] sm:text-xs text-white"
            style={{ transform: 'translateZ(65px)' }}
          >
            <Cpu className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400" />
            <span className="font-semibold">Python & AI</span>
          </div>
        </div>

        {/* Info Bio Snippet */}
        <div className="text-center" style={{ transform: 'translateZ(35px)' }}>
          <h3 className="text-lg sm:text-xl font-bold font-space text-white tracking-wide">
            Manish Kumar Narayan
          </h3>
          <p className="text-[11px] sm:text-sm text-cyan-300/90 font-mono mt-0.5">
            Frontend Engineer & CS Student
          </p>

          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10 flex justify-around text-center">
            <div>
              <div className="text-sm sm:text-base font-bold text-white font-space">Real-Time</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Architecture</div>
            </div>
            <div className="w-[1px] h-7 sm:h-8 bg-white/10" />
            <div>
              <div className="text-sm sm:text-base font-bold text-amber-300 font-space">3D & UX</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Interactivity</div>
            </div>
            <div className="w-[1px] h-7 sm:h-8 bg-white/10" />
            <div>
              <div className="text-sm sm:text-base font-bold text-emerald-300 font-space">Clean</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Codebase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero3DCard;
