import React from 'react';
import { Layers, HeartHandshake, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="px-4 py-8 md:py-0">
            <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Layers className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">All-in-One Solution</h3>
            <p className="text-gray-400 leading-relaxed">
              Replace 5+ disjointed systems with one unified platform. No more syncing errors or data silos.
            </p>
          </div>

          <div className="px-4 py-8 md:py-0">
            <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <HeartHandshake className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Built for Hospitality</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed by restaurateurs, not just engineers. We understand the chaotic reality of a Friday night service.
            </p>
          </div>

          <div className="px-4 py-8 md:py-0">
            <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <TrendingUp className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Scales With You</h3>
            <p className="text-gray-400 leading-relaxed">
              From a single coffee cart to a multi-national franchise. KoraOS grows effortlessly with your ambition.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;