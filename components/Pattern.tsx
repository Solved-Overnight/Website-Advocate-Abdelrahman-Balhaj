import React from 'react';

export const Pattern: React.FC<{ opacity?: number }> = ({ opacity = 0.03 }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0" 
      style={{ opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <rect x="25" y="25" width="10" height="10" transform="rotate(45 30 30)" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-transparent to-luxury-black/90"></div>
    </div>
  );
};