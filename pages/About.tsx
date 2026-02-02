import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { COMPANY_INFO, IMAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 !bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">About {COMPANY_INFO.name}</h1>
          <p className="text-xl text-brand-gray leading-relaxed font-medium">
            We are a Sandy Springs based technology partner dedicated to empowering professional services with artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Our Mission</h2>
             <p className="text-gray-300 mb-6 text-lg border-l-4 border-brand-orange pl-4 italic leading-relaxed">
               "{COMPANY_INFO.name} helps businesses bridge the gap between human expertise and machine efficiency—capturing every inquiry and automating every complex workflow."
             </p>
             <h3 className="text-xl font-bold text-white mb-2 italic">Intelligence Beyond Software</h3>
             <p className="text-gray-300 mb-6 leading-relaxed">
               Most software just stores data. Our systems process it. We identify bottlenecks in your operational flow and implement AI-driven solutions that turn static inquiries into active revenue.
             </p>
             <div className="mt-8 pt-8 border-t border-brand-slate">
                <p className="text-brand-orange font-black text-xl mb-1">Malinda</p>
                <p className="text-sm text-brand-gray uppercase tracking-widest font-bold">Founder, {COMPANY_INFO.name}</p>
             </div>
          </div>
          <div className="bg-brand-charcoal/80 backdrop-blur-sm p-10 rounded-3xl border border-brand-slate shadow-2xl">
             <h3 className="text-2xl font-black text-white mb-8 italic">The AI Advantage</h3>
             <div className="space-y-8">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="text-brand-blue w-6 h-6" />
                        <h4 className="font-bold text-white text-lg">Predictive Analytics</h4>
                    </div>
                    <p className="text-sm text-gray-400 pl-9 leading-relaxed">
                        We forecast demand and staff requirements using historical inquiry data.
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="text-brand-blue w-6 h-6" />
                        <h4 className="font-bold text-white text-lg">Hyper-Automation</h4>
                    </div>
                    <p className="text-sm text-gray-400 pl-9 leading-relaxed">
                        Redundant tasks are eliminated, allowing your team to focus on high-value strategy.
                    </p>
                </div>
                 <div>
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="text-brand-blue w-6 h-6" />
                        <h4 className="font-bold text-white text-lg">Global Standards</h4>
                    </div>
                    <p className="text-sm text-gray-400 pl-9 leading-relaxed">
                        We adhere to top-tier security protocols, including HIPAA and GDPR readiness.
                    </p>
                </div>
             </div>
          </div>
        </div>
      </Section>
      
      <Section light className="!bg-white">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-brand-dark mb-6 uppercase tracking-tight">Locally Owned & Operated</h2>
            <p className="text-gray-600 mb-10 text-lg">
                Based in Sandy Springs, GA, we understand the unique demands of the Atlanta business landscape.
            </p>
            <div className="inline-block bg-brand-light/20 border border-gray-200 rounded-3xl px-12 py-10 shadow-lg">
                <img src={IMAGES.logo} alt={COMPANY_INFO.name} className="h-10 w-auto mx-auto mb-8 object-contain" />
                <p className="font-black text-brand-dark text-xl mb-2">{COMPANY_INFO.legalName}</p>
                <p className="text-gray-600 font-medium mb-1">{COMPANY_INFO.address}</p>
                <p className="text-gray-600 font-medium mb-1">
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-blue transition-colors">{COMPANY_INFO.email}</a>
                </p>
                <p className="text-gray-600 font-medium">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-orange transition-colors">{COMPANY_INFO.phone}</a>
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">EIN: {COMPANY_INFO.ein}</p>
                </div>
            </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;