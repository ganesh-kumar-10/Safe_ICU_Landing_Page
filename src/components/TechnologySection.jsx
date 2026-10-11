import React from 'react';
import { 
  Eye, 
  Brain, 
  Video, 
  Cpu, 
  ArrowRight, 
  Binary, 
  Terminal, 
  Layers, 
  Zap,
  Code
} from 'lucide-react';

export default function TechnologySection() {
  const techs = [
    {
      icon: Eye,
      title: 'Computer Vision',
      role: 'Spatial & Visual Frame Analysis',
      description: 'Analyzes visual information from video frames.',
      details: 'Extracts spatial landmarks, tracking region boundaries around the patient bed to identify limb trajectories without manual marking.',
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      role: 'Pattern Classification',
      description: 'Supports the identification of selected movement patterns.',
      details: 'Processes multi-frame temporal sequences to distinguish purposeful gestures (such as calling for help) from natural shifting during sleep.',
    },
    {
      icon: Video,
      title: 'Video-Based Monitoring',
      role: 'Optical Input Modality',
      description: 'Uses video as the input for movement analysis.',
      details: 'Standard camera streaming serves as the continuous input pipeline, keeping the system non-contact and non-intrusive for critically ill patients.',
    },
    {
      icon: Cpu,
      title: 'ESP32 Alert Hardware',
      role: 'Embedded Peripheral Trigger',
      description: 'Controls the prototype\'s physical alert components when the required integration and control logic are configured.',
      details: 'Dual-core microcontroller executing embedded C++ firmware to manage GPIO states for the bedside red LED and acoustic buzzer transducer.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Binary className="w-3.5 h-3.5 text-teal-600" />
            <span>Tech Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Technology Behind Safe ICU
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Combining modern computer vision frameworks with practical micro-controller hardware 
            to explore automated movement analysis in acute care settings.
          </p>
        </div>

        {/* 4 Tech Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-xs mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-teal-700 transition-colors">
                    {tech.title}
                  </h3>

                  <div className="text-[11px] font-mono font-semibold text-teal-700 uppercase tracking-wider mb-3">
                    {tech.role}
                  </div>

                  <p className="text-sm font-semibold text-slate-700 mb-3 leading-snug">
                    {tech.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tech.details}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>LAYER 0{idx + 1}</span>
                  <span className="text-teal-600 font-semibold">CONFIGURED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Flow Pipeline Diagram */}
        <div className="mt-14 bg-navy-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <h4 className="text-base font-bold text-slate-100 font-mono">
              Signal Processing & Execution Chain
            </h4>
            <p className="text-xs text-slate-400">
              Deterministic sequence between computer vision computation and physical alerting
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center">
            
            <div className="w-full md:w-1/4 bg-slate-800 p-4 rounded-xl border border-slate-700">
              <div className="text-xs font-mono text-teal-400 mb-1">INPUT</div>
              <div className="text-sm font-bold text-white">Video Frames</div>
              <div className="text-[11px] text-slate-400 mt-1">Optical Stream Capture</div>
            </div>

            <div className="text-teal-400 font-bold rotate-90 md:rotate-0">&rarr;</div>

            <div className="w-full md:w-1/4 bg-slate-800 p-4 rounded-xl border border-slate-700">
              <div className="text-xs font-mono text-cyan-400 mb-1">INFERENCE</div>
              <div className="text-sm font-bold text-white">Deep Learning CV</div>
              <div className="text-[11px] text-slate-400 mt-1">Landmarks & Temporal Logic</div>
            </div>

            <div className="text-teal-400 font-bold rotate-90 md:rotate-0">&rarr;</div>

            <div className="w-full md:w-1/4 bg-slate-800 p-4 rounded-xl border border-slate-700">
              <div className="text-xs font-mono text-amber-400 mb-1">DECISION</div>
              <div className="text-sm font-bold text-white">Alert Protocol</div>
              <div className="text-[11px] text-slate-400 mt-1">Threshold Verification</div>
            </div>

            <div className="text-teal-400 font-bold rotate-90 md:rotate-0">&rarr;</div>

            <div className="w-full md:w-1/4 bg-slate-800 p-4 rounded-xl border border-slate-700">
              <div className="text-xs font-mono text-red-400 mb-1">OUTPUT</div>
              <div className="text-sm font-bold text-white">ESP32 Trigger</div>
              <div className="text-[11px] text-slate-400 mt-1">Buzzer & Red LED</div>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
            Note: System evaluation strictly benchmarks engineering feasibility. No unverified statistical performance claims are made.
          </div>
        </div>

      </div>
    </section>
  );
}
