import { Shield, Activity, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center border border-slate-700 shadow-md">
                <Shield className="w-5 h-5 text-teal-400 absolute" />
                <Activity className="w-3.5 h-3.5 text-cyan-300 relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  Safe <span className="text-teal-400">ICU</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 -mt-1">
                  AI Patient Monitoring
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-teal-400">
              Smarter Monitoring. Safer ICU Care.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An engineering prototype exploring computer vision, deep learning, and ESP32 hardware 
              alerting to assist clinical teams with timely bedside movement awareness.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              STATUS: PROTOTYPE HARDWARE + RESEARCH PIPELINE
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#problem" className="text-slate-400 hover:text-teal-400 transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-400 hover:text-teal-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">
                  About Safe ICU
                </a>
              </li>
            </ul>
          </div>

          {/* Prototype & Engineering (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Project Showcase
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#prototype" className="text-teal-400 hover:text-teal-300 font-medium transition-colors flex items-center gap-1.5">
                  &bull; <span>Physical Working Prototype (ESP32)</span>
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-slate-400 hover:text-teal-400 transition-colors">
                  System Architecture Diagram
                </a>
              </li>
              <li>
                <a href="#simulation" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Interactive Alert Simulation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Request a Demonstration
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-teal-500 text-xs text-slate-300 hover:text-teal-300 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Mandatory Regulatory / Clinical Disclaimer Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-200 font-semibold block mb-1">Notice & Disclaimer:</strong>
          Safe ICU is a developing prototype intended to support, not replace, professional clinical supervision. 
          Detection capabilities and system performance require appropriate testing and validation. 
          The project does not represent a licensed medical device or clinically certified system.
        </div>

        {/* Copyright & Bottom Info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Safe ICU Project. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed for healthcare vigilance &bull; Engineering Prototype</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
