import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-6">
              <span className="font-serif italic text-3xl font-medium text-white">Kora</span>
              <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-500 mt-1.5">OS</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The professional operating system for high-performance hospitality venues.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Commerce</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Kitchen Flow</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Staffing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Intelligence</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <p className="text-slate-500 text-sm mb-6">London, United Kingdom</p>
            <button className="text-brand-500 font-bold hover:text-white transition-colors">hello@koraos.com</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-slate-600 text-xs">
          <p>© 2024 KoraOS Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;