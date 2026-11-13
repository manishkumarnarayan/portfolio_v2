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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl transition-all duration-300 rounded-2xl sm:rounded-full ${
          isScrolled
            ? 'glass-panel py-2.5 px-4 sm:px-6 shadow-2xl border border-white/20'
            : 'glass-panel-subtle py-3 px-4 sm:px-6 border border-white/10'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
              <span className="font-space font-extrabold text-sm text-black tracking-tight">MN</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-space font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                Manish Kumar
              </span>
              <span className="text-[10px] block font-mono text-cyan-400/80 -mt-0.5">
                Frontend & 3D Web
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-950/40 p-1 rounded-full border border-white/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
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
              className="p-2 rounded-full glass-pill hover:border-cyan-400/60 text-slate-300 hover:text-white transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-kumar-341b81421"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full glass-pill hover:border-cyan-400/60 text-slate-300 hover:text-white transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_18px_rgba(0,240,255,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400 text-black cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-pill text-slate-200 hover:text-white cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="flex items-center gap-3 pt-2 mt-1 border-t border-white/10 px-2">
              <a
                href="https://github.com/manishkumarnarayan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/manish-kumar-341b81421"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="mailto:manishkumarnarayan2007@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400"
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
