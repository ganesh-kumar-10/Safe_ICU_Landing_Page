import React from 'react';
import { 
  Hand, 
  Activity, 
  HeartPulse, 
  LogOut, 
  BellRing, 
  Eye, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Hand,
      title: 'Hand Gesture Detection',
      description:
        'Designed to identify selected hand-raising and waving gestures that may indicate a patient is requesting assistance.',
      status: 'Prototype',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      technicalNote:
        'Tracks hand elevation landmarks above torso baseline with temporal consistency checks to reduce false positives.',
    },
    {
      icon: Activity,
      title: 'Movement Monitoring',
      description:
        'Analyzes selected patient movements, including leg movement patterns, to help identify activities that may need attention.',
      status: 'In Development',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
      technicalNote:
        'Analyzes repetitive kinetic fluctuations and limb velocity changes in designated monitoring zones.',
    },
    {
      icon: HeartPulse,
      title: 'Oxygen Mask Safety',
      description:
        'Planned capability to identify potential oxygen mask removal and alert healthcare staff.',
      status: 'Planned Feature',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
      technicalNote:
        'Facial boundary tracking and occlusion estimation to detect when protective respiratory masks become dislodged.',
    },
    {
      icon: LogOut,
      title: 'Bed-Exit Monitoring',
      description:
        'Planned capability to identify movement patterns associated with attempts to leave a hospital bed.',
      status: 'Planned Feature',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
      technicalNote:
        'Virtual perimeter tripwires along bed edges to signal when torso or legs cross designated safe boundaries.',
    },
    {
      icon: BellRing,
      title: 'Buzzer and LED Alerts',
      description:
        'An ESP32-based hardware prototype demonstrates a physical alert mechanism using a buzzer and red LED.',
      status: 'Prototype',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      technicalNote:
        'Direct hardware triggering using ESP32 GPIO pins driving an acoustic transducer and bright indicator LED.',
    },
    {
      icon: Eye,
      title: 'Non-Wearable Monitoring Approach',
      description:
        'The proposed approach uses video-based analysis rather than requiring the patient to wear additional movement sensors.',
      status: 'Core Architecture',
      statusColor: 'bg-teal-50 text-teal-700 border-teal-200',
      technicalNote:
        'Zero skin-contact requirements, eliminating wire entanglement hazards, pressure sores, and battery charging chores.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Intelligent Monitoring, Designed Around Patient Safety
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every feature is developed with a clear focus on ICU safety priorities, 
            transparently categorizing working hardware prototypes from ongoing and planned vision models.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-teal-300 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Status Label */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border ${feature.statusColor}`}
                    >
                      {feature.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-teal-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="text-[11px] font-medium text-slate-500 leading-normal">
                    <span className="font-semibold text-slate-700">Engineering Approach:</span> {feature.technicalNote}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Legend Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
          <div className="font-semibold text-slate-800">Status Verification Legend:</div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span><strong>Prototype:</strong> Functional hardware or verified detection script</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span><strong>In Development:</strong> Model training and gesture tuning underway</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span><strong>Planned Feature:</strong> Architectural roadmap item</span>
          </div>
        </div>

      </div>
    </section>
  );
}
