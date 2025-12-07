import React from 'react';
import { Pattern } from './Pattern';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-24 bg-luxury-charcoal relative overflow-hidden">
      <Pattern opacity={0.03} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 border border-gold-500/30 translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              {/* Using a placeholder that looks like a lawyer */}
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Abdelrahman Balhaj" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 z-20 text-center lg:text-left">
                <h3 className="text-2xl font-serif text-white">Dr. Abdelrahman Balhaj</h3>
                <p className="text-gold-400 text-sm uppercase tracking-widest mt-1">Founder & Managing Partner</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Excellence</span></h2>
            
            <div className="space-y-6 text-slate-300 font-light leading-relaxed">
              <p>
                With decades of experience in the UAE legal framework, Dr. Abdelrahman Balhaj has established a reputation for unwavering dedication and legal precision. His vision was to create a firm that bridges traditional legal values with modern, strategic thinking.
              </p>
              <p>
                "Justice is not just a profession; it is a pursuit of truth. At our firm, we do not merely represent clients; we champion their causes with the full weight of the law and our collective expertise."
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-serif text-white">LL.D</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Doctor of Laws</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-white">Top 1%</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Legal Minds</span>
              </div>
            </div>
            
            <div className="mt-10">
               <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 opacity-50 invert mx-auto lg:mx-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};