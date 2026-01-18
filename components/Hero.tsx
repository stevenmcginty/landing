import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, BarChart3, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-44 pb-32 overflow-hidden flex flex-col items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-purple/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/10 text-slate-300 text-xs font-semibold tracking-widest uppercase mb-10">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_8px_#3b82f6]" />
            Enterprise-Grade Infrastructure
          </div>

          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight leading-[1.1]">
            Management <span className="font-serif italic text-brand-500">Redefined</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            The intelligent operating system for world-class hospitality venues. 
            Unified commerce, kitchen flow, and guest experience in one seamless interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
            <button className="px-10 py-5 rounded-2xl bg-brand-500 text-white font-bold text-lg shadow-xl shadow-brand-500/20 hover:scale-[1.02] transition-all flex items-center gap-2 group">
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-2xl glass text-white font-semibold hover:bg-white/5 transition-all flex items-center gap-2">
              View the Ecosystem
            </button>
          </div>
        </motion.div>

        {/* Clean Device Stack */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Main Display */}
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative z-20 rounded-[2.5rem] border-8 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden aspect-[16/10] group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-transparent pointer-events-none" />
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-105 transition-transform duration-[3s]" alt="Dashboard" />
            
            {/* Overlay UI elements */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="glass p-6 rounded-2xl border-white/10 w-64 text-left">
                <BarChart3 className="text-brand-500 mb-3" size={24} />
                <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                <div className="h-1.5 w-full bg-white/10 rounded" />
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/20"><Globe size={20} className="text-accent-teal" /></div>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/20"><Shield size={20} className="text-brand-500" /></div>
              </div>
            </div>
          </motion.div>

          {/* Floating Tablet */}
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: -160, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="absolute -left-10 bottom-20 w-[400px] h-[300px] rounded-3xl border-4 border-slate-700 bg-slate-800 shadow-2xl z-30 hidden lg:block overflow-hidden">
             <img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-50" alt="Tablet POS" />
          </motion.div>

          {/* Background Glow behind devices */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 blur-[150px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;