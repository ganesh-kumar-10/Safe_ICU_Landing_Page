import React, { useState } from 'react';
import { 
  Camera, 
  Video, 
  Monitor, 
  Cpu, 
  CheckCircle2, 
  Send, 
  CircuitBoard, 
  Volume2, 
  Users, 
  ArrowRight, 
  ArrowDown, 
  Info,
  Server,
  Zap,
  Layers
} from 'lucide-react';

export default function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState('pipeline');

  const nodes = [
    {
      id: 1,
      name: 'Camera',
      category: 'Visual Sensing',
      role: 'Optical capture focused on designated ICU bed monitoring boundary.',
      status: 'Standard Hardware',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      icon: Camera,
    },
    {
      id: 2,
      name: 'Video Input',
      category: 'Stream Ingestion',
      role: 'Frame serialization (RTSP / USB optical stream feed at 30 FPS).',
      status: 'Standard Stream',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      icon: Video,
    },
    {
      id: 3,
      name: 'Host Computer',
      category: 'AI Compute Station',
      role: 'Dedicated PC/workstation running inference pipeline.',
      status: 'Implemented Script',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      icon: Monitor,
    },
    {
      id: 4,
      name: 'CV / Deep Learning',
      category: 'Model Inference',
      role: 'Pose landmark estimation & movement pattern extraction.',
      status: 'Under Development',
      statusColor: 'text-amber-600 bg-amber-50 border-amber-200',
      icon: Cpu,
    },
    {
      id: 5,
      name: 'Event Decision',
      category: 'Logic Evaluator',
      role: 'Evaluates duration & threshold criteria for assistance/safety events.',
      status: 'Rule Engine',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      icon: CheckCircle2,
    },
    {
      id: 6,
      name: 'Alert Command',
      category: 'Protocol Link',
      role: 'Serial/USB or MQTT alert trigger packet sent to controller.',
      status: 'Planned Integration',
      statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
      icon: Send,
    },
    {
      id: 7,
      name: 'ESP32 Controller',
      category: 'Hardware Controller',
      role: 'Receives alert code and executes programmed GPIO pin sequences.',
      status: 'Prototype Verified',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      icon: CircuitBoard,
    },
    {
      id: 8,
      name: 'Red LED & Buzzer',
      category: 'Bedside Signaling',
      role: 'Audible tone alarm and visual optical strobe at patient bedside.',
      status: 'Prototype Verified',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      icon: Volume2,
    },
    {
      id: 9,
      name: 'Healthcare Staff',
      category: 'Clinical Response',
      role: 'ICU nurses & medical staff assess situation and provide care.',
      status: 'Human Decision',
      statusColor: 'text-purple-600 bg-purple-50 border-purple-200',
      icon: Users,
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>Technical Systems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            How the Safe ICU System Fits Together
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The camera supplies video to the processing computer. The AI software analyzes the video 
            and evaluates selected movement patterns. When a configured event is detected, the system 
            can send an alert command to the hardware controller. The ESP32 then controls the physical 
            alert components according to the programmed logic.
          </p>
        </div>

        {/* Technical Architecture Interactive Flow Visual */}
        <div className="mt-16 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold text-navy-900">
                End-to-End Component Map (9 Logical Units)
              </h3>
              <p className="text-xs text-slate-500">
                Separation of AI Compute (Host PC) from Peripheral Signaling (ESP32)
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Active Prototype
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Planned Integration
              </span>
            </div>
          </div>

          {/* Grid Layout of the 9 Architectural Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Phase 1: Ingestion & Vision */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                Phase 1 &bull; Ingestion & Computer
              </div>

              {nodes.slice(0, 3).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-teal-400 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-navy-900">{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-teal-700 mb-1">{item.category}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.role}</p>
                  </div>
                );
              })}
            </div>

            {/* Phase 2: AI Logic & Event Protocol */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                Phase 2 &bull; Intelligence & Decision
              </div>

              {nodes.slice(3, 6).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-teal-400 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-navy-900">{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-teal-700 mb-1">{item.category}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.role}</p>
                  </div>
                );
              })}
            </div>

            {/* Phase 3: Hardware Peripheral & Response */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                Phase 3 &bull; Bedside Hardware & Staff
              </div>

              {nodes.slice(6, 9).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-teal-400 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-navy-900">{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-teal-700 mb-1">{item.category}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.role}</p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Division of Responsibilities Callout */}
          <div className="mt-8 p-5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-navy-900 text-sm flex items-center gap-2">
              <Info className="w-4 h-4 text-teal-600" />
              <span>Architectural Boundary Clarifications:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>
                <strong>AI Compute Location:</strong> Deep learning model inference is executed on the 
                <strong> Host Laptop / PC</strong>, not directly on the ESP32 micro-controller chip.
              </li>
              <li>
                <strong>ESP32 Hardware Role:</strong> The ESP32 is responsible for receiving serial trigger 
                signals and controlling physical bedside output components (the Red LED and Buzzer).
              </li>
              <li>
                <strong>Software-to-Hardware Bridge:</strong> Direct serial/wireless communication bridging the 
                computer's event decision software to the physical ESP32 breadboard is marked as a <strong>Planned Integration</strong>.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
