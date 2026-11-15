import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  Boxes, 
  CheckCircle2, 
  ArrowUpRight,
  Eye
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface Project {
  id: string;
  name: string;
  tagline: string;
  skills: string[];
  github: string;
  liveLink: string;
  description: string;
  keyFeatures: string[];
  accentColor: string;
  badge: string;
  previewGradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'nexconversa',
      name: 'NexConversa',
      tagline: 'Modern Real-Time One-to-One Chat System',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'WebSockets', 'Cloud DB'],
      github: 'https://github.com/manishkumarnarayan/nexconversa',
      liveLink: 'https://nexconversa.vercel.app/',
      description:
        'NexConversa is a modern real-time chat application that enables seamless one-to-one conversations with instant messaging, user authentication, and cloud-based data storage. It focuses on speed, reliability, and a clean user experience.',
      keyFeatures: [
        'Instantaneous low-latency real-time message exchange',
        'Secure user authentication and session management',
        'Persistent cloud data storage for chat history',
        'Responsive mobile-first interface with fluid layout',
      ],
      accentColor: 'from-cyan-400 to-blue-600',
      badge: 'Live Production',
      previewGradient: 'from-cyan-950/60 via-slate-900/80 to-blue-950/60',
      icon: MessageSquare,
    },
    {
      id: 'whisperlink',
      name: 'WhisperLink',
      tagline: 'Anonymous Feedback & Thought-Sharing Platform',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'Responsive UI'],
      github: 'https://github.com/manishkumarnarayan/whisperlink',
      liveLink: 'https://whisperlink-nu.vercel.app/',
      description:
        'An anonymous messaging platform that lets anyone share honest thoughts, compliments, confessions, or feedback through a personalized link. Built with privacy and simplicity in mind, it creates a safe space for authentic conversations.',
      keyFeatures: [
        'Instant personalized unique shareable links',
        'End-to-end anonymity ensuring privacy and freedom of expression',
        'Spam protection and clean, intuitive message inbox',
        'Minimalist, distraction-free glassmorphic UI',
      ],
      accentColor: 'from-amber-400 to-orange-500',
      badge: 'User Favorite',
      previewGradient: 'from-amber-950/50 via-slate-900/80 to-orange-950/50',
      icon: ShieldCheck,
    },
    {
      id: 'portfolio-3d',
      name: '3D Glassmorphic Portfolio',
      tagline: 'Interactive 3D Web Experience with Three.js',
      skills: ['React.ts', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Motion'],
      github: 'https://github.com/manishkumarnarayan/portfolio',
      liveLink: '#',
      description:
        'A next-generation interactive web portfolio built with React.ts, Three.js, and custom physics-based lighting shaders. Featuring glassmorphism aesthetics, an interactive 3D particle constellation, and vibrant luminous palettes.',
      keyFeatures: [
        'Full-screen interactive Three.js 3D scene with mouse inertia',
        'Real-time 3D theme switcher (Deep Teal, Coral Dusk, Sage Aurora)',
        'Gyroscopic 3D tilt cards with dynamic specular glare',
        'Zero purple generic gradients - bespoke luminous color palette',
      ],
      accentColor: 'from-emerald-400 to-cyan-500',
      badge: 'Featured Showcase',
      previewGradient: 'from-emerald-950/60 via-slate-900/80 to-teal-950/60',
      icon: Boxes,
    },
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-emerald-400/30 text-emerald-300 text-xs font-mono mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Proven Work & Deployments</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Featured <span className="text-gradient-cyan">Projects</span> &{' '}
          <span className="text-gradient-amber">Creations</span>
        </h2>
        <p className="mt-2.5 sm:mt-3 text-slate-300 font-body max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
          Real-world products engineered for fast communication, user privacy, and high-impact web interactions.
        </p>
      </div>

      {/* Projects Showcase Cards */}
      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="glass-card-interactive rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-5 sm:p-8 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left/Right Text Column */}
                <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div>
                    {/* Badge & Category */}
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                      <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold bg-white/10 text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5 shadow-sm">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        {project.badge}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                        {project.skills.slice(0, 3).join(' • ')}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2 sm:gap-2.5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono text-amber-300/90 mt-1 mb-3 sm:mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-base font-body leading-relaxed mb-4 sm:mb-6">
                      {project.description}
                    </p>

                    {/* Feature bullets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 sm:mb-6">
                      {project.keyFeatures.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono bg-slate-900/80 text-slate-200 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col xs:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 pt-4 border-t border-white/10">
                    {project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial px-4 sm:px-5 py-3 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_15px_rgba(79,209,192,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Open Live App</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial px-4 sm:px-5 py-3 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm glass-pill border border-white/15 text-slate-200 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full xs:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm text-cyan-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Deep Dive</span>
                    </button>
                  </div>
                </div>

                {/* Right/Left Interactive Mockup Preview */}
                <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="relative rounded-2xl glass-panel p-3.5 sm:p-4 border border-white/20 shadow-xl overflow-hidden group-hover:scale-[1.01] transition-transform">
                    {/* Simulated browser window bar */}
                    <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-2.5 sm:px-3 py-0.5 rounded-full bg-black/40 text-[9px] sm:text-[10px] font-mono text-slate-400 border border-white/10">
                        {project.id}.app
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Window Visual Stage */}
                    <div
                      className={`h-40 sm:h-56 rounded-xl bg-gradient-to-br ${project.previewGradient} flex flex-col items-center justify-center p-4 sm:p-6 text-center border border-white/10 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-tr ${project.accentColor} text-black mb-2 sm:mb-3 shadow-lg z-10 group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <span className="font-display font-bold text-base sm:text-lg text-white z-10">
                        {project.name}
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-300 font-mono mt-0.5 sm:mt-1 z-10 max-w-[240px]">
                        {project.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="glass-panel max-w-xl w-full p-5 sm:p-8 rounded-3xl border border-white/20 shadow-2xl relative max-h-[85vh] sm:max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full glass-pill hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4 pr-8">
              <div className={`p-2.5 sm:p-3 rounded-2xl bg-gradient-to-tr ${selectedProject.accentColor} text-black shrink-0`}>
                {React.createElement(selectedProject.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">{selectedProject.name}</h3>
                <p className="text-xs font-mono text-cyan-300">{selectedProject.tagline}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed mb-5 sm:mb-6">
              {selectedProject.description}
            </p>

            <h4 className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5">
              Architecture & Features
            </h4>
            <ul className="space-y-2 mb-6">
              {selectedProject.keyFeatures.map((kf, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{kf}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col xs:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-4 border-t border-white/10">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold glass-pill border border-white/20 text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              {selectedProject.liveLink !== '#' && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black flex items-center justify-center gap-1.5 shadow-md hover:brightness-110 transition"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Projects;
