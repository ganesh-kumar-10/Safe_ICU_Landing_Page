import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Video, 
  Bell, 
  ShieldCheck, 
  Activity, 
  Eye, 
  Radio, 
  Zap, 
  AlertTriangle,
  CheckCircle2,
  Sliders
} from 'lucide-react';

export default function HeroSection() {
  const [pulseState, setPulseState] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseState((prev) => !prev);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
      {/* Background decorative tech grid & ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
              <span>AI-POWERED PATIENT MONITORING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12]">
              Smarter Monitoring. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-navy-900">
                Safer ICU Care.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              An AI-powered video monitoring solution designed to help healthcare teams identify selected patient movements that may require attention and support timely intervention.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 shadow-lg hover:shadow-glow-teal transition-all duration-300"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200"
              >
                <span>Explore How It Works</span>
              </a>
            </div>

            {/* Honest clinical disclaimer line */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Designed to support healthcare professionals, not replace them.</span>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              <div className="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/60 shadow-xs">
                <div className="text-xs uppercase font-semibold text-slate-500">Input Mode</div>
                <div className="text-sm font-bold text-navy-900">Video Vision</div>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/60 shadow-xs">
                <div className="text-xs uppercase font-semibold text-slate-500">Alert Device</div>
                <div className="text-sm font-bold text-teal-700">ESP32 Hardware</div>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/60 shadow-xs">
                <div className="text-xs uppercase font-semibold text-slate-500">Stage</div>
                <div className="text-sm font-bold text-cyan-700">Active Prototype</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-tech Conceptual Interface Illustration */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card with dark glassmorphism */}
              <div className="rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 p-4 sm:p-5 shadow-2xl border border-slate-700/60 relative overflow-hidden">
                
                {/* Glow accents */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Conceptual Software Header Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[11px] tracking-wider text-slate-400">SAFE-ICU-CORE // BED-04</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-teal-950/80 border border-teal-500/30 text-teal-300 text-[10px] font-mono">
                      CV MODEL: RUNNING
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                      FPS: 30.0
                    </span>
                  </div>
                </div>

                {/* Conceptual ICU Video Analysis Viewport */}
                <div className="relative rounded-xl bg-slate-900 aspect-video overflow-hidden border border-slate-800 flex items-center justify-center group">
                  
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

                  {/* Bed & Room Graphic Structure */}
                  <svg className="w-full h-full text-slate-700/60 p-6" viewBox="0 0 400 220" fill="none" stroke="currentColor">
                    {/* ICU Room perspective walls */}
                    <line x1="20" y1="20" x2="100" y2="70" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="380" y1="20" x2="300" y2="70" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="100" y1="70" x2="300" y2="70" strokeWidth="1" />
                    
                    {/* Hospital Bed Frame */}
                    <rect x="120" y="100" width="160" height="70" rx="6" fill="#131c2e" stroke="#334155" strokeWidth="2" />
                    {/* Headboard */}
                    <rect x="105" y="80" width="15" height="90" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                    {/* Footboard */}
                    <rect x="280" y="110" width="12" height="60" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                    {/* Mattress & Blanket */}
                    <path d="M125 115 Q170 110 210 118 T275 125 L275 160 L125 160 Z" fill="#1e2e4a" stroke="#2563eb" strokeWidth="1" opacity="0.8" />
                    {/* Patient silhouette (lying down, hand elevated) */}
                    <circle cx="150" cy="110" r="10" fill="#38bdf8" opacity="0.8" />
                    {/* Torso & arm gesture */}
                    <path d="M150 120 L180 135" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                    {/* Raised Hand gesture */}
                    <path d="M165 125 L160 92" stroke="#2dd4bf" strokeWidth="3.5" strokeLinecap="round" className="animate-pulse" />
                    <circle cx="160" cy="90" r="4" fill="#2dd4bf" />
                    
                    {/* Bedside IV Stand / Monitor post */}
                    <line x1="70" y1="60" x2="70" y2="180" stroke="#475569" strokeWidth="2" />
                    <circle cx="70" cy="60" r="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
                  </svg>

                  {/* Camera Icon in corner showing observation */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur border border-slate-700/80 text-[10px] text-slate-300 font-mono">
                    <Video className="w-3.5 h-3.5 text-teal-400" />
                    <span>OPTICAL SENSOR // CAM-01</span>
                  </div>

                  {/* AI Detection Bounding Box on Raised Hand */}
                  <div className="absolute top-[28%] left-[36%] w-24 h-24 border-2 border-teal-400 rounded-lg bg-teal-500/10 flex flex-col justify-between p-1.5 shadow-glow-teal animate-pulse">
                    <div className="flex items-center justify-between">
                      <span className="bg-teal-500 text-navy-950 font-mono font-bold text-[9px] px-1 rounded">
                        HAND_RAISE
                      </span>
                      <span className="text-[9px] font-mono text-teal-300 font-semibold">96.8%</span>
                    </div>
                    <div className="text-[8px] font-mono text-teal-200">
                      PATTERN: ASSIST_CALL
                    </div>
                  </div>

                  {/* Optical Scan Line */}
                  <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 animate-bounce" style={{ animationDuration: '4s' }} />

                  {/* Watermark notice */}
                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-500 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                    CONCEPTUAL SIMULATION INTERFACE
                  </div>
                </div>

                {/* Lower Hardware Connection & Alert Status Section */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Event Decision Panel */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400">
                      <AlertTriangle className="w-5 h-5 animate-bounce" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] uppercase font-bold text-amber-400 flex items-center gap-1">
                        <span>Event Identified</span>
                      </div>
                      <div className="text-xs font-semibold text-slate-200 truncate">
                        Patient Requesting Assistance
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        Rule: Hand wave &gt; 1.5s
                      </div>
                    </div>
                  </div>

                  {/* ESP32 Prototype Alert Signal Status */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-lg bg-navy-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-5 h-5 text-cyan-400" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-ping" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-600 border-2 border-navy-900" />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase font-bold text-slate-300 flex items-center gap-1">
                          <span>ESP32 Alert Unit</span>
                        </div>
                        <div className="text-xs font-semibold text-slate-300">
                          Hardware Buzzer + Red LED
                        </div>
                        <div className="text-[10px] text-teal-400 font-mono flex items-center gap-1">
                          <Radio className="w-3 h-3 animate-pulse" />
                          <span>SIGNAL: TRIGGERED</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer disclaimer badge */}
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-teal-500" />
                    Integrated Computer Vision &bull; Physical ESP32 Trigger
                  </span>
                  <a href="#prototype" className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-1 text-[11px] font-medium">
                    See Real Hardware &rarr;
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
