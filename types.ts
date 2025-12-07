import React from 'react';

export interface ContactDetail {
  label: string;
  value: string;
  icon: React.ElementType;
  action?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export enum GenerateType {
  EXPAND = 'EXPAND',
  SUMMARIZE = 'SUMMARIZE',
  ARABIC = 'ARABIC'
}