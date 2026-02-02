import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { COMPANY_INFO } from '../constants';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-20 !bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">Privacy Policy</h1>
          <p className="text-brand-gray mb-12">Effective Date: January 27, 2025</p>
          
          <div className="space-y-10 text-[#e0e0e0] leading-relaxed">
            <p className="text-lg">
              Rhombus Corp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <div className="h-px bg-brand-slate w-full" />

            <section className="bg-brand-charcoal/50 p-8 rounded-2xl border border-brand-orange/30 shadow-xl">
              <h2 className="text-2xl font-bold text-brand-orange mb-6 uppercase tracking-wider">SMS Messaging Terms</h2>
              <p className="mb-6">If you opt in to receive SMS messages from Rhombus Corp:</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">CONSENT TO RECEIVE MESSAGES</h4>
                  <p className="text-sm text-brand-gray leading-relaxed">By providing your phone number and checking the consent box, you agree to receive SMS text messages and AI-powered voice calls from Rhombus Corp.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-2">MESSAGE TYPES</h4>
                  <p className="text-sm text-brand-gray mb-2">Messages may include:</p>
                  <ul className="list-disc pl-5 text-sm text-brand-gray space-y-1">
                    <li>Account notifications and customer care (information about your services and support)</li>
                    <li>Marketing offers (only if you opt in to marketing messages)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">MESSAGE FREQUENCY</h4>
                  <p className="text-sm text-brand-gray">Message frequency may vary depending on your account activity and the services you use.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">OPT-OUT</h4>
                  <p className="text-sm text-brand-gray mb-2">You can opt out of SMS messages at any time by:</p>
                  <ul className="list-disc pl-5 text-sm text-brand-gray space-y-1">
                    <li>Replying STOP to any message</li>
                    <li>Contacting us at <a href="mailto:minbrown301@gmail.com" className="text-brand-orange hover:underline">minbrown301@gmail.com</a> or <a href="tel:7708755882" className="text-brand-orange hover:underline">(770) 875-5882</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">HELP</h4>
                  <p className="text-sm text-brand-gray">For assistance, reply HELP to any message or contact us directly.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">COSTS</h4>
                  <p className="text-sm text-brand-gray">Message and data rates may apply depending on your mobile carrier's plan. Rhombus Corp is not responsible for any charges from your carrier.</p>
                </div>

                <div className="pt-6 border-t border-brand-slate/50">
                  <h4 className="text-brand-blue font-bold mb-2">NO THIRD-PARTY SHARING</h4>
                  <p className="text-sm font-bold bg-brand-blue/10 p-4 rounded border border-brand-blue/20">
                    Your SMS opt-in data will never be shared or sold to third parties for promotional or marketing purposes. Consent is provided exclusively to Rhombus Corp.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section>
              <h2 className="text-3xl font-black text-white mb-6">INFORMATION WE COLLECT</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-orange mb-3">PERSONAL DATA</h3>
                  <p className="text-brand-gray mb-3">We may collect personally identifiable information such as:</p>
                  <ul className="list-disc pl-5 text-brand-gray space-y-2">
                    <li>Name, email address, phone number, mailing address</li>
                    <li>Business information (company name, website, industry)</li>
                    <li>Payment information (when applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-orange mb-3">USAGE DATA</h3>
                  <p className="text-brand-gray mb-3">We automatically collect information about your visit to our website, including:</p>
                  <ul className="list-disc pl-5 text-brand-gray space-y-2">
                    <li>IP address, browser type and version</li>
                    <li>Pages visited and time spent, referring website</li>
                    <li>Device information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-orange mb-3">COOKIES AND TRACKING TECHNOLOGIES</h3>
                  <p className="text-brand-gray mb-3">We use cookies and similar tracking technologies to:</p>
                  <ul className="list-disc pl-5 text-brand-gray space-y-2 mb-4">
                    <li><strong>Essential Cookies:</strong> Enable core website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Understand how visitors use our site</li>
                    <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements (with your consent)</li>
                  </ul>
                  <p className="text-sm text-brand-gray italic">You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.</p>
                </div>
              </div>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section>
              <h2 className="text-3xl font-black text-white mb-6">HOW WE USE YOUR INFORMATION</h2>
              <p className="text-brand-gray mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-5 text-brand-gray space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Process your requests and transactions</li>
                <li>Communicate with you (customer service, updates, marketing)</li>
                <li>Send SMS notifications for appointments, reminders, and updates</li>
                <li>Improve and personalize our services</li>
                <li>Analyze usage patterns and optimize our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section>
              <h2 className="text-3xl font-black text-white mb-6">DISCLOSURE OF YOUR INFORMATION</h2>
              <p className="text-brand-gray mb-6">We may share your information with:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">SERVICE PROVIDERS</h3>
                  <p className="text-sm text-brand-gray mb-2">Third-party vendors who perform services on our behalf, such as:</p>
                  <ul className="list-disc pl-5 text-sm text-brand-gray space-y-1">
                    <li>SMS and communication platform providers, payment processors</li>
                    <li>Website hosting and maintenance, analytics providers</li>
                  </ul>
                  <p className="text-xs text-brand-gray mt-2 italic">These third parties are contractually obligated to keep your information confidential and use it only for specified purposes.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">BUSINESS TRANSFERS</h3>
                  <p className="text-sm text-brand-gray">If Rhombus Corp undergoes a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">LEGAL REQUIREMENTS</h3>
                  <p className="text-sm text-brand-gray">We may disclose your information if required by law or in response to valid legal requests.</p>
                </div>

                <div className="bg-brand-red/10 border border-brand-red/30 p-4 rounded-xl">
                  <h3 className="text-lg font-bold text-brand-red mb-1">NO THIRD-PARTY MARKETING</h3>
                  <p className="text-sm text-brand-gray font-medium">We do not sell, rent, or share your personal information with third parties for their promotional or marketing purposes. Your SMS opt-in data is never shared or sold to third parties.</p>
                </div>
              </div>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section>
              <h2 className="text-3xl font-black text-white mb-6">DATA SECURITY AND HANDLING</h2>
              <p className="text-brand-gray mb-4">We implement reasonable security measures to protect your personal information, including:</p>
              <ul className="list-disc pl-5 text-brand-gray space-y-2 mb-6">
                <li>Encryption of sensitive data, secure server infrastructure</li>
                <li>Access controls and authentication, regular security assessments</li>
              </ul>
              <p className="text-sm text-brand-gray italic bg-brand-slate/20 p-4 rounded">However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.</p>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section>
              <h2 className="text-3xl font-black text-white mb-6">YOUR RIGHTS</h2>
              <p className="text-brand-gray mb-4">You have the right to:</p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-brand-gray mb-8">
                <li className="bg-brand-charcoal/50 p-3 rounded border border-brand-slate">Access the personal information we hold about you</li>
                <li className="bg-brand-charcoal/50 p-3 rounded border border-brand-slate">Request correction of inaccurate information</li>
                <li className="bg-brand-charcoal/50 p-3 rounded border border-brand-slate">Request deletion of your information</li>
                <li className="bg-brand-charcoal/50 p-3 rounded border border-brand-slate">Opt out of marketing communications</li>
                <li className="bg-brand-charcoal/50 p-3 rounded border border-brand-slate">Withdraw consent for SMS messaging (reply STOP)</li>
                <li className="bg-brand-charcoal/50 p-3 rounded border border-brand-slate">Object to processing of your data</li>
              </ul>
              <p className="text-sm mb-10">To exercise these rights, contact us at <a href="mailto:minbrown301@gmail.com" className="text-brand-orange">{COMPANY_INFO.email}</a> or <a href="tel:7708755882" className="text-brand-orange">{COMPANY_INFO.phone}</a>.</p>

              <div className="border-2 border-brand-blue/30 p-8 rounded-2xl">
                <h3 className="text-2xl font-black text-white mb-4">CALIFORNIA RESIDENTS (CCPA)</h3>
                <p className="text-brand-gray mb-4 text-sm">If you are a California resident, you have additional rights under the CCPA, including:</p>
                <ul className="list-disc pl-5 text-sm text-brand-gray space-y-2">
                  <li>Right to know what personal data is collected</li>
                  <li>Right to know if data is sold or disclosed and to whom</li>
                  <li>Right to request deletion of personal data</li>
                  <li>Right to opt-out of sale of personal data</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
              </div>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section>
              <h2 className="text-3xl font-black text-white mb-6">MOBILE INFORMATION SHARING</h2>
              <p className="text-brand-gray bg-brand-darker p-6 rounded-xl border border-brand-slate font-medium">
                We do not share mobile phone numbers or SMS opt-in data with third parties for marketing purposes. Mobile information is used solely by Rhombus Corp to communicate with you as authorized by your consent.
              </p>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section>
              <h2 className="text-3xl font-black text-white mb-6">CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="text-brand-gray">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Effective Date."
              </p>
              <p className="text-brand-gray mt-4 font-bold italic">
                Your continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section className="bg-brand-charcoal/50 p-8 rounded-2xl border border-brand-slate">
              <h2 className="text-3xl font-black text-white mb-6">CONTACT US</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-bold text-white mb-1">Rhombus Corp</p>
                  <p className="text-sm text-brand-gray">6478 Chariot St.</p>
                  <p className="text-sm text-brand-gray mb-4">Sandy Springs, GA 30328</p>
                </div>
                <div>
                  <p className="text-sm text-brand-gray"><strong>Email:</strong> {COMPANY_INFO.email}</p>
                  <p className="text-sm text-brand-gray"><strong>Phone:</strong> {COMPANY_INFO.phone}</p>
                  <p className="text-sm text-brand-gray"><strong>EIN:</strong> {COMPANY_INFO.ein}</p>
                </div>
              </div>
            </section>

            <p className="pt-10 font-black border-t border-brand-slate text-center text-brand-blue uppercase tracking-widest text-xs">
              By using our website and services, you consent to the terms of this Privacy Policy.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;