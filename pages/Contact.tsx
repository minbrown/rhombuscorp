import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-20 !bg-transparent relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get Your <span className="text-brand-orange">Free Demo</span></h1>
          <p className="text-xl text-brand-gray">
            Schedule a 15-minute call to see how we can help you capture an extra $15k+ per month.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Bar */}
          <div className="bg-brand-charcoal p-8 rounded-2xl border border-brand-slate mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-orange mb-4">
                          <Phone className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-brand-gray uppercase tracking-wide mb-1">Phone</p>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-medium text-lg hover:text-brand-orange transition-colors">{COMPANY_INFO.phone}</a>
                  </div>
                  
                  <div className="flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-brand-slate pt-8 md:pt-0">
                      <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-orange mb-4">
                          <Mail className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-brand-gray uppercase tracking-wide mb-1">Email</p>
                      <p className="text-white font-medium text-lg">{COMPANY_INFO.email}</p>
                  </div>

                  <div className="flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-brand-slate pt-8 md:pt-0">
                       <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-orange mb-4">
                          <MapPin className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-brand-gray uppercase tracking-wide mb-1">Location</p>
                      <p className="text-white font-medium text-lg">{COMPANY_INFO.address}</p>
                  </div>
              </div>
          </div>
          
          {/* Centered Form - Background removed */}
          <div className="rounded-2xl p-0 overflow-hidden w-full min-h-[1000px]">
             <iframe
                src="https://links.echovoicelabs.com/widget/form/6fKuqYYIZ89df07Xji58"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-6fKuqYYIZ89df07Xji58-page"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="SMS Registration Form"
                data-height="987"
                data-layout-iframe-id="inline-6fKuqYYIZ89df07Xji58-page"
                data-form-id="6fKuqYYIZ89df07Xji58"
                title="SMS Registration Form"
              />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!bg-transparent relative z-10">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {[
                    {
                        q: "Does this replace my current booking system?",
                        a: "No! We work seamlessly with Vagaro, Boulevard, Zenoti, Mangomint, Mindbody, and virtually all other platforms. We fill your system, we don't replace it."
                    },
                    {
                        q: "Is it HIPAA compliant?",
                        a: "Yes. We do not access sensitive patient charts, only schedule availability. We use HIPAA-friendly SMS delivery to keep your data secure."
                    },
                    {
                        q: "How long does setup take?",
                        a: "Because no complex integration is required, we can have your AI agent and missed-call text back system running in as little as 3-5 days."
                    },
                    {
                        q: "What if I don't like the AI voice?",
                        a: "We use the most advanced voice synthesis available. It sounds incredibly human, but we can adjust tone and speed to fit your brand perfectly."
                    }
                ].map((faq, i) => (
                    <div key={i} className="bg-brand-charcoal/80 backdrop-blur-sm border border-brand-slate p-6 rounded-lg">
                        <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                        <p className="text-brand-gray">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;