import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const myEmail = 'manishkumarnarayan2007@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject || !message.trim()) {
      setErrorMsg('Please fill in your name, email, subject, and message.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate submission with celebratory confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti effect with luminous cyan and solar gold colors
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4FD1C0', '#FF9580', '#93DDB9', '#FFFFFF', '#6DB8D4'],
      });

      // Clear fields
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 800);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Glow Backdrop */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[340px] xs:w-[450px] sm:w-[550px] h-[300px] bg-gradient-to-r from-cyan-500/15 to-amber-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Let's Build Something <span className="text-gradient-cyan">Extraordinary</span>
        </h2>
        <p className="mt-2.5 sm:mt-3 text-slate-300 font-body max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
          Have an exciting project, internship opportunity, or freelance inquiry? Send a message or connect directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Column: Direct Info & Social Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5 sm:gap-6">
          <div className="glass-card-interactive p-5 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Direct Communication
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-body mb-5 sm:mb-6 leading-relaxed">
              I usually respond within a few hours. Feel free to copy my direct email address or ping me on social channels.
            </p>

            {/* Email Copy Card */}
            <div className="glass-panel-subtle p-3 sm:p-3.5 rounded-2xl border border-white/10 flex items-center justify-between gap-2 mb-4 group hover:border-cyan-400/40 transition">
              <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden min-w-0">
                <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-400 block">Email Address</span>
                  <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-white break-all block">
                    {myEmail}
                  </span>
                </div>
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="p-2 sm:p-2.5 rounded-xl glass-pill hover:bg-white/20 text-slate-300 hover:text-white transition shrink-0 cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-cyan-300" />
                )}
              </button>
            </div>

            {copiedEmail && (
              <div className="text-xs text-emerald-300 font-mono mb-4 flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" /> Email copied to clipboard!
              </div>
            )}

            {/* Availability details */}
            <div className="space-y-2.5 sm:space-y-3 pt-2">
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-300">
                <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Fast response time (typically &lt; 24h)</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-300">
                <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
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
              className="glass-card-interactive p-3 sm:p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-1.5 sm:gap-2 hover:border-cyan-400/50 group transition cursor-pointer"
            >
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 group-hover:text-cyan-400 transition" />
              <span className="text-[11px] sm:text-xs font-semibold text-white group-hover:text-cyan-300">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/manish-kumar-341b81421"
              target="_blank"
              rel="noreferrer"
              className="glass-card-interactive p-3 sm:p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-1.5 sm:gap-2 hover:border-blue-400/50 group transition cursor-pointer"
            >
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 group-hover:text-blue-400 transition" />
              <span className="text-[11px] sm:text-xs font-semibold text-white group-hover:text-blue-300">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/ghosteddudee?igsh=MWk4cmczanBzenB2Mg=="
              target="_blank"
              rel="noreferrer"
              className="glass-card-interactive p-3 sm:p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-1.5 sm:gap-2 hover:border-amber-400/50 group transition cursor-pointer"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 group-hover:text-amber-400 transition" />
              <span className="text-[11px] sm:text-xs font-semibold text-white group-hover:text-amber-300">Instagram</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 glass-panel p-5 sm:p-8 rounded-3xl border border-white/15 shadow-2xl relative">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-4 sm:mb-6">
            Send a Message
          </h3>

          {submitted ? (
            <div className="py-10 sm:py-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_#93DDB9]">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">Message Sent!</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-body max-w-sm mb-6">
                Thank you for reaching out, Manish will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold glass-pill border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 transition cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-slate-900/70 border border-white/15 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-slate-900/70 border border-white/15 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Phone (Optional)</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-slate-900/70 border border-white/15 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Subject *</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-slate-900/90 border border-white/15 text-white text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  >
                    <option value="" className="bg-slate-900 text-slate-400">Select a subject</option>
                    <option value="job" className="bg-slate-900 text-white">Full-Time / Part-Time Job Offer</option>
                    <option value="internship" className="bg-slate-900 text-white">Internship Opportunity</option>
                    <option value="freelance" className="bg-slate-900 text-white">Hire for Freelance Project</option>
                    <option value="collaboration" className="bg-slate-900 text-white">Project Collaboration</option>
                    <option value="other" className="bg-slate-900 text-white">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Message *</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, timeline, or idea..."
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-slate-900/70 border border-white/15 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-black shadow-[0_0_20px_rgba(79,209,192,0.4)] hover:brightness-110 active:scale-[0.99] transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[46px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default Contact;
