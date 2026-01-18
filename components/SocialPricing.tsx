import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users2, Rocket, Building2 } from 'lucide-react';

const stats = [
  { label: 'Active Venues', val: '500+' },
  { label: 'Monthly Volume', val: '$120M+' },
  { label: 'Uptime SLA', val: '99.99%' },
];

const tiers = [
  { name: 'Core', price: '$89', desc: 'The essential toolkit for ambitious single-site venues.', icon: Rocket, features: ['1 Main POS Station', 'Cloud Inventory', 'Real-time Reports', 'Standard Support'] },
  { name: 'Elite', price: '$199', desc: 'Enhanced management for multi-room operations.', icon: Users2, features: ['3 POS Stations', 'KDS & Tablet Flow', 'Staff Scheduling', 'Priority Support', 'API Access'], popular: true },
  { name: 'Sovereign', price: 'Custom', desc: 'Bespoke infrastructure for global hospitality groups.', icon: Building2, features: ['Unlimited Terminals', 'Dedicated Account Mgr', 'Multi-tenant Logic', 'Custom Dev Support', 'On-site Training'] },
];

const SocialPricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-12 glass rounded-[2.5rem] border-white/5">
              <div className="text-5xl font-light text-white mb-2">{s.val}</div>
              <div className="text-brand-500 font-bold uppercase tracking-widest text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pricing Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Structured for Scaling</h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto">Transparent pricing designed to grow with your business, from boutique startups to global empires.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 ${
              t.popular ? 'bg-slate-900 border-brand-500 shadow-2xl scale-105 z-10' : 'bg-slate-900/40 border-white/10'
            }`}>
              {t.popular && <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em]">Most Selected</div>}
              
              <t.icon className="text-brand-500 mb-8" size={32} />
              <h3 className="text-2xl font-semibold text-white mb-2">{t.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                {t.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
              </div>
              <p className="text-slate-400 text-sm mb-10 min-h-[3rem] font-light">{t.desc}</p>
              
              <button className={`w-full py-4 rounded-2xl font-bold mb-10 transition-all ${
                t.popular ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'bg-white/5 text-white hover:bg-white/10'
              }`}>Get Started</button>

              <div className="h-[1px] w-full bg-white/5 mb-8" />
              <ul className="space-y-4">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-300 text-sm font-light">
                    <Check size={16} className="text-brand-500" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialPricing;