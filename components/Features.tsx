import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Monitor, Smartphone, UtensilsCrossed, BrainCircuit, Users, Landmark, LayoutDashboard } from 'lucide-react';

const features = [
  { title: 'Payment Orchestration', desc: 'Accept every modern currency with multi-rail processing and instant settlement.', icon: CreditCard, color: 'text-brand-500' },
  { title: 'Culinary Display', desc: 'Coordinate complex kitchen flows with intelligent order routing and timing.', icon: Monitor, color: 'text-accent-teal' },
  { title: 'Executive Mobility', desc: 'Real-time visibility and control across your entire estate from any device.', icon: LayoutDashboard, color: 'text-brand-500' },
  { title: 'Inventory Intel', desc: 'Automated stock management with predictive restock triggers and wastage audits.', icon: BrainCircuit, color: 'text-accent-purple' },
  { title: 'Floor Mastery', desc: 'Sophisticated table orchestration with dynamic floor-plans and guest CRM.', icon: UtensilsCrossed, color: 'text-brand-500' },
  { title: 'Talent Suite', desc: 'Optimized scheduling and integrated payroll for modern hospitality teams.', icon: Users, color: 'text-accent-teal' },
  { title: 'Fiscal Treasury', desc: 'Complete financial ledger with multi-tax support and supplier reconciliation.', icon: Landmark, color: 'text-brand-500' },
  { title: 'Guest Interactive', desc: 'Mobile-first loyalty and ordering experiences that drive retention.', icon: Smartphone, color: 'text-accent-cyan' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl text-left">
            <span className="brand-gradient font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Platform Core</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Built for High Performance</h2>
            <p className="text-slate-400 font-light text-lg">Eight specialized modules designed to harmonize your operation and eliminate friction.</p>
          </div>
          <button className="px-8 py-3 rounded-xl glass border-brand-500/20 text-brand-500 hover:bg-brand-500 hover:text-white transition-all">Explore Documentation</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group p-8 rounded-3xl glass hover:bg-slate-800/60 transition-all border-white/5 glow-border">
              <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform`}>
                <f.icon className={f.color} size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{f.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;