import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

interface FooterProps {
  scrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToTop }) => {
  return (
    <footer className="relative border-t border-ink/10 mt-14 sm:mt-20 py-8 sm:py-10 px-4 sm:px-6 glass-panel-subtle">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
        {/* Brand / Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-display font-extrabold text-xs text-black shadow-md shrink-0">
            MN
          </div>
          <div className="text-left">
            <span className="font-display font-bold text-sm text-ink block">
              Manish Kumar Narayan
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-600">
              Simple • Elegant • Functional
            </span>
          </div>
        </div>

        {/* Center note */}
        <div className="text-center text-[11px] sm:text-xs text-slate-600 flex items-center gap-1.5 order-3 sm:order-2">
          <span>Engineered with React.ts, Three.js & Glassmorphism</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 inline shrink-0" />
        </div>

        {/* Back to top button & Socials */}
        <div className="flex items-center gap-3 sm:gap-4 order-2 sm:order-3">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/manishkumarnarayan"
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-2 rounded-full glass-pill hover:border-cyan-400/50 text-slate-600 hover:text-ink transition min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-kumar-341b81421"
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-2 rounded-full glass-pill hover:border-blue-400/50 text-slate-600 hover:text-ink transition min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/ghosteddudee?igsh=MWk4cmczanBzenB2Mg=="
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-2 rounded-full glass-pill hover:border-amber-400/50 text-slate-600 hover:text-ink transition min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 sm:p-2.5 rounded-full glass-pill hover:border-cyan-400 text-cyan-600 hover:text-ink transition hover:scale-110 active:scale-95 shadow-lg cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
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
