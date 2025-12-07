import React from 'react';
import { Quote, Share2 } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    quote: "Dr. Balhaj's strategic insight into UAE corporate law was instrumental in our merger. A level of professionalism and precision that is rare to find in the region.",
    author: "Mohammed Al Fayed",
    role: "CEO",
    company: "Future Investments Group"
  },
  {
    quote: "When facing a complex litigation matter, the firm provided not just legal defense, but peace of mind. Their reputation in the Abu Dhabi courts is unmatched.",
    author: "Sarah Jenkins",
    role: "Director of Operations",
    company: "Global Trade Solutions"
  },
  {
    quote: "Efficient, discreet, and incredibly knowledgeable. They handled our family estate matters with the utmost sensitivity and expertise.",
    author: "Ahmed Bin Sultan",
    role: "Private Client"
  }
];

export const TestimonialsSection: React.FC = () => {
  const handleShare = async (item: TestimonialItem) => {
    const shareData = {
      title: 'Abdelrahman Balhaj Advocates - Client Testimonial',
      text: `"${item.quote}" — ${item.author}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.debug('Error sharing:', err);
      }
    } else {
      // Fallback for desktop/unsupported browsers
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
      window.open(twitterUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-3">Client Trust</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="relative p-8 bg-luxury-charcoal border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between"
            >
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-500/5 to-transparent transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              
              <div>
                <Quote className="text-gold-500/20 w-12 h-12 mb-6 group-hover:text-gold-500/40 transition-colors" />
                
                <p className="text-slate-300 font-light italic leading-relaxed mb-8 min-h-[100px]">
                  "{item.quote}"
                </p>
              </div>
              
              <div className="border-t border-white/5 pt-6 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-white font-serif text-lg">{item.author}</span>
                  <span className="text-gold-400 text-xs uppercase tracking-wider mt-1">
                    {item.role}{item.company ? `, ${item.company}` : ''}
                  </span>
                </div>
                
                <button 
                  onClick={() => handleShare(item)}
                  className="text-slate-500 hover:text-gold-400 transition-colors transform hover:scale-110 active:scale-95 p-2"
                  aria-label="Share testimonial"
                  title="Share this testimonial"
                >
                  <Share2 size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};