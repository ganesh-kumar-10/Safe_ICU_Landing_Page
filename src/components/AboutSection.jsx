import React from 'react';
import { Heart, ShieldCheck, UserCheck, BookOpen, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const principles = [
    {
      icon: Heart,
      title: 'Patient-Centered Design',
      description:
        'Prioritizing patient comfort and dignity through non-invasive optical analysis that avoids encumbering wearables, adhesives, or uncomfortable physical sensors.',
    },
    {
      icon: ShieldCheck,
      title: 'Responsible AI Development',
      description:
        'Building movement models strictly for assisting observational awareness, maintaining rigorous privacy standards and transparent architectural boundaries.',
    },
    {
      icon: UserCheck,
      title: 'Human Oversight',
      description:
        'Emphasizing that clinical judgment remains paramount. Automated detection alerts provide cues for human assessment rather than making clinical choices.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-teal-600" />
            <span>Project Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            About Safe ICU
          </h2>
        </div>

        {/* Core Narrative Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed font-normal">
            Safe ICU is a developing healthcare technology project exploring how AI-powered video analysis can assist healthcare professionals in identifying selected patient movements that may require attention.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed font-normal">
            Our goal is to develop a practical monitoring-support system that combines computer vision, deep learning, and a physical alert mechanism to help staff remain aware of potentially important patient activities.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed font-medium text-navy-900 border-l-4 border-teal-600 pl-4 py-1 italic bg-teal-50/50 rounded-r-lg">
            We believe technology should support healthcare professionals while respecting patient privacy, dignity, and the importance of human judgment.
          </p>
        </div>

        {/* 3 Core Ethical Principles */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-navy-900">
              Guiding Principles of Our Work
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Foundational pillars driving our prototype design and ongoing engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-teal-400 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-navy-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-teal-700 font-semibold uppercase">
                    Core Commitment 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Stage Disclosure Note */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500">
          <strong>Academic & Engineering Disclosure:</strong> Safe ICU is an ongoing engineering research prototype. 
          It is not currently commercially deployed, clinically certified, or approved by medical regulatory authorities.
        </div>

      </div>
    </section>
  );
}
