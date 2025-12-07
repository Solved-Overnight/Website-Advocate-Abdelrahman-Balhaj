import React from 'react';
import { Scale, ArrowRight } from 'lucide-react';
import { Pattern } from './Pattern';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Navbar height buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-luxury-black pt-20">
      {/* Background with Parallax-like feel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Adjusted gradient: clear on the right to show image, dark on left for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        
        {/* New Premium Background Image: Dubai Skyline Night/Dusk */}
        <img 
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Dubai Skyline Luxury" 
          className="w-full h-full object-cover animate-slow-pan opacity-50"
        />
      </div>

      <Pattern opacity={0.05} />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Content - Editorial Style with added padding */}
        <div className="space-y-8 animate-fade-in-up flex flex-col justify-center pl-4 md:pl-16 lg:pl-28">
          <div className="flex items-center gap-4">
             <div className="h-[2px] w-12 bg-gold-500"></div>
             <span className="text-gold-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">Premier Legal Consultancy</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.2] tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Trusted</span>
            <span className="block italic text-gold-500">Authority.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Unwavering</span>
            <span className="block text-gold-500">Justice.</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-display italic tracking-wide max-w-lg leading-relaxed border-l-2 border-gold-500/30 pl-6 ml-2">
            Abdelrahman Balhaj Advocates provides world-class legal representation in Abu Dhabi, bridging traditional values with modern strategic counsel.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a 
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group relative px-8 py-4 bg-gold-500 text-white font-serif tracking-wider overflow-hidden w-fit shadow-[0_0_30px_rgba(170,140,44,0.3)] text-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
              <span className="relative flex items-center gap-3 font-semibold">
                Schedule Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#services"
              onClick={(e) => handleScrollTo(e, 'services')}
              className="group px-8 py-4 border border-white/20 text-white font-serif tracking-wider hover:bg-white/5 transition-colors w-fit backdrop-blur-sm text-sm"
            >
              Our Practice Areas
            </a>
          </div>
        </div>

        {/* Right Content - Floating Glass Card (Hidden on mobile) */}
        <div className="hidden lg:flex justify-end items-center h-full animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-96 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 p-10 flex flex-col gap-8 transform rotate-6 hover:rotate-0 transition-all duration-700 hover:shadow-[0_0_50px_rgba(170,140,44,0.15)] group">
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-bl-full -z-10"></div>
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/10 rounded-tr-full -z-10"></div>
             
             <div className="absolute -top-10 -right-10 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Scale size={180} className="text-gold-500" />
             </div>
             
             <div>
               <div className="flex items-start">
                  <span className="text-7xl font-serif text-white font-bold">20</span>
                  <span className="text-gold-500 text-5xl font-serif mt-2">+</span>
               </div>
               <div className="text-sm uppercase tracking-[0.2em] text-gold-400 mt-2 font-semibold">Years of Experience</div>
             </div>

             <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"></div>

             <div className="space-y-4 relative z-10">
               <p className="text-sm text-slate-300 leading-relaxed font-light italic">
                 "A legacy built on winning complex cases and protecting our clients' interests with absolute dedication."
               </p>
               
               <div className="flex items-center gap-3 pt-2">
                 <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-luxury-black font-serif font-bold text-sm shadow-lg">AB</div>
                 <div>
                    <div className="text-sm text-white font-medium">Dr. Abdelrahman Balhaj</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Founder</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Elegant Vertical Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 hidden md:block pb-8">
        <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="flex flex-col items-center gap-2 group cursor-pointer">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-60 group-hover:h-24 transition-all duration-700 ease-in-out"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500/70 group-hover:text-gold-400 transition-colors">Scroll</span>
        </a>
      </div>
    </section>
  );
};