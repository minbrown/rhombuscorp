import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-brand-charcoal border border-brand-slate hover:border-brand-orange/50 p-8 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/10 flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-orange/10 transition-all duration-500" />
      
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-slate group-hover:bg-brand-orange transition-colors duration-300">
        <Icon className="w-7 h-7 text-brand-blue group-hover:text-brand-brown transition-colors duration-300" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
      <p className="text-brand-gray mb-6 text-sm leading-relaxed flex-grow">{service.description}</p>
      
      <div className="space-y-3 mb-6 border-t border-brand-slate pt-6">
        {service.benefits.map((benefit, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <Check className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
      
      {service.value && (
        <div className="mt-auto bg-brand-darker/50 p-3 rounded-lg border border-brand-slate/50">
          <p className="text-xs text-brand-blue font-medium">Impact:</p>
          <p className="text-sm text-white font-semibold">{service.value}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
