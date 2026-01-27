import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import { PRICING_TIERS, COMPANY_INFO } from '../constants';

const Pricing: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 !bg-transparent relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-brand-gray">
            Invest in a system that pays for itself in days, not months.
          </p>
        </div>

        {/* Founding Member Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-brand-orange to-brand-red p-1 rounded-2xl shadow-2xl shadow-brand-orange/20">
            <div className="bg-brand-darker/95 rounded-xl p-8 text-center backdrop-blur-sm">
               <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                 🎉 Founding Client Special 
                 <span className="inline-block bg-brand-red text-white text-xs px-2 py-1 rounded-full uppercase">Limited</span>
               </h2>
               <p className="text-brand-gray mb-6">Lock in reduced rates while we build your case study. (First 3 Clients Only)</p>
               
               <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
                 <div>
                    <p className="text-xs text-brand-gray uppercase tracking-wider mb-1">Monthly Rate</p>
                    <p className="text-3xl md:text-4xl font-bold text-brand-orange">
                      $497<span className="text-lg">/mo</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">For first 3 months, then $697/mo</p>
                 </div>
                 <div className="hidden md:block h-12 w-px bg-brand-slate"></div>
                 <div>
                    <p className="text-xs text-brand-gray uppercase tracking-wider mb-1">One-Time Setup</p>
                    <p className="text-3xl md:text-4xl font-bold text-white">
                      $1,497
                    </p>
                 </div>
               </div>
               
               <Button to="/#contact" className="w-full md:w-auto px-12">Claim Founding Rate</Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col backdrop-blur-sm ${
                tier.recommended 
                  ? 'bg-brand-charcoal/90 border-2 border-brand-orange shadow-2xl shadow-brand-orange/10 z-10 transform md:-translate-y-4' 
                  : 'bg-brand-darker/90 border border-brand-slate'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-brand-brown font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-brand-gray text-sm mb-6 min-h-[40px]">{tier.description}</p>
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-xs text-brand-gray uppercase tracking-wider">One-Time Setup</span>
                </div>
                {tier.monthlyFee && (
                   <div className="mt-4 pt-4 border-t border-brand-slate/50 w-full">
                      <p className="text-xl font-bold text-brand-orange">{tier.monthlyFee}</p>
                      <p className="text-xs text-brand-gray">Monthly Service</p>
                   </div>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className={`w-5 h-5 shrink-0 ${tier.recommended ? 'text-brand-orange' : 'text-brand-blue'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                to="/#contact" 
                variant={tier.recommended ? 'primary' : 'outline'}
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section light>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Why Choose {COMPANY_INFO.name}?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We aren't just another software vendor. We are a growth partner specifically for Atlanta businesses.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="font-bold text-brand-dark mb-2">Local Expertise</h4>
                <p className="text-sm text-gray-600">We know the Buckhead, Sandy Springs, and North Atlanta market intimately.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="font-bold text-brand-dark mb-2">Professional Specialists</h4>
                <p className="text-sm text-gray-600">Our entire system is built around your unique booking and service flow.</p>
             </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;