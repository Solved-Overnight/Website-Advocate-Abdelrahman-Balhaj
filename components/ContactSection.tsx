import React from 'react';
import { Phone, MapPin, Mail, Box, Building } from 'lucide-react';
import { ContactDetail } from '../types';

const contactData: ContactDetail[] = [
  { label: 'Call Us', value: '+971 2 633 5000', icon: Phone, action: 'tel:+97126335000' },
  { label: 'P.O. Box', value: '93963, Abu Dhabi', icon: Box },
  { label: 'Visit Us', value: 'Zayed First St., Opp. Grand Stores', icon: MapPin },
  { label: 'Building', value: 'Bin Hayai Bldg, Mezzanine Floor', icon: Building },
  { label: 'Area', value: 'Khalidiya', icon: MapPin },
  { label: 'Email', value: 'info@balhaj-law.ae', icon: Mail, action: 'mailto:info@balhaj-law.ae' }, // Added placeholder email for UI completeness
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm border border-white/5 p-8 transition-all duration-500 hover:border-gold-500/50 hover:bg-black/60 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gold-900/20 border border-gold-500/20 text-gold-400 group-hover:text-gold-200 group-hover:border-gold-400 transition-colors">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">{item.label}</h3>
                  {item.action ? (
                    <a href={item.action} className="text-lg text-white font-serif hover:text-gold-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-white font-serif">{item.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};