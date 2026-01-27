import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { COMPANY_INFO } from '../constants';

const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-20 !bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">Terms of Service</h1>
          <p className="text-brand-gray mb-12">Effective Date: January 27, 2025</p>
          
          <div className="space-y-10 text-[#e0e0e0] leading-relaxed">
            <p className="text-lg">
              Welcome to <strong>Rhombus Corp</strong>. By accessing or using our website and services, you agree to be bound by these Terms of Service.
            </p>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">1. Services</h2>
              <p>
                Rhombus Corp provides AI-powered website design, business consulting, customer support solutions, and marketing automation services to businesses in the professional services sector.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">2. Use of Services</h2>
              <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-3 text-brand-gray">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of our services</li>
                <li>Attempt to interfere with the proper functioning of our services</li>
              </ul>
            </section>

            <section className="bg-brand-charcoal/50 p-8 rounded-2xl border border-brand-blue/30 shadow-xl">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">3. SMS Messaging Terms</h2>
              <div className="space-y-6">
                <p>If you opt in to receive SMS messages from Rhombus Corp:</p>
                
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Consent to Receive Messages</h4>
                  <p className="text-sm">By providing your phone number and checking the consent box, you agree to receive SMS text messages and AI-powered voice calls from Rhombus Corp.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Message Types</h4>
                  <p className="text-sm">Messages may include:</p>
                  <ul className="list-disc pl-5 mt-2 text-xs space-y-1 text-brand-gray">
                    <li>Account notifications</li>
                    <li>Customer care and support information</li>
                    <li>Marketing offers (only if you opt in to marketing messages)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Message Frequency</h4>
                  <p className="text-sm">Message frequency may vary depending on your account activity and the services you use.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Opt-Out</h4>
                  <p className="text-sm">You can opt out of SMS messages at any time by:</p>
                  <ul className="list-disc pl-5 mt-2 text-xs space-y-1 text-brand-gray">
                    <li>Replying <strong>STOP</strong> to any message</li>
                    <li>Contacting us at <a href="mailto:minbrown301@gmail.com" className="text-brand-blue hover:underline">minbrown301@gmail.com</a> or <a href="tel:7708755882" className="text-brand-blue hover:underline">(770) 875-5882</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Help</h4>
                  <p className="text-sm">For assistance, reply <strong>HELP</strong> to any message or contact us directly.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Costs</h4>
                  <p className="text-sm">Message and data rates may apply depending on your mobile carrier's plan. Rhombus Corp is not responsible for any charges from your carrier.</p>
                </div>

                <div className="pt-6 border-t border-brand-slate/50">
                  <h4 className="text-brand-orange font-bold mb-2 uppercase tracking-wider text-xs italic">No Third-Party Sharing</h4>
                  <p className="text-sm font-bold bg-brand-orange/10 p-4 rounded border border-brand-orange/20">
                    Your SMS opt-in data will never be shared or sold to third parties for promotional or marketing purposes. Consent is provided exclusively to Rhombus Corp.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">4. Privacy</h2>
              <p>
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our website and services are owned by Rhombus Corp and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Rhombus Corp shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date."
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">8. Contact Information</h2>
              <p className="mb-4">For questions about these Terms, contact us:</p>
              <div className="bg-brand-charcoal/50 p-8 rounded-2xl border border-brand-slate inline-block w-full">
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
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <p className="pt-10 font-bold border-t border-brand-slate text-center text-brand-blue">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default TermsOfService;