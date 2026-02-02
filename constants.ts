import { 
  Code, 
  MessageSquare, 
  TrendingUp, 
  Zap,
  Globe,
  Settings
} from 'lucide-react';
import { Service, PricingTier, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "Rhombus Corp",
  legalName: "Rhombus Corp",
  tagline: "Premier AI-powered design and business automation.",
  phone: "(770) 875-5882",
  email: "minbrown301@gmail.com",
  address: "6478 Chariot St., Sandy Springs, GA 30328",
  ein: "83-1257112",
  website: "https://rhombuscorp.com",
  privacyUrl: "/privacy-policy",
  termsUrl: "/terms-of-service"
};

export const SERVICES: Service[] = [
  {
    id: 'ai-design',
    title: "AI Website Design",
    description: "Cutting-edge web design powered by AI to ensure maximum conversion and high-speed performance.",
    icon: Globe,
    benefits: ["Custom Visuals", "SEO Optimized", "Mobile First"],
    value: "Increases user engagement by 40."
  },
  {
    id: 'consulting',
    title: "Business Consulting",
    description: "Expert guidance on integrating AI into your existing professional services workflow.",
    icon: MessageSquare,
    benefits: ["Workflow Audit", "ROI Analysis", "Scalability Planning"],
    value: "Identifies avg. $10k/mo in hidden savings."
  },
  {
    id: 'support',
    title: "Customer Support Solutions",
    description: "Automated support desks and AI agents that handle inquiries 24/7 without human intervention. Includes SMS notifications for appointments, reminders, and customer updates.",
    icon: Zap,
    benefits: ["Instant Response", "Ticket Automation", "Natural Language", "SMS Notifications"],
    value: "Reduces response time to < 2 seconds."
  },
  {
    id: 'marketing',
    title: "Marketing Automation",
    description: "Lead generation and nurturing systems that work while you sleep to fill your sales pipeline.",
    icon: TrendingUp,
    benefits: ["Lead Scoring", "Email/SMS Sequences", "Ad Optimization"],
    value: "Boosts conversion rates by up to 25%."
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Growth",
    price: "$997",
    description: "Perfect for boutiques looking to automate missed-call recovery.",
    features: [
      "AI Missed-Call Text Back",
      "SMS Lead Capture",
      "Unified Inbox",
      "Basic Calendar Sync"
    ],
    monthlyFee: "$297/mo"
  },
  {
    name: "Elite",
    price: "$1,997",
    description: "Our complete AI suite for established practices.",
    features: [
      "AI Voice Receptionist",
      "Database Reactivation",
      "Advanced SMS Nurturing",
      "Review Management",
      "Priority Implementation"
    ],
    recommended: true,
    monthlyFee: "$697/mo"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored automation for multi-location groups.",
    features: [
      "Custom Workflow Design",
      "Multi-Location Dashboard",
      "Dedicated Success Manager",
      "Full HIPAA Compliance Audit",
      "API & Zapier Integration"
    ],
    monthlyFee: "$1,297/mo"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Jenkins",
    role: "Medical Director",
    company: "Luxe Aesthetics Buckhead",
    content: "Rhombus Corp completely changed our front-desk dynamic. We no longer worry about missed calls during lunch breaks or after hours. The ROI was apparent in the first week.",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Ross",
    role: "Clinic Manager",
    company: "Sandy Springs Wellness",
    content: "The database reactivation tool alone paid for the entire year's subscription in one month. We brought back 40 clients we hadn't seen in over 6 months.",
    rating: 5
  },
  {
    id: "3",
    name: "Jessica Chen",
    role: "Owner",
    company: "Glow MedSpa",
    content: "Incredible technology. It sounds so human that our patients often don't realize they're talking to an AI until the very end of the booking process.",
    rating: 5
  }
];

export const IMAGES = {
  heroBg: "https://assets.cdn.filesafe.space/cOqRUH72k7CwtfxWMD95/media/68f39acc4a04cb79f1176cfd.jpeg",
  robotGirl: "https://www.dropbox.com/scl/fi/bhpre3m2obq9gicv71vja/echo-voice-labs-robot-grad-Right.png?rlkey=g84u4j3yul5pu3qy73sx6h7hd&raw=1",
  logo: "https://storage.googleapis.com/msgsndr/bYPFrgmhPQl0sOOvrQeV/media/69781bffc1fa0c25f6e59275.png"
};