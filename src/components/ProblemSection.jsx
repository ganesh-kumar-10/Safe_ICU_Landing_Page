import React from 'react';
import { EyeOff, AlertCircle, Clock, Stethoscope, ShieldAlert, CheckCircle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: EyeOff,
      title: 'Continuous Observation Challenges',
      description:
        'Monitoring several patients simultaneously can make continuous visual observation difficult.',
      badge: 'Visual Coverage',
      detail:
        'Even in high-dependency environments, healthcare professionals cannot maintain uninterrupted sightlines on every patient bed continuously.',
    },
    {
      icon: AlertCircle,
      title: 'Potential Safety Risks',
      description:
        'Movements such as removing an oxygen mask or attempting to leave a bed may require timely staff assessment.',
      badge: 'Critical Events',
      detail:
        'Rapid physical shifts, dislodged medical equipment, or unassisted bed-exit maneuvers can occur in a matter of seconds between routine checks.',
    },
    {
      icon: Clock,
      title: 'Staff Workload',
      description:
        'Nurses must balance patient observation with treatment, documentation, and other essential clinical duties.',
      badge: 'Workflow Balance',
      detail:
        'Demanding medication schedules, electronic charting, and direct patient procedures draw clinical attention away from passive observation.',
    },
  ];

  return (
    <section id="problem" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinical Reality</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Every Moment Matters in Critical Care
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            ICU teams care for critically ill patients while managing multiple responsibilities. 
            Additional monitoring support may help staff identify selected patient activities that require attention.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-teal-300 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between"
              >
                {/* Top Accent line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-teal-500/0 to-transparent group-hover:via-teal-500/80 transition-all duration-300 rounded-full" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/60 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-700 font-medium leading-relaxed mb-4">
                    "{item.description}"
                  </p>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  <span>Requires prompt clinical assessment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supportive perspective banner */}
        <div className="mt-14 p-6 rounded-2xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-100">
              Technology designed to augment vigilance, not replace clinical care.
            </h4>
            <p className="text-sm text-slate-300">
              Safe ICU is built to assist staff by acting as an attentive second pair of eyes at the bedside.
            </p>
          </div>
          <a
            href="#how-it-works"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-all shadow-md"
          >
            <span>See How Safe ICU Solves This</span>
            &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
