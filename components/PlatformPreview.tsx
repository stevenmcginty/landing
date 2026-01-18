import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PreviewTab } from '../types';

const tabs: PreviewTab[] = [
  {
    id: 'pos',
    label: 'Point of Sale',
    title: 'The Art of Service',
    description: 'A beautifully fluid interface that disappears into your workflow, allowing your staff to focus on what matters: the guest.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 'kitchen',
    label: 'Kitchen Control',
    title: 'Back of House Mastery',
    description: 'Keep your culinary team in perfect harmony with color-coded prioritization and synchronized ticket routing.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 'analytics',
    label: 'Intelligence',
    title: 'Decisions Defined by Data',
    description: 'Transform raw numbers into strategic growth with immersive visual reports and real-time performance tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bbb652167014?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 'reservations',
    label: 'Guest Relations',
    title: 'Bespoke Table Management',
    description: 'Maximize your floor potential with intelligent booking orchestration and elegant visual floor plans.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000',
  },
];

const PlatformPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="platform" className="py-32 bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">The Interface</span>
          <h2 className="text-4xl md:text-5xl font-extralight text-white">
            Designed for <span className="font-serif italic text-teal-400">Perfect Flow</span>
          </h2>
        </div>

        {/* Premium Tab Nav */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-500 overflow-hidden ${
                activeTab.id === tab.id
                  ? 'text-navy-950 shadow-[0_15px_30px_rgba(0,0,0,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                activeTab.id === tab.id ? 'opacity-100 bg-white' : 'opacity-0 bg-white/5'
              }`} />
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            key={`text-${activeTab.id}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-4xl font-serif italic text-gold-400 mb-6">{activeTab.title}</h3>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">{activeTab.description}</p>
            
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-gold-400/30 flex items-center justify-center mt-1 group-hover:border-gold-400 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Premium Feature Detail {i}</h4>
                    <p className="text-sm text-gray-500">Meticulously optimized for ultra-low latency and peak performance.</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            key={`image-${activeTab.id}`}
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Elegant Device Frame */}
            <div className="relative glass-card border-white/20 p-3 md:p-5 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.6)] group">
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[2.5rem]" />
               <div className="aspect-[16/10] w-full rounded-[1.5rem] overflow-hidden bg-navy-900 relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeTab.image}
                      src={activeTab.image}
                      alt={activeTab.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-navy-900/10 mix-blend-overlay" />
               </div>
            </div>
            
            {/* Floating UI Elements for depth */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-48 p-4 glass-card border-white/10 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                </div>
                <div className="h-2 w-20 bg-white/20 rounded" />
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded mb-2" />
              <div className="h-1.5 w-3/4 bg-white/10 rounded" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;