import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PlatformPreview from './components/PlatformPreview';
import Benefits from './components/Benefits';
import SocialPricing from './components/SocialPricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Background from './components/Background';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen text-white font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Background />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Features />
        <PlatformPreview />
        <Benefits />
        <SocialPricing />
        <CTA />
        <Footer />
      </div>

      {/* Floating Demo Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button className="bg-gold-500 text-navy-900 rounded-full px-6 py-3 font-bold shadow-lg shadow-gold-500/20">
          Book Demo
        </button>
      </div>
    </main>
  );
};

export default App;