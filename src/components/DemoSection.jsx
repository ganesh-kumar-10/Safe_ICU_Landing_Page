import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, ShieldCheck, Eye } from 'lucide-react';

export default function DemoSection() {
  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>CONNECT WITH OUR DEVELOPMENT EFFORT</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Explore Smarter ICU Monitoring
          </h2>

          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Interested in the Safe ICU prototype? Connect with us to discuss the technology, explore a demonstration, or consider a future pilot evaluation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-navy-950 bg-teal-400 hover:bg-teal-300 shadow-glow-teal transition-all duration-300"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#prototype"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all duration-200"
            >
              <Eye className="w-4 h-4 text-teal-400" />
              <span>Explore Our Prototype</span>
            </a>
          </div>

          {/* Supportive note */}
          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Open to academic feedback, clinical research discussions, and evaluative pilots.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
