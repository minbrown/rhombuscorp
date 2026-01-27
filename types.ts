import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  impact?: string;
  value?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  monthlyFee?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface NavLink {
  label: string;
  path: string;
}
