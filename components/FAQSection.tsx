import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "What types of cases does your firm handle?",
    answer: "We specialize in a broad spectrum of legal areas including Corporate Law, Commercial Litigation, Real Estate Disputes, Family Law, and Criminal Defense. Our diverse team of experts ensures comprehensive coverage for both personal and business legal needs."
  },
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation by calling our Abu Dhabi office directly at +971 2 633 5000 or by using the 'Contact Us' form on this website. We offer both in-person and virtual meetings tailored to your schedule."
  },
  {
    question: "Do you handle international arbitration?",
    answer: "Yes, our firm is well-versed in International Arbitration. We represent clients in local UAE arbitration centers as well as international forums, providing strategic dispute resolution services that protect cross-border interests."
  },
  {
    question: "Where is your office located?",
    answer: "Our primary office is strategically located in the Khalidiya area of Abu Dhabi, on Zayed First Street, opposite Grand Stores in the Bin Hayai Building, Mezzanine Floor."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-luxury-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase">Common Queries</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-3">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border transition-all duration-300 ${openIndex === index ? 'border-gold-500/50 bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-serif text-lg ${openIndex === index ? 'text-gold-400' : 'text-slate-200'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-gold-500 flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-slate-500 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-400 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};