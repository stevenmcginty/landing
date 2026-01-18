import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 relative px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto glass border-white/10 rounded-[3rem] p-16 md:p-24 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Ready to Elevate Your Standard?</h2>
        <p className="text-xl text-slate-400 mb-12 font-light">Join the elite venues globally who trust KoraOS for their critical infrastructure.</p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Business Email" className="flex-1 bg-slate-950 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all" />
          <button className="px-8 py-4 bg-brand-500 text-white font-bold rounded-2xl hover:bg-brand-600 transition-all">Start Free Trial</button>
        </form>
        <p className="mt-6 text-sm text-slate-500">No commitment required. 14-day full access.</p>
      </div>
    </section>
  );
};

export default CTA;