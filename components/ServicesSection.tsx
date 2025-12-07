import React from 'react';
import { Gavel, Building2, Users, Briefcase, Scale, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Corporate Law",
    description: "Strategic counsel for business formation, mergers, acquisitions, and corporate governance in the UAE.",
    icon: Building2
  },
  {
    title: "Litigation & Dispute",
    description: "Aggressive representation in civil, commercial, and criminal courts across all UAE jurisdictions.",
    icon: Gavel
  },
  {
    title: "Family Law",
    description: "Compassionate handling of divorce, custody, inheritance, and personal status matters with discretion.",
    icon: Users
  },
  {
    title: "Real Estate",
    description: "Comprehensive legal support for property transactions, development disputes, and tenancy laws.",
    icon: Briefcase
  },
  {
    title: "Arbitration",
    description: "Expert resolution of commercial disputes through local and international arbitration centers.",
    icon: Scale
  },
  {
    title: "Criminal Defense",
    description: "Rigorous defense strategies for individuals facing criminal charges, ensuring fair representation.",
    icon: ShieldCheck
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-luxury-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-3 mb-6">Legal Practice Areas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to the unique complexities of the UAE legal landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-luxury-card border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 bg-black border border-gold-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold-400 transition-all duration-500 relative z-10">
                <service.icon className="text-gold-400 w-7 h-7" />
              </div>

              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-200 transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm relative z-10">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="uppercase tracking-wider text-xs">Learn More</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};