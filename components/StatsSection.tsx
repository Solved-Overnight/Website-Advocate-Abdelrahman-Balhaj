import React, { useEffect, useState, useRef } from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Successful Cases' },
  { value: '100%', label: 'Client Dedication' },
  { value: '24/7', label: 'Support Available' },
];

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Parse the numeric part and surrounding text structure
  // Example: "20+" -> number: 20, prefix: "", suffix: "+"
  // Example: "24/7" -> number: 24, prefix: "", suffix: "/7"
  const numberMatch = value.match(/\d+/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0]) : 0;
  const startIndex = numberMatch ? numberMatch.index || 0 : 0;
  const prefix = value.substring(0, startIndex);
  const suffix = numberMatch ? value.substring(startIndex + numberMatch[0].length) : value;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current && targetNumber > 0) {
          hasAnimated.current = true;
          
          const duration = 2000; // 2 seconds animation
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quart function for smooth deceleration
            const ease = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(ease * targetNumber));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNumber);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 } // Start when 20% visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-luxury-black relative z-10 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-luxury-card border border-gold-500/20 shadow-2xl">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`py-8 md:py-12 px-4 text-center border-b md:border-b-0 border-gold-500/10 ${index !== stats.length - 1 ? 'md:border-r' : ''} ${index % 2 === 0 ? 'border-r md:border-r-0' : ''}`}
            >
              <h3 className="text-3xl md:text-5xl font-serif text-gold-400 font-bold mb-2">
                <AnimatedCounter value={stat.value} />
              </h3>
              <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};