import React from 'react';
import { 
  Camera, 
  Cpu, 
  CheckSquare, 
  BellRing, 
  ArrowRight, 
  ArrowDown, 
  ShieldCheck, 
  UserCheck,
  Server,
  Radio,
  SlidersHorizontal
} from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Video Capture',
      description: 'A camera captures the authorized patient monitoring area.',
      detail: 'Standard optical feed focused strictly on the patient bed envelope without requiring invasive body sensors.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'AI-Based Movement Analysis',
      description: 'Computer vision and deep learning analyze video for selected movement patterns.',
      detail: 'Host computing system processes video frames to detect spatial limb coordinates, gestures, and posture transitions.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      number: '03',
      icon: CheckSquare,
      title: 'Event Identification',
      description: 'The software evaluates detected patterns against the configured event criteria.',
      detail: 'Algorithms distinguish benign movements from critical events such as assistance requests, restlessness, or bed-exit attempts.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      number: '04',
      icon: BellRing,
      title: 'Alert Mechanism',
      description: 'For supported events, the system can trigger an alert through a buzzer, red LED, or notification, enabling staff to assess the situation.',
      detail: 'Alert commands are routed to an ESP32 hardware module activating a high-visibility LED and acoustic buzzer.',
      color: 'from-red-500 to-rose-500',
    },
  ];

  const systemFlow = [
    { name: 'Camera', type: 'Input', desc: 'Optical Sensor' },
    { name: 'Computer / AI Model', type: 'Processing', desc: 'Deep Learning CV' },
    { name: 'Movement Detection', type: 'Inference', desc: 'Skeletal & Posture' },
    { name: 'Event Decision', type: 'Logic', desc: 'Threshold Evaluation' },
    { name: 'ESP32 Hardware', type: 'Controller', desc: 'Buzzer & Red LED' },
    { name: 'Healthcare Staff', type: 'Assessment', desc: 'Clinical Verification' },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-100/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5 text-teal-700" />
            <span>Process & Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            From Video Analysis to Actionable Alerts
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Safe ICU bridges intelligent optical observation with immediate bedside signaling 
            through a clear four-stage operational sequence.
          </p>
        </div>

        {/* 4-Step Process Workflow Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-teal-600 transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mb-3 leading-snug">
                    {step.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                {/* Step indicator arrow for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-100 border border-slate-300 items-center justify-center text-slate-500 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* End-to-End System Pipeline Flow Diagram */}
        <div className="mt-14 bg-navy-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-700/80 shadow-xl">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Radio className="w-4 h-4 text-teal-400" />
                <span>System Pipeline Dataflow</span>
              </h3>
              <p className="text-xs text-slate-400">
                Data sequence from hospital room observation to bedside clinician awareness
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-teal-950 text-teal-300 border border-teal-500/30 text-xs font-mono">
              STAGE: PROTOTYPE ARCHITECTURE
            </span>
          </div>

          {/* Connected Pipeline Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
            {systemFlow.map((node, i) => (
              <div
                key={i}
                className="relative bg-slate-800/90 rounded-xl p-3.5 border border-slate-700 flex flex-col justify-between group hover:border-teal-400 transition-colors"
              >
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-teal-400 block mb-1">
                    {node.type}
                  </span>
                  <div className="text-sm font-bold text-slate-100 leading-tight mb-1">
                    {node.name}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {node.desc}
                </div>

                {/* Flow indicator */}
                {i < systemFlow.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-teal-400 font-bold">
                    &rsaquo;
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mandatory Critical Clinical Note */}
          <div className="mt-6 pt-5 border-t border-slate-800 flex items-start gap-3 bg-slate-850/80 p-4 rounded-xl border border-slate-800">
            <UserCheck className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">Important Clinical Note:</strong>{" "}
              Alerts are intended to support staff awareness. Healthcare professionals must verify events 
              and make all clinical decisions. Safe ICU does not diagnose conditions or guarantee automated emergency dispatch.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
