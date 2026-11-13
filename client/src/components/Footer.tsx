import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

interface FooterProps {
  scrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToTop }) => {
  return (
    <footer className="relative border-t border-white/10 mt-20 py-10 px-4 sm:px-6 glass-panel-subtle">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand / Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-space font-extrabold text-xs text-black shadow-md">
            MN
          </div>
          <div>
            <span className="font-space font-bold text-sm text-white block">
              Manish Kumar Narayan
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Simple • Elegant • Functional
            </span>
          </div>
        </div>

        {/* Center note */}
        <div className="text-center text-xs text-slate-400 flex items-center gap-1.5">
          <span>Engineered with React.ts, Three.js & Glassmorphism</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 inline" />
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/manishkumarnarayan"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full glass-pill hover:border-cyan-400/50 text-slate-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-kumar-341b81421"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full glass-pill hover:border-blue-400/50 text-slate-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/ghosteddudee?igsh=MWk4cmczanBzenB2Mg=="
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full glass-pill hover:border-amber-400/50 text-slate-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-pill hover:border-cyan-400 text-cyan-300 hover:text-white transition hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
