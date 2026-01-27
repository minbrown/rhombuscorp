import React from 'react';
import Layout from '../components/Layout.tsx';
import Section from '../components/Section.tsx';
import { COMPANY_INFO } from '../constants.ts';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-20 !bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">Privacy Policy</h1>
          <p className="text-brand-gray mb-12">Effective Date: January 27, 2025</p>
          
          <div className="space-y-10 text-[#e0e0e0] leading-relaxed">
            <p className="text-lg">
              This Privacy Policy describes how <strong>{COMPANY_INFO.name}</strong> ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website or use our services. We are committed to protecting your privacy and ensuring that your personal data is handled securely and transparently.
            </p>

            <section className="bg-brand-charcoal/50 p-8 rounded-2xl border border-brand-orange/30">
              <h2 className="text-2xl font-bold text-brand-orange mb-4 italic">SMS Privacy Disclosure</h2>
              <p className="mb-4">
                No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p>
                Your SMS opt-in data will never be shared or sold to third parties for promotional or marketing purposes. Consent is provided exclusively to {COMPANY_INFO.name}.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-brand-charcoal/30 p-6 rounded-xl border border-brand-slate">
                  <h4 className="text-brand-blue font-bold mb-3">Direct Information</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-brand-gray">
                    <li>Name and Business Name</li>
                    <li>Email Address and Phone Number</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div className="bg-brand-charcoal/30 p-6 rounded-xl border border-brand-slate">
                  <h4 className="text-brand-blue font-bold mb-3">Automated Information</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-brand-gray">
                    <li>Browser and device type</li>
                    <li>IP address and usage patterns</li>
                    <li>Cookies and tracking data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">How We Use Your Information</h2>
              <ul className="space-y-4">
                {[
                  "To provide, maintain, and improve our services.",
                  "To send you technical notices, updates, and security alerts.",
                  "To communicate with you about products, services, and events.",
                  "To respond to your comments, questions, and customer service requests."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-10 border-t border-brand-slate">
              <h2 className="text-2xl font-bold text-white mb-4">Contacting Us</h2>
              <div className="bg-brand-darker p-8 rounded-2xl border border-brand-slate inline-block">
                <p className="font-bold text-white mb-1">{COMPANY_INFO.name}</p>
                <p className="text-brand-gray mb-1">Email: {COMPANY_INFO.email}</p>
                <p className="text-brand-gray">Phone: {COMPANY_INFO.phone}</p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;