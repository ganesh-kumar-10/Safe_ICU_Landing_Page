import React from 'react';
import { Shield, Bell, Eye, UserCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Additional Monitoring Support',
      quote: 'Provides another potential source of information about selected patient movements.',
      description:
        'Augments existing ICU monitors by tracking visual kinetic activities that traditional vital sign leads do not capture.',
    },
    {
      icon: Bell,
      title: 'Staff Awareness',
      quote: 'Configured alerts can help draw attention to detected events so staff can assess them.',
      description:
        'Immediate acoustic and optical signals at the bedside help nurses prioritize direct visual assessments when assistance or agitation occurs.',
    },
    {
      icon: Eye,
      title: 'Reduced Reliance on Manual Observation Alone',
      quote: 'Explores how automated video analysis can complement existing observation practices.',
      description:
        'Serves as an attentive technological second set of eyes during busy nursing shifts, medication dispensing, and clinical charting.',
    },
    {
      icon: UserCheck,
      title: 'Non-Wearable Design',
      quote: 'Uses a camera-based monitoring approach rather than requiring wearable movement sensors.',
      description:
        'Eliminates patient skin irritation, accidental wire dislodgement, daily sensor sterilization, and battery replacement maintenance.',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
            <span>Value & Practicality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Built to Support Better Monitoring
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Safe ICU is conceived as an attentive assistant for critical care staff, 
            focusing on realistic improvements to bedside awareness without overpromising automated clinical outcomes.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-teal-300 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-100/60 border border-teal-200/80 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 group-hover:text-teal-700 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">
                        Bedside Monitoring Value
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-800 font-semibold leading-relaxed mb-3">
                    "{item.quote}"
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Supports clinician observational vigilance</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
