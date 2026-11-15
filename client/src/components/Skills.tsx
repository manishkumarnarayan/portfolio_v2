import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  GitBranch, 
  Cloud, 
  Bot, 
  Boxes, 
  RotateCw, 
  ExternalLink,
  Layers
} from 'lucide-react';

interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  frontSummary: string;
  details: string[];
  color: string;
  borderGlow: string;
  link?: string;
  linkLabel?: string;
}

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools' | 'ai'>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const skillsList: SkillItem[] = [
    {
      id: 'react',
      name: 'React.js & React.ts',
      category: 'frontend',
      icon: Code2,
      tagline: 'Modern Component Systems',
      frontSummary: 'Custom hooks, state management, router architecture, and high-performance UI rendering.',
      details: ['Hooks & Custom Hooks', 'Context API & State', 'SPA & App Routing', 'Performance Optimization'],
      color: 'from-cyan-400 to-blue-500',
      borderGlow: 'hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(79,209,192,0.25)]',
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'frontend',
      icon: Code2,
      tagline: 'Type-Safe Web Engineering',
      frontSummary: 'Strict typing, robust interfaces, refactor resilience, and clean scalable application code.',
      details: ['Strict Type Safety', 'Generic Interfaces', 'Full-stack Types', 'Modern TS Tooling'],
      color: 'from-blue-400 to-indigo-500',
      borderGlow: 'hover:border-blue-400/60 hover:shadow-[0_0_25px_rgba(75,151,186,0.25)]',
    },
    {
      id: 'js-html-css',
      name: 'JavaScript / HTML & CSS',
      category: 'frontend',
      icon: Layers,
      tagline: 'Core Web Foundations',
      frontSummary: 'Interactive DOM manipulation, semantic modern markup, and responsive fluid layouts.',
      details: ['ESNext Modern Syntax', 'Interactive UI Logic', 'Semantic & Accessible HTML', 'Modern CSS & Glassmorphism'],
      color: 'from-amber-400 to-yellow-500',
      borderGlow: 'hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(255,149,128,0.25)]',
    },
    {
      id: 'threejs',
      name: 'Three.js & 3D Web',
      category: 'frontend',
      icon: Boxes,
      tagline: 'Interactive 3D Graphics',
      frontSummary: 'WebGL 3D scenes, particle simulations, dynamic lighting, and camera parallax math.',
      details: ['WebGL Mesh & Shaders', 'Particle Constellations', 'Interactive Mouse Parallax', 'Physics & Animation Loops'],
      color: 'from-emerald-400 to-teal-500',
      borderGlow: 'hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(147,221,185,0.25)]',
    },
    {
      id: 'python',
      name: 'Python',
      category: 'backend',
      icon: Terminal,
      tagline: 'Backend & Automation',
      frontSummary: 'Backend application development, automation scripts, data handling, and API integration.',
      details: ['Backend REST APIs', 'Data Processing & Logic', 'Workflow Automation', 'Algorithm Implementation'],
      color: 'from-cyan-400 to-emerald-400',
      borderGlow: 'hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(43,181,164,0.25)]',
    },
    {
      id: 'sql',
      name: 'SQL & Databases',
      category: 'backend',
      icon: Database,
      tagline: 'Relational Data Architecture',
      frontSummary: 'Database schema design, queries, relational indexing, and secure data storage.',
      details: ['Relational Data Modeling', 'Complex Querying', 'CRUD & Integrity', 'Database Security'],
      color: 'from-amber-400 to-orange-500',
      borderGlow: 'hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(247,115,92,0.25)]',
    },
    {
      id: 'java',
      name: 'Java',
      category: 'backend',
      icon: Cpu,
      tagline: 'Object-Oriented Programming',
      frontSummary: 'Robust backend and software applications using core OOP principles and strong architecture.',
      details: ['Object-Oriented Architecture', 'Design Patterns', 'Data Structures & Algorithms', 'Backend Applications'],
      color: 'from-orange-400 to-red-500',
      borderGlow: 'hover:border-orange-400/60 hover:shadow-[0_0_25px_rgba(247,115,92,0.25)]',
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'tools',
      icon: GitBranch,
      tagline: 'Version Control & Collaboration',
      frontSummary: 'Branch management, code reviews, collaborative open source, and team workflows.',
      details: ['Branching & Merging', 'Collaborative Teamwork', 'GitHub Repositories', 'Open Source Practices'],
      color: 'from-slate-200 to-cyan-300',
      borderGlow: 'hover:border-ink/60 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]',
      link: 'https://github.com/manishkumarnarayan',
      linkLabel: 'Visit GitHub Profile',
    },
    {
      id: 'vercel',
      name: 'Vercel & Cloud Deploy',
      category: 'tools',
      icon: Cloud,
      tagline: 'Cloud Hosting & Edge CI/CD',
      frontSummary: 'Continuous deployment pipelines, domain configuration, serverless routes, and speed optimization.',
      details: ['Production CI/CD Pipelines', 'Edge Network Routing', 'Zero-Downtime Deploys', 'Environment Configurations'],
      color: 'from-cyan-300 to-teal-400',
      borderGlow: 'hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(79,209,192,0.25)]',
    },
    {
      id: 'ai-agents',
      name: 'AI Agents & LLM Tools',
      category: 'ai',
      icon: Bot,
      tagline: 'Modern AI Workflows',
      frontSummary: 'Prompt engineering and agentic workflows utilizing Claude, ChatGPT, and Gemini APIs.',
      details: ['Agentic Task Automation', 'Claude, Gemini & GPT Workflows', 'Prompt Engineering', 'API Integration'],
      color: 'from-amber-400 to-emerald-400',
      borderGlow: 'hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(255,149,128,0.25)]',
    },
  ];

  const filteredSkills = skillsList.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-400/30 text-cyan-600 text-xs font-mono mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-display font-bold text-ink tracking-tight">
          Technical <span className="text-gradient-cyan">Skillset</span> &{' '}
          <span className="text-gradient-emerald">Capabilities</span>
        </h2>
        <p className="mt-2.5 sm:mt-3 text-slate-700 font-body max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
          Interactive cards: Click or tap any card to flip and discover architectural details and applications.
        </p>

        {/* Filter Tabs - Horizontally scrollable on mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mt-6 sm:mt-8 overflow-x-auto no-scrollbar py-1 px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'frontend', label: 'Frontend & 3D' },
            { id: 'backend', label: 'Backend & Data' },
            { id: 'tools', label: 'DevOps & Git' },
            { id: 'ai', label: 'AI & Workflows' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_15px_rgba(79,209,192,0.4)]'
                  : 'glass-panel-subtle text-slate-700 hover:text-ink hover:bg-ink/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid with 3D Flip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          const isFlipped = !!flippedCards[skill.id];

          return (
            <div
              key={skill.id}
              onClick={() => toggleFlip(skill.id)}
              className="perspective-container h-[250px] sm:h-[240px] cursor-pointer group active:scale-[0.98] transition-transform"
            >
              <div
                className={`relative w-full h-full preserve-3d transition-transform duration-500 ease-out rounded-2xl ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE */}
                <div
                  className={`absolute inset-0 backface-hidden glass-card-interactive p-5 sm:p-6 rounded-2xl border border-ink/15 flex flex-col justify-between ${skill.borderGlow}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className={`p-2 sm:p-2.5 rounded-xl bg-gradient-to-tr ${skill.color} text-black shadow-md`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-slate-600 group-hover:text-cyan-600 transition-colors">
                        <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                        <span>Flip info</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-ink group-hover:text-cyan-600 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono text-cyan-600/90 mt-0.5">
                      {skill.tagline}
                    </p>
                    <p className="text-xs text-slate-700 font-body mt-2 sm:mt-3 line-clamp-3 leading-relaxed">
                      {skill.frontSummary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-ink/10">
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-600">
                      Category: {skill.category}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-cyan-600 flex items-center gap-1">
                      Explore details →
                    </span>
                  </div>
                </div>

                {/* BACK FACE */}
                <div
                  className={`absolute inset-0 backface-hidden rotate-y-180 glass-panel p-5 sm:p-6 rounded-2xl border border-cyan-400/40 shadow-2xl flex flex-col justify-between bg-white/95`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 sm:mb-3 border-b border-ink/10">
                      <h4 className="text-sm sm:text-base font-bold font-display text-ink flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600" />
                        {skill.name}
                      </h4>
                      <span className="text-[9px] sm:text-[10px] text-slate-600 font-mono">Back to front ↺</span>
                    </div>

                    <ul className="space-y-1.5">
                      {skill.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-slate-800 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span className="leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {skill.link ? (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-2 py-1.5 px-3 rounded-lg text-xs font-semibold bg-ink/10 hover:bg-cyan-500/20 text-cyan-600 border border-cyan-400/30 flex items-center justify-center gap-1.5 transition"
                    >
                      <span>{skill.linkLabel || 'Visit Link'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="text-[10px] sm:text-[11px] font-mono text-emerald-600 pt-2 border-t border-ink/10">
                      ✓ Actively utilized in real projects
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs sm:text-sm font-body text-slate-600 max-w-xl mx-auto">
          "Constantly evolving and mastering new frameworks, libraries, and AI technologies to build higher-fidelity web applications."
        </p>
      </div>
    </section>
  );
};
export default Skills;
