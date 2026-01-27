import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { TESTIMONIALS, COMPANY_INFO } from '../constants';
import { Star, Quote, TrendingUp, DollarSign, CalendarCheck } from 'lucide-react';
import Button from '../components/Button';

const Results: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 !bg-transparent relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results for <span className="text-brand-orange">Real Businesses</span>
          </h1>
          <p className="text-xl text-brand-gray">
            See how {COMPANY_INFO.name} pays for itself in less than 2 days each month.
          </p>
        </div>

        {/* ROI Breakdown Card */}
        <div className="bg-brand-light text-brand-dark rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl border-4 border-brand-slate">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-300 pb-6">
                <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-orange">
                    <DollarSign className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Monthly ROI Breakdown</h2>
                    <p className="text-gray-600">Based on a standard professional service provider ($120k/mo revenue)</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div>
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-brand-red" /> Captured Missed Calls
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">35 missed calls x 20% conversion = 7 appts</p>
                        <p className="text-3xl font-bold text-brand-dark">$4,200<span className="text-sm font-normal text-gray-500">/mo</span></p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <CalendarCheck className="w-5 h-5 text-blue-600" /> Reduced No-Shows
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">Reduced from 18% to 9% (18 saved appts)</p>
                        <p className="text-3xl font-bold text-brand-dark">$10,800<span className="text-sm font-normal text-gray-500">/mo</span></p>
                    </div>
                </div>
                <div className="space-y-8">
                     <div>
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <Star className="w-5 h-5 text-brand-orange" /> Organic Reviews Boost
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">15% traffic increase from 4.7 star rating</p>
                        <p className="text-3xl font-bold text-brand-dark">$3,600<span className="text-sm font-normal text-gray-500">/mo</span></p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-600" /> Database Reactivation
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">12 old clients reactivated</p>
                        <p className="text-3xl font-bold text-brand-dark">$5,400<span className="text-sm font-normal text-gray-500">/mo</span></p>
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-brand-dark text-white rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-inner shadow-black/30">
                <div>
                    <p className="text-brand-gray uppercase text-xs tracking-widest">Total Monthly Benefit</p>
                    <p className="text-4xl md:text-5xl font-bold text-brand-orange">$24,000</p>
                </div>
                <div className="hidden md:block h-12 w-px bg-gray-700"></div>
                <div>
                    <p className="text-brand-gray uppercase text-xs tracking-widest">Monthly Cost</p>
                    <p className="text-2xl font-bold text-white">$897</p>
                </div>
                <div className="hidden md:block h-12 w-px bg-gray-700"></div>
                <div>
                    <p className="text-brand-gray uppercase text-xs tracking-widest">Net Benefit</p>
                    <p className="text-4xl md:text-5xl font-bold text-white">$23,103</p>
                </div>
            </div>
            <div className="mt-8 text-center bg-brand-orange/10 p-4 rounded-lg border border-brand-orange/20">
               <p className="text-lg text-brand-dark mb-4 font-bold">
                 <span className="text-brand-red">ROI: 2,575%</span> | <span className="text-blue-700">Payback Period: 1.1 Days</span>
               </p>
               <Button to="/#contact" className="w-full md:w-auto">Book Your Free Demo</Button>
            </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="!bg-transparent relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-brand-darker/80 backdrop-blur-sm border border-brand-slate p-8 rounded-2xl relative hover:border-brand-orange/30 transition-all duration-300">
                    <Quote className="absolute top-6 right-6 text-brand-slate w-8 h-8" />
                    <div className="flex gap-1 mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                        ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.content}"</p>
                    <div>
                        <p className="font-bold text-white">{t.name}</p>
                        <p className="text-sm text-brand-blue">{t.role}</p>
                        <p className="text-xs text-brand-gray uppercase">{t.company}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Results;