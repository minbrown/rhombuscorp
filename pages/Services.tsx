import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, COMPANY_INFO } from '../constants';
import Button from '../components/Button';

const Services: React.FC = () => {
  const DEMO_URL = "https://links.echovoicelabs.com/widget/form/sy6v4Mrfbvd3mFamdZ15";

  return (
    <Layout>
      <Section className="pt-32 pb-20 !bg-transparent relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-brand-orange">Intelligence</span>, Your Growth
          </h1>
          <p className="text-xl text-brand-gray">
            Comprehensive AI solutions designed to capture inquiries, automate engagement, and drive revenue without adding to your workload.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Section>

      <Section className="!bg-transparent relative z-10">
        <div className="bg-brand-charcoal/80 backdrop-blur-md border border-brand-slate rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How It Works</h2>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "We Analyze",
                    desc: "We review your current call volume, missed call rates, and booking process."
                  },
                  {
                    step: "02",
                    title: "We Plug In",
                    desc: `We connect to your workflow. ${COMPANY_INFO.name} works seamlessly with Vagaro, Boulevard, Zenoti, Mangomint, or any other platform. No complex integration needed.`
                  },
                  {
                    step: "03",
                    title: "We Activate",
                    desc: "The system starts answering calls, confirming appointments, and reactivating old leads immediately."
                  },
                  {
                    step: "04",
                    title: "You Grow",
                    desc: "Watch your calendar fill up and your no-show rates drop on your dashboard."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-4xl font-bold text-brand-slate/50">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-brand-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button to={DEMO_URL} external>Start Capturing Missed Calls Today</Button>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] bg-brand-darker/50 border border-brand-slate rounded-2xl p-8 flex items-center justify-center">
              {/* Conceptual Diagram Placeholder */}
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                   <span className="text-brand-dark font-bold text-xs">INCOMING CALL</span>
                </div>
                <div className="h-12 w-0.5 bg-brand-slate mx-auto"></div>
                <div className="w-32 h-32 bg-brand-orange/20 rounded-full mx-auto flex items-center justify-center border border-brand-orange relative">
                   <div className="absolute inset-0 animate-ping bg-brand-orange/10 rounded-full"></div>
                   <span className="font-bold text-brand-orange">AI AGENT</span>
                </div>
                <div className="flex justify-center gap-12 mt-4">
                   <div className="flex flex-col items-center">
                      <div className="h-8 w-0.5 bg-brand-slate mb-2"></div>
                      <div className="bg-brand-charcoal/80 p-3 rounded border border-brand-slate text-sm">Answer Q&A</div>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="h-8 w-0.5 bg-brand-slate mb-2"></div>
                      <div className="bg-brand-charcoal/80 p-3 rounded border border-brand-slate text-sm">Send Booking Link</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;