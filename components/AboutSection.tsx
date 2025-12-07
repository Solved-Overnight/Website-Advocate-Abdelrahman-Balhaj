import React, { useState } from 'react';
import { Sparkles, Globe, RefreshCcw } from 'lucide-react';
import { generateAboutContent } from '../services/geminiService';
import { GenerateType } from '../types';

export const AboutSection: React.FC = () => {
  const [content, setContent] = useState<string>(
    "Abdelrahman Balhaj Advocates & Legal Consultants is a premier legal firm based in Abu Dhabi. We are dedicated to providing exceptional legal representation and strategic counsel to individuals and corporations. Our practice is built on a foundation of integrity, deep local knowledge, and an unyielding commitment to our clients' success."
  );
  const [loading, setLoading] = useState(false);

  const handleEnhance = async (type: GenerateType) => {
    setLoading(true);
    const newContent = await generateAboutContent(content, type);
    setContent(newContent);
    setLoading(false);
  };

  return (
    <section id="about" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5 hidden xl:block"></div>
      <div className="absolute right-10 top-0 bottom-0 w-px bg-white/5 hidden xl:block"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
           <div className="text-center">
             <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase">Who We Are</span>
             <h2 className="text-3xl md:text-5xl font-serif text-white mt-3">About The Firm</h2>
           </div>
          
          <div className="flex items-center gap-4 w-full justify-center">
             <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent w-1/3"></div>
             <div className="rotate-45 w-2 h-2 border border-gold-500"></div>
             <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent w-1/3"></div>
          </div>

          <div className="relative p-8 md:p-12 border border-gold-500/10 bg-luxury-charcoal/50 backdrop-blur-sm shadow-xl">
             {/* Corner borders */}
             <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-500/40"></div>
             <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-500/40"></div>
             <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-500/40"></div>
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-500/40"></div>

             <div className={`prose prose-invert prose-lg max-w-none transition-opacity duration-300 ${loading ? 'opacity-50 blur-sm' : 'opacity-100'}`}>
                <p className="font-light text-slate-300 leading-relaxed whitespace-pre-line font-serif">
                  {content}
                </p>
             </div>
          </div>

          {/* AI Controls */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => handleEnhance(GenerateType.EXPAND)}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-gold-500/20 hover:border-gold-500/50 transition-all text-sm text-slate-300 group"
            >
              <Sparkles size={16} className="text-gold-400 group-hover:animate-spin" />
              <span>Enhance Description</span>
            </button>
            <button 
              onClick={() => handleEnhance(GenerateType.ARABIC)}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-gold-500/20 hover:border-gold-500/50 transition-all text-sm text-slate-300"
            >
              <Globe size={16} className="text-gold-400" />
              <span>Translate to Arabic</span>
            </button>
             <button 
              onClick={() => setContent("Abdelrahman Balhaj Advocates & Legal Consultants is a premier legal firm based in Abu Dhabi. We are dedicated to providing exceptional legal representation and strategic counsel to individuals and corporations. Our practice is built on a foundation of integrity, deep local knowledge, and an unyielding commitment to our clients' success.")}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-red-500/20 hover:border-red-500/50 transition-all text-sm text-slate-300"
            >
              <RefreshCcw size={16} className="text-red-400" />
              <span>Reset</span>
            </button>
          </div>
          {loading && <p className="text-xs text-gold-400 animate-pulse mt-2">Consulting AI model...</p>}
        </div>
      </div>
    </section>
  );
};