import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Firm', href: '#about' },
  { label: 'Practice Areas', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 90; // Approx navbar height + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded border transition-colors duration-300 ${isScrolled ? 'border-gold-500 bg-gold-900/20' : 'border-white/20 bg-black/20'}`}>
              <Scale className="text-gold-400 w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-serif font-bold text-sm md:text-lg lg:text-xl tracking-wider leading-none whitespace-nowrap">ABDELRAHMAN BALHAJ</span>
            </div>
          </div>

          {/* Desktop Nav - Visible on md+ */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors uppercase tracking-widest relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 lg:px-6 lg:py-2 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-white transition-all duration-300 text-[10px] lg:text-xs font-bold tracking-widest uppercase whitespace-nowrap"
            >
              Consult Now
            </a>
          </div>

          {/* Mobile Menu Button - Visible on sm and below */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-luxury-black border-b border-gold-900/50 shadow-2xl animate-fade-in-up h-screen overflow-y-auto pb-20">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-300 hover:text-gold-400 py-4 border-b border-white/5 font-serif text-lg"
              >
                {item.label}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-4 px-6 py-4 bg-gold-500 text-white text-center font-bold tracking-widest uppercase"
            >
              Consult Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};