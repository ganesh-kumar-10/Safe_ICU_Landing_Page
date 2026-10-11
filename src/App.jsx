import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import PrototypeGallery from './components/PrototypeGallery';
import ArchitectureSection from './components/ArchitectureSection';
import InteractiveDemo from './components/InteractiveDemo';
import BenefitsSection from './components/BenefitsSection';
import TechnologySection from './components/TechnologySection';
import AboutSection from './components/AboutSection';
import DemoSection from './components/DemoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PrototypeGallery />
        <ArchitectureSection />
        <InteractiveDemo />
        <BenefitsSection />
        <TechnologySection />
        <AboutSection />
        <DemoSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
