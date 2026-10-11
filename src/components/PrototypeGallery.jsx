import React, { useState } from 'react';
import { 
  Cpu, 
  Lightbulb, 
  Volume2, 
  Maximize2, 
  X, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle,
  Wrench,
  CircuitBoard
} from 'lucide-react';

export default function PrototypeGallery() {
  const [activeImage, setActiveImage] = useState(null);

  const photos = [
    {
      src: '/images/safe-icu-prototype-1.jpeg',
      alt: 'Physical Safe ICU Hardware Setup showing ESP32 board, solderless breadboard, red LED, buzzer, and jumper wire connections',
      title: 'Safe ICU Hardware Setup',
      subtitle: 'Overall Physical Hardware Arrangement',
      badge: 'Benchtop Assembly',
      desc: 'Overall view of the solderless breadboard setup demonstrating the ESP32-WROOM-32 micro-controller, red LED alert indicator, active buzzer transducer, and jumper wire routing.',
    },
    {
      src: '/images/safe-icu-prototype-2.jpeg',
      alt: 'Closer view of ESP32 development board, USB serial power connection, red LED, buzzer, and circuit connections',
      title: 'ESP32 and Alert Components',
      subtitle: 'Detailed Circuit Connections & Power Interface',
      badge: 'Circuit Close-up',
      desc: 'Close-up perspective detailing the ESP32 board pinouts, USB serial power/programming interface, current-limiting resistor on the LED, and acoustic buzzer connections.',
    },
  ];

  const components = [
    {
      icon: Cpu,
      title: 'ESP32 Development Board',
      role: 'Microcontroller & Signal Trigger',
      spec: 'Dual-core Xtensa 32-bit MCU with WiFi/BLE support; drives GPIO lines to signal alert states.',
    },
    {
      icon: Lightbulb,
      title: 'LED Status Indicator',
      role: 'Visual Optical Warning',
      spec: 'High-luminance red LED with series current-limiting resistor for immediate bedside peripheral sightline alert.',
    },
    {
      icon: Volume2,
      title: 'Buzzer Alert Mechanism',
      role: 'Acoustic Attention Trigger',
      spec: 'Piezo buzzer generating audible tone pulses when configured safety event thresholds are reached.',
    },
  ];

  return (
    <section id="prototype" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative circuitry background */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold tracking-wider uppercase">
            <CircuitBoard className="w-3.5 h-3.5 text-teal-400" />
            <span>PHYSICAL PROTOTYPE — DEVELOPMENT IN PROGRESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Working Prototype
          </h2>

          <div className="text-xl font-semibold text-teal-400">
            Turning Intelligent Monitoring into Real-World Hardware
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our Safe ICU prototype uses an ESP32 development board, a red LED, and a buzzer to demonstrate 
            the hardware alert mechanism. The planned system connects video-based AI analysis with physical 
            or software alerts to help healthcare staff identify selected patient movements that may require attention.
          </p>

          <div className="pt-2">
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-navy-950 bg-teal-400 hover:bg-teal-300 shadow-glow-teal transition-all"
            >
              <span>Explore System Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Real Prototype Photo Showcase Gallery */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {photos.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/80 rounded-2xl border border-slate-700/80 p-5 shadow-2xl flex flex-col justify-between group hover:border-teal-500/50 transition-all duration-300"
            >
              {/* Image Container with contain fit and lightbox trigger */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center min-h-[300px] sm:min-h-[380px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto max-h-[440px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Enlarge Button Overlay */}
                <button
                  onClick={() => setActiveImage(item)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-lg bg-navy-900/90 text-teal-300 hover:text-white hover:bg-teal-600 border border-slate-700 backdrop-blur shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-teal-400"
                  aria-label={`Enlarge ${item.title}`}
                  title="Click to Enlarge"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur border border-slate-700 text-[11px] font-mono text-teal-300">
                  {item.badge}
                </div>
              </div>

              {/* Caption and Information */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    PHOTO 0{index + 1}
                  </span>
                </div>
                <div className="text-xs font-semibold text-teal-400 uppercase tracking-wide">
                  {item.subtitle}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Three Specific Component Labels Below Images */}
        <div className="mt-14 pt-10 border-t border-slate-800">
          <div className="text-center mb-8">
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 font-mono">
              Hardware Subsystem Breakdown
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/80 hover:border-teal-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-950 border border-teal-500/30 flex items-center justify-center text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-white">{comp.title}</div>
                      <div className="text-xs font-semibold text-teal-400">{comp.role}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {comp.spec}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mandatory Engineering Disclaimer Box */}
        <div className="mt-10 p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Prototype Integrity Disclaimer:</strong>{" "}
            Photographs show the current physical hardware prototype. Full integration with the AI detection 
            software should not be assumed unless independently demonstrated. The breadboard circuit currently 
            verifies serial/GPIO signaling to the alert buzzer and red LED.
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors z-20"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="flex items-center justify-center bg-black/60 rounded-xl overflow-hidden max-h-[70vh]">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4">
              <h4 className="text-lg font-bold text-white">{activeImage.title}</h4>
              <p className="text-sm text-slate-300 mt-1">{activeImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
