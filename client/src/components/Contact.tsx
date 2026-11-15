import React, { useState } from 'react';
import { 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const myEmail = 'manishkumarnarayan2007@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Glow Backdrop */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[340px] xs:w-[450px] sm:w-[550px] h-[300px] bg-gradient-to-r from-cyan-500/15 to-amber-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-400/30 text-cyan-600 text-xs font-mono mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-display font-bold text-ink tracking-tight">
          Let's Build Something <span className="text-gradient-cyan">Extraordinary</span>
        </h2>
        <p className="mt-2.5 sm:mt-3 text-slate-700 font-body max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
          Have an exciting project, internship opportunity, or freelance inquiry? Connect with me directly by email or on social media.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Direct Info & Social Cards */}
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="glass-card-interactive p-5 sm:p-8 rounded-3xl border border-ink/15 shadow-2xl">
            <h3 className="text-lg sm:text-xl font-bold font-display text-ink mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              Direct Communication
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-body mb-5 sm:mb-6 leading-relaxed">
              I usually respond within a few hours. Feel free to copy my direct email address or ping me on social channels.
            </p>

            {/* Email Copy Card */}
            <div className="glass-panel-subtle p-3 sm:p-3.5 rounded-2xl border border-ink/10 flex items-center justify-between gap-2 mb-4 group hover:border-cyan-400/40 transition">
              <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden min-w-0">
                <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-500/20 text-cyan-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-600 block">Email Address</span>
                  <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-ink break-all block">
                    {myEmail}
                  </span>
                </div>
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="p-2 sm:p-2.5 rounded-xl glass-pill hover:bg-ink/20 text-slate-700 hover:text-ink transition shrink-0 cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-cyan-600" />
                )}
              </button>
            </div>

            {copiedEmail && (
              <div className="text-xs text-emerald-600 font-mono mb-4 flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" /> Email copied to clipboard!
              </div>
            )}

            {/* Availability details */}
            <div className="space-y-2.5 sm:space-y-3 pt-2">
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-700">
                <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Fast response time (typically &lt; 24h)</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-700">
                <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Available for Remote Roles & Internships Worldwide</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            <a
              href="https://github.com/manishkumarnarayan"
              target="_blank"
              rel="noreferrer"
              className="glass-card-interactive p-3 sm:p-4 rounded-2xl border border-ink/10 flex flex-col items-center justify-center gap-1.5 sm:gap-2 hover:border-cyan-400/50 group transition cursor-pointer"
            >
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-cyan-600 transition" />
              <span className="text-[11px] sm:text-xs font-semibold text-ink group-hover:text-cyan-600">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/manish-kumar-341b81421"
              target="_blank"
              rel="noreferrer"
              className="glass-card-interactive p-3 sm:p-4 rounded-2xl border border-ink/10 flex flex-col items-center justify-center gap-1.5 sm:gap-2 hover:border-blue-400/50 group transition cursor-pointer"
            >
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-blue-600 transition" />
              <span className="text-[11px] sm:text-xs font-semibold text-ink group-hover:text-blue-600">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/ghosteddudee?igsh=MWk4cmczanBzenB2Mg=="
              target="_blank"
              rel="noreferrer"
              className="glass-card-interactive p-3 sm:p-4 rounded-2xl border border-ink/10 flex flex-col items-center justify-center gap-1.5 sm:gap-2 hover:border-amber-400/50 group transition cursor-pointer"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-amber-600 transition" />
              <span className="text-[11px] sm:text-xs font-semibold text-ink group-hover:text-amber-600">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
