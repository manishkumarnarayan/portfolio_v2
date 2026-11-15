import React from 'react';
import { Hero3DCard } from './Hero3DCard';
import { Sparkles, FolderGit2, Send } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
      {/* Subtle decorative glow spots (Cyan & Coral Dusk - strictly no purple) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] xs:w-[450px] sm:w-[550px] h-[300px] bg-gradient-to-r from-cyan-500/15 via-teal-400/10 to-amber-500/15 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-pill border border-cyan-400/30 mb-4 sm:mb-6 shadow-[0_0_15px_rgba(79,209,192,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] sm:text-xs font-mono font-medium text-ink">
              Interactive 3D Portfolio • 2026 Edition
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-ink leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-4">
            Hi, I'm <br />
            Manish Kumar{' '}
            Narayan
          </h1>

          {/* Subtitle Role */}
          <p className="text-base sm:text-xl text-slate-700 font-body font-light max-w-xl mb-5 sm:mb-6 leading-relaxed">
            Computer Science student & frontend developer crafting <span className="text-ink font-semibold">fast</span>,{' '}
            <span className="text-ink font-semibold">responsive</span>, and <span className="text-ink font-semibold">3D interactive</span> web experiences with clean architecture.
          </p>

          {/* Core Philosophy Banner (His signature: Simple. Elegant. Functional.) */}
          <div className="w-full max-w-xl glass-panel p-3 sm:p-4 rounded-2xl mb-6 sm:mb-8 border border-ink/15 shadow-xl">
            <div className="flex items-center justify-between px-1 sm:px-4 text-center">
              <span className="font-body text-xs sm:text-base font-light tracking-widest text-slate-700 uppercase">
                Simple.
              </span>
              <div className="h-[1px] flex-1 max-w-[30px] sm:max-w-[100px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-1.5 sm:mx-2" />
              <span className="font-accent text-xl sm:text-3xl text-ink font-normal px-1">
                Elegant.
              </span>
              <div className="h-[1px] flex-1 max-w-[30px] sm:max-w-[100px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent mx-1.5 sm:mx-2" />
              <span className="font-body text-xs sm:text-base font-light tracking-widest text-slate-700 uppercase">
                Functional.
              </span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_25px_rgba(79,209,192,0.4)] hover:shadow-[0_0_35px_rgba(79,209,192,0.6)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explore Projects</span>
            </button>

            <div className="flex gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex-1 sm:flex-initial px-5 py-3.5 sm:py-3 rounded-xl font-semibold text-sm glass-card-interactive border border-ink/20 text-ink hover:border-cyan-400/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-cyan-600" />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="flex-1 sm:flex-initial px-4 py-3.5 sm:py-3 rounded-xl text-sm glass-pill border border-ink/10 text-slate-700 hover:text-ink hover:border-amber-400/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Know Me</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Card */}
        <div className="lg:col-span-5 flex justify-center items-center z-10 w-full mt-2 lg:mt-0">
          <Hero3DCard />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="mt-10 sm:mt-16 flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
        <div className="w-6 h-10 sm:w-7 sm:h-11 rounded-full border-2 border-ink/20 flex items-start justify-center p-1 group-hover:border-cyan-400/60 transition-colors">
          <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce mt-1" />
        </div>
      </button>
    </section>
  );
};
export default Hero;
