import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    { id: 'hero', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-2.5 sm:pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl transition-all duration-300 rounded-2xl sm:rounded-full ${
          isScrolled || mobileMenuOpen
            ? 'glass-panel py-2 px-3.5 sm:py-2.5 sm:px-6 shadow-2xl border border-ink/20 bg-white/85 backdrop-blur-xl'
            : 'glass-panel-subtle py-2.5 px-3.5 sm:py-3 sm:px-6 border border-ink/10'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(79,209,192,0.4)] group-hover:scale-105 transition-transform shrink-0">
              <span className="font-display font-extrabold text-xs sm:text-sm text-black tracking-tight">MN</span>
            </div>
            <div className="block">
              <span className="font-display font-bold text-xs sm:text-sm tracking-wide text-ink group-hover:text-cyan-600 transition-colors block">
                Manish Kumar
              </span>
              <span className="text-[9px] sm:text-[10px] block font-mono text-cyan-600/80 -mt-0.5">
                Frontend & 3D Web
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/40 p-1 rounded-full border border-ink/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-600 border border-cyan-400/40 shadow-[0_0_12px_rgba(79,209,192,0.25)]'
                      : 'text-slate-700 hover:text-ink hover:bg-ink/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Action & Social */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/manishkumarnarayan"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full glass-pill hover:border-cyan-400/60 text-slate-700 hover:text-ink transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-kumar-341b81421"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full glass-pill hover:border-cyan-400/60 text-slate-700 hover:text-ink transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_18px_rgba(79,209,192,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black active:scale-95 transition cursor-pointer shadow-sm"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-pill text-slate-800 hover:text-ink cursor-pointer active:scale-95 transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-ink/15 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-600 border border-cyan-400/40 font-semibold'
                      : 'text-slate-800 hover:bg-ink/10 hover:text-ink'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#4FD1C0]" />
                  )}
                </button>
              );
            })}
            <div className="flex items-center justify-around gap-2 pt-3 mt-1 border-t border-ink/10 px-1">
              <a
                href="https://github.com/manishkumarnarayan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-slate-700 hover:text-cyan-600 hover:bg-ink/5 transition"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/manish-kumar-341b81421"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-slate-700 hover:text-cyan-600 hover:bg-ink/5 transition"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="mailto:manishkumarnarayan2007@gmail.com"
                className="flex items-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-slate-700 hover:text-cyan-600 hover:bg-ink/5 transition"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
