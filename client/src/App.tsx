import { useState, useEffect } from 'react';
import { ThreeBackground, type ColorTheme } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeControlDock } from './components/ThemeControlDock';

export function App() {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>('cyan');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const themeGlowClass = {
    cyan: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 shadow-[0_0_15px_#4FD1C0]',
    amber: 'bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 shadow-[0_0_15px_#FF9580]',
    emerald: 'bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-300 shadow-[0_0_15px_#93DDB9]',
  }[currentTheme];

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#070B0E] selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-white/5">
        <div
          className={`h-full transition-all duration-75 ${themeGlowClass}`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 3D WebGL Three.js Interactive Background */}
      <ThreeBackground
        currentTheme={currentTheme}
        speedMultiplier={speedMultiplier}
      />

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <main className="flex-1">
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer scrollToTop={scrollToTop} />
      </div>

      {/* Floating 3D Control Dock */}
      <ThemeControlDock
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        speed={speedMultiplier}
        setSpeed={setSpeedMultiplier}
      />
    </div>
  );
}

export default App;
