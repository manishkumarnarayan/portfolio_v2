import React, { useState } from 'react';
import myPhoto from '../assets/MySelf.jpg';
import { 
  Sparkles, 
  Terminal, 
  Compass, 
  GraduationCap, 
  CheckCircle2, 
  Rocket 
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'philosophy' | 'education'>('story');

  const stats = [
    { label: 'Core Projects', value: '3+', highlight: 'text-cyan-600' },
    { label: 'Key Technologies', value: '10+', highlight: 'text-amber-600' },
    { label: 'Responsive Design', value: '100%', highlight: 'text-emerald-600' },
    { label: 'Code Craft', value: 'Clean', highlight: 'text-cyan-600' },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-amber-400/30 text-amber-600 text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>About The Developer</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-display font-bold text-ink tracking-tight">
          Designing with <span className="text-gradient-cyan">Purpose</span>, Coding with{' '}
          <span className="text-gradient-amber">Passion</span>
        </h2>
        <p className="mt-2.5 sm:mt-3 text-slate-700 font-body max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
          Get to know my journey, engineering philosophy, and what drives me to build memorable digital products.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Column: Glass Profile Spotlight */}
        <div className="lg:col-span-5 glass-card-interactive p-5 sm:p-8 rounded-3xl flex flex-col justify-between border border-ink/15 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="relative mb-5 sm:mb-6 mx-auto w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-400 via-emerald-400 to-amber-400 opacity-60 blur-md" />
              <img
                src={myPhoto}
                alt="Manish Kumar Narayan"
                className="relative w-full h-full object-cover rounded-2xl shadow-xl border border-ink/30"
              />
              <div className="absolute bottom-2 right-2 glass-pill px-2.5 py-1 rounded-lg border border-cyan-400/40 text-[10px] text-cyan-600 font-mono flex items-center gap-1 shadow-lg">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-ink text-center">
              Manish Kumar Narayan
            </h3>
            <p className="text-xs sm:text-sm text-cyan-600 font-mono text-center mt-1">
              Computer Science Undergraduate & Web Engineer
            </p>

            <p className="text-xs sm:text-sm text-slate-700 font-body text-center mt-3 sm:mt-4 leading-relaxed">
              "Building fast, responsive, and user-centric applications where design clarity meets reliable engineering."
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-ink/10">
            <div className="glass-panel-subtle p-2.5 sm:p-3 rounded-xl border border-ink/10">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-600 block">Location</span>
              <span className="text-xs font-semibold text-ink">India (Global Remote)</span>
            </div>
            <div className="glass-panel-subtle p-2.5 sm:p-3 rounded-xl border border-ink/10">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-600 block">Status</span>
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Collabs
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Content & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5 sm:gap-6">
          {/* Tabs Selector */}
          <div className="glass-panel p-1 sm:p-1.5 rounded-2xl flex gap-1 border border-ink/15">
            {[
              { id: 'story', label: 'My Story', shortLabel: 'Story', icon: Compass },
              { id: 'philosophy', label: 'Engineering Philosophy', shortLabel: 'Philosophy', icon: Sparkles },
              { id: 'education', label: 'Education & Focus', shortLabel: 'Education', icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-ink border border-cyan-400/40 shadow-[0_0_15px_rgba(79,209,192,0.2)]'
                      : 'text-slate-600 hover:text-ink hover:bg-ink/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-cyan-600' : 'text-slate-600'}`} />
                  <span className="sm:hidden text-[11px]">{tab.shortLabel}</span>
                  <span className="hidden sm:inline truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Box */}
          <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-ink/15 shadow-xl min-h-[240px] sm:min-h-[260px] flex flex-col justify-center">
            {activeTab === 'story' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h4 className="text-xl font-bold font-display text-ink flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-cyan-600" />
                  Passionate About Code & Creativity
                </h4>
                <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed">
                  I'm a Computer Science student and frontend developer who enjoys building fast, responsive, and user-friendly web applications.
                </p>
                <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed">
                  I focus on clean design, thoughtful interactions, and writing code that's as maintainable as it is functional. I'm always exploring new technologies and looking for opportunities to turn ideas into meaningful digital experiences.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {['Clean Architecture', 'Interactive WebGL', 'Responsive UI', 'Modern TypeScript'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-600 border border-cyan-500/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h4 className="text-xl font-bold font-display text-ink flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  Simple • Elegant • Functional
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="glass-panel-subtle p-3.5 rounded-xl border border-ink/10">
                    <span className="font-display font-bold text-ink text-sm block mb-1">01. Simple</span>
                    <p className="text-xs text-slate-700">
                      Eliminating clutter so users can achieve their intent without friction.
                    </p>
                  </div>
                  <div className="glass-panel-subtle p-3.5 rounded-xl border border-ink/10">
                    <span className="font-display font-bold text-amber-600 text-sm block mb-1">02. Elegant</span>
                    <p className="text-xs text-slate-700">
                      Harmonious visual hierarchy, glassmorphism, and responsive micro-interactions.
                    </p>
                  </div>
                  <div className="glass-panel-subtle p-3.5 rounded-xl border border-ink/10">
                    <span className="font-display font-bold text-emerald-600 text-sm block mb-1">03. Functional</span>
                    <p className="text-xs text-slate-700">
                      Rock-solid reliability, fast load times, and maintainable type-safe code.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h4 className="text-xl font-bold font-display text-ink flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                  Academic Foundation & Continuous Learning
                </h4>
                <div className="glass-panel-subtle p-4 rounded-xl border border-ink/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-display font-semibold text-ink text-base">
                        Computer Science & Engineering
                      </h5>
                      <p className="text-xs font-mono text-cyan-600">Undergraduate Degree Program</p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 border border-emerald-500/30">
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    Coursework and practical studies spanning Data Structures & Algorithms, Object-Oriented Programming (Java), Relational Databases (SQL), Web Technologies, and Artificial Intelligence Agent workflows.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="glass-panel p-3 sm:p-4 rounded-2xl border border-ink/10 text-center hover:border-cyan-400/40 transition-colors"
              >
                <div className={`text-xl sm:text-3xl font-extrabold font-display ${s.highlight}`}>
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
