import React from 'react';
import { Scale, Phone, Mail, MapPin, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
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
    <footer className="bg-black border-t border-gold-900/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Scale className="text-gold-500" size={28} />
              <div>
                 <span className="block text-xl font-serif text-white tracking-wide font-bold">Abdelrahman Balhaj</span>
                 <span className="text-xs text-gold-400 uppercase tracking-widest">Advocates & Consultants</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              A distinguished legal consultancy providing comprehensive solutions with a focus on integrity, excellence, and results in the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleScrollTo(e, 'home')}
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScrollTo(e, 'about')}
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleScrollTo(e, 'services')}
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                >
                  Practice Areas
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleScrollTo(e, 'services')}
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                >
                  Corporate Law
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleScrollTo(e, 'services')}
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                >
                  Litigation
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleScrollTo(e, 'services')}
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                >
                  Family Law
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleScrollTo(e, 'services')}
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                >
                  Real Estate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-6">
            <h4 className="text-white font-serif text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
               <li className="flex items-center gap-3 text-slate-400 text-sm">
                 <Phone size={16} className="text-gold-500" />
                 <span>+971 2 633 5000</span>
               </li>
               <li className="flex items-center gap-3 text-slate-400 text-sm">
                 <Mail size={16} className="text-gold-500" />
                 <span>info@balhaj-law.ae</span>
               </li>
               <li className="flex items-start gap-3 text-slate-400 text-sm">
                 <MapPin size={16} className="text-gold-500 mt-1 flex-shrink-0" />
                 <span>Zayed First St., Khalidiya, Abu Dhabi</span>
               </li>
            </ul>
            
            <div className="pt-6 border-t border-white/10">
               <div className="flex gap-4">
                 <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:bg-gold-500 hover:text-white transition-all duration-300 group" aria-label="LinkedIn">
                   <Linkedin size={18} />
                 </a>
                 <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:bg-gold-500 hover:text-white transition-all duration-300 group" aria-label="Twitter">
                   <Twitter size={18} />
                 </a>
                 <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:bg-gold-500 hover:text-white transition-all duration-300 group" aria-label="Instagram">
                   <Instagram size={18} />
                 </a>
                  <a href="https://wa.me/97126335000" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-slate-400 hover:bg-gold-500 hover:text-white transition-all duration-300 group" aria-label="WhatsApp">
                   <MessageCircle size={18} />
                 </a>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Abdelrahman Balhaj Advocates. All rights reserved.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-xs text-slate-600 hover:text-gold-400 transition-colors">Privacy Policy</a>
             <a href="#" className="text-xs text-slate-600 hover:text-gold-400 transition-colors">Terms of Service</a>
             <a href="#" className="text-xs text-slate-600 hover:text-gold-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};