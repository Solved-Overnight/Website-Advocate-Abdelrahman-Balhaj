import React from 'react';
import { Map, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-luxury-black border-t border-white/5">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl border border-white/10 bg-luxury-charcoal">
          
          {/* Text Side */}
          <div className="w-full md:w-1/3 p-10 flex flex-col justify-center space-y-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-gold-500/5 z-0"></div>
             <h3 className="relative z-10 text-2xl font-serif text-white">Our Location</h3>
             <p className="relative z-10 text-slate-400 text-sm leading-relaxed">
               Strategically located in Khalidiya, the heart of Abu Dhabi's business district. Our offices are easily accessible from Zayed First Street.
             </p>
             <div className="relative z-10 pt-4">
                <div className="flex items-center gap-3 text-gold-400">
                  <Navigation size={20} />
                  <span className="text-sm font-medium tracking-wide">Opposite Grand Stores</span>
                </div>
             </div>
          </div>

          {/* Map Placeholder Side */}
          <div className="w-full md:w-2/3 min-h-[400px] relative bg-slate-900 group">
            {/* Background Image simulating map texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/800/600?grayscale')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-transform duration-700 group-hover:scale-105">
              <div className="w-20 h-20 rounded-full bg-black/50 border border-gold-500/50 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(170,140,44,0.15)] backdrop-blur-md">
                 <Map className="text-gold-400" size={32} />
              </div>
              <h4 className="text-xl font-serif text-white mb-2">Map View Unavailable</h4>
              <p className="text-slate-500 text-sm max-w-xs">
                We apologize, the interactive map is currently being updated. Please refer to the address details provided.
              </p>
            </div>
          </div>

        </div>
       </div>
    </section>
  );
};