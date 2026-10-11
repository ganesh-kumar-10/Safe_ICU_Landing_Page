import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Lightbulb, 
  AlertTriangle, 
  CheckCircle, 
  Activity, 
  Radio, 
  ShieldAlert,
  Sparkles,
  Info
} from 'lucide-react';

export default function InteractiveDemo() {
  const [selectedScenario, setSelectedScenario] = useState('idle');
  const [buzzerActive, setBuzzerActive] = useState(false);
  const [ledActive, setLedActive] = useState(false);
  const [eventLog, setEventLog] = useState([
    { time: '12:00:01', event: 'System initialized. Vision loop running at 30 FPS.', status: 'NORMAL' }
  ]);

  const triggerScenario = (scenarioKey) => {
    setSelectedScenario(scenarioKey);
    const timestamp = new Date().toLocaleTimeString();

    if (scenarioKey === 'hand_raise') {
      setBuzzerActive(true);
      setLedActive(true);
      setEventLog((prev) => [
        { time: timestamp, event: 'Hand Raising / Assistance Signal identified for > 1.5s', status: 'ALERT' },
        ...prev.slice(0, 4)
      ]);
    } else if (scenarioKey === 'bed_exit') {
      setBuzzerActive(true);
      setLedActive(true);
      setEventLog((prev) => [
        { time: timestamp, event: 'Potential Bed-Exit: Torso & leg crossed virtual perimeter', status: 'CRITICAL' },
        ...prev.slice(0, 4)
      ]);
    } else if (scenarioKey === 'unusual_movement') {
      setBuzzerActive(true);
      setLedActive(true);
      setEventLog((prev) => [
        { time: timestamp, event: 'Repeated leg movement / unusual agitation pattern detected', status: 'WARNING' },
        ...prev.slice(0, 4)
      ]);
    } else {
      setBuzzerActive(false);
      setLedActive(false);
      setEventLog((prev) => [
        { time: timestamp, event: 'Clinician acknowledged alert. State reset to normal observation.', status: 'NORMAL' },
        ...prev.slice(0, 4)
      ]);
    }
  };

  const resetAll = () => {
    setSelectedScenario('idle');
    setBuzzerActive(false);
    setLedActive(false);
    const timestamp = new Date().toLocaleTimeString();
    setEventLog((prev) => [
      { time: timestamp, event: 'Simulation reset to baseline state.', status: 'NORMAL' },
      ...prev.slice(0, 4)
    ]);
  };

  return (
    <section id="simulation" className="py-24 bg-slate-100/90 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Web Preview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Explore a Simulated Alert
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Test how the proposed system transitions from video event detection to hardware 
            alert signaling in this interactive web demonstration.
          </p>
        </div>

        {/* Simulation Control Deck */}
        <div className="mt-14 max-w-5xl mx-auto bg-navy-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white">
          
          {/* Top Banner with Strict Disclaimer Stamp */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold block">
                  SAFE ICU &bull; SIMULATION CONSOLE
                </span>
                <span className="text-[11px] text-slate-400">
                  Select a test scenario below to simulate the alert sequence
                </span>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
              ILLUSTRATIVE SIMULATION — NOT A LIVE CAMERA FEED
            </div>
          </div>

          {/* Interactive Stage & Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left 7 cols: Simulated Visual Feed */}
            <div className="lg:col-span-7 bg-slate-900 rounded-xl p-4 border border-slate-800 relative overflow-hidden">
              
              {/* Virtual Camera Viewport */}
              <div className="relative aspect-video rounded-lg bg-navy-900/90 border border-slate-800 flex items-center justify-center overflow-hidden">
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

                {/* Animated Graphic according to scenario */}
                <div className="text-center p-6 space-y-3 z-10">
                  {selectedScenario === 'idle' && (
                    <div className="space-y-2">
                      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="font-mono text-sm text-emerald-400 font-bold">STATUS: STABLE MONITORING</div>
                      <div className="text-xs text-slate-400">Patient resting within safety envelope. No anomalies detected.</div>
                    </div>
                  )}

                  {selectedScenario === 'hand_raise' && (
                    <div className="space-y-2 animate-in zoom-in-95 duration-200">
                      <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 animate-pulse">
                        <AlertTriangle className="w-8 h-8" />
                      </div>
                      <div className="font-mono text-sm text-amber-300 font-bold">EVENT: HAND GESTURE ASSISTANCE</div>
                      <div className="text-xs text-amber-200/90">Upper extremity raised above threshold for 1.8 seconds.</div>
                    </div>
                  )}

                  {selectedScenario === 'bed_exit' && (
                    <div className="space-y-2 animate-in zoom-in-95 duration-200">
                      <div className="w-16 h-16 mx-auto rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center text-red-400 animate-bounce">
                        <ShieldAlert className="w-8 h-8" />
                      </div>
                      <div className="font-mono text-sm text-red-400 font-bold">EVENT: BED-EXIT PRE-EMPTION</div>
                      <div className="text-xs text-red-200">Virtual perimeter tripwire crossed. Risk of unassisted descent.</div>
                    </div>
                  )}

                  {selectedScenario === 'unusual_movement' && (
                    <div className="space-y-2 animate-in zoom-in-95 duration-200">
                      <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 animate-pulse">
                        <Activity className="w-8 h-8" />
                      </div>
                      <div className="font-mono text-sm text-cyan-300 font-bold">EVENT: UNUSUAL KINETIC PATTERN</div>
                      <div className="text-xs text-cyan-200">Persistent leg agitation detected over 30 frame window.</div>
                    </div>
                  )}
                </div>

                {/* Simulated Bounding Box for active event */}
                {selectedScenario !== 'idle' && (
                  <div className="absolute inset-4 border-2 border-red-500/60 rounded-lg pointer-events-none animate-pulse" />
                )}

                {/* Status Bar inside video */}
                <div className="absolute top-2 left-2 flex items-center gap-2 text-[10px] font-mono text-slate-300 bg-black/60 px-2 py-1 rounded">
                  <span className={`w-2 h-2 rounded-full ${selectedScenario === 'idle' ? 'bg-emerald-500' : 'bg-red-500 animate-ping'}`} />
                  <span>SIM_CAM_01</span>
                </div>
              </div>

              {/* Hardware Signaling Indicator Panel */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                
                {/* Red LED Indicator */}
                <div className={`p-3 rounded-lg border flex items-center gap-3 transition-all ${
                  ledActive
                    ? 'bg-red-950/80 border-red-500/80 text-red-200 shadow-glow-red'
                    : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    ledActive ? 'bg-red-600 text-white animate-ping' : 'bg-slate-800 text-slate-600'
                  }`}>
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider">Bedside Red LED</div>
                    <div className="text-[10px] font-mono">
                      {ledActive ? 'GPIO_HIGH // FLASHING' : 'GPIO_LOW // OFF'}
                    </div>
                  </div>
                </div>

                {/* Piezo Buzzer Indicator */}
                <div className={`p-3 rounded-lg border flex items-center gap-3 transition-all ${
                  buzzerActive
                    ? 'bg-amber-950/80 border-amber-500/80 text-amber-200'
                    : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    buzzerActive ? 'bg-amber-500 text-navy-950 animate-bounce' : 'bg-slate-800 text-slate-600'
                  }`}>
                    {buzzerActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider">Acoustic Buzzer</div>
                    <div className="text-[10px] font-mono">
                      {buzzerActive ? 'AUDIO_PULSE // ACTIVE' : 'SILENT // STANDBY'}
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right 5 cols: Interactive Trigger Buttons & System Log */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                Select Simulation Scenario
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => triggerScenario('hand_raise')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                    selectedScenario === 'hand_raise'
                      ? 'bg-teal-600 border-teal-400 text-white shadow-glow-teal'
                      : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-teal-400" />
                    <span>1. Hand Raising / Assistance Signal</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-80">TEST &rarr;</span>
                </button>

                <button
                  onClick={() => triggerScenario('unusual_movement')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                    selectedScenario === 'unusual_movement'
                      ? 'bg-cyan-600 border-cyan-400 text-white shadow-glow-cyan'
                      : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-cyan-400" />
                    <span>2. Unusual Limb / Agitation Movement</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-80">TEST &rarr;</span>
                </button>

                <button
                  onClick={() => triggerScenario('bed_exit')}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                    selectedScenario === 'bed_exit'
                      ? 'bg-rose-600 border-rose-400 text-white shadow-glow-red'
                      : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-rose-400" />
                    <span>3. Potential Bed-Exit Attempt</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-80">TEST &rarr;</span>
                </button>

                <button
                  onClick={resetAll}
                  className="w-full text-left p-2.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Acknowledge / Reset to Normal</span>
                </button>
              </div>

              {/* Event Log Output */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Simulation Event Log</span>
                  <span className="text-[9px] text-teal-400">REALTIME</span>
                </div>
                <div className="bg-black/60 rounded-xl p-3 border border-slate-800 font-mono text-[10px] space-y-1.5 max-h-36 overflow-y-auto">
                  {eventLog.map((log, i) => (
                    <div key={i} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-slate-500">{log.time}</span>
                      <span className={
                        log.status === 'ALERT' ? 'text-amber-400' :
                        log.status === 'CRITICAL' ? 'text-red-400 font-bold' :
                        log.status === 'WARNING' ? 'text-cyan-400' : 'text-emerald-400'
                      }>
                        [{log.status}]
                      </span>
                      <span className="text-slate-300">{log.event}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Honest Disclaimer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
            <Info className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>
              This simulation demonstrates software state transitions for evaluator review. 
              It does not connect to a live hospital camera, run an active cloud neural network, or control physical breadboard pins remotely.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
