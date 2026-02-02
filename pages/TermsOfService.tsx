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
              Welcome to <strong>Rhombus Corp</strong>. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms").
            </p>

            <div className="h-px bg-brand-slate w-full" />

            <section>
              <h2 className="text-3xl font-black text-white mb-6">1. SERVICES</h2>
              <p className="text-brand-gray mb-4 font-medium italic">
                Rhombus Corp provides AI-powered website design, business consulting, customer support solutions, and marketing automation services ("Services").
              </p>
              <p className="text-brand-gray">
                We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">2. ACCOUNT REGISTRATION</h2>
              <p className="text-brand-gray mb-4">To use certain Services, you may need to create an account. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">3. ACCEPTABLE USE</h2>
              <p className="text-brand-gray mb-4">You agree to use our Services in compliance with all applicable laws and regulations. You must not:</p>
              <ul className="list-disc pl-6 grid md:grid-cols-2 gap-x-12 gap-y-2 text-brand-gray">
                <li>Use the Services for any unlawful purpose</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Attempt unauthorized system access</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Impersonate another person or entity</li>
                <li>Violate any intellectual property rights</li>
              </ul>
            </section>

            <section className="bg-brand-charcoal/50 p-8 rounded-2xl border border-brand-orange/30 shadow-xl">
              <h2 className="text-2xl font-bold text-brand-orange mb-6 uppercase tracking-wider">4. SMS MESSAGING TERMS</h2>
              <div className="space-y-6">
                <p>If you opt in to receive SMS messages from Rhombus Corp:</p>
                
                <div>
                  <h4 className="text-white font-bold mb-2">CONSENT TO RECEIVE MESSAGES</h4>
                  <p className="text-sm text-brand-gray leading-relaxed">By providing your phone number, checking the consent box, and submitting the form, you consent to receive SMS text messages and AI-powered voice calls from Rhombus Corp.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-2">MESSAGE TYPES</h4>
                  <ul className="list-disc pl-5 text-sm text-brand-gray space-y-1">
                    <li>Account notifications and customer care</li>
                    <li>Marketing offers and promotions (only if you opt in)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">MESSAGE FREQUENCY</h4>
                  <p className="text-sm text-brand-gray leading-relaxed">Message frequency may vary depending on your account activity and services.</p>
                </div>

                <div className="flex flex-wrap gap-x-12 gap-y-4">
                  <div>
                    <h4 className="text-white font-bold mb-2">OPT-OUT</h4>
                    <p className="text-sm text-brand-gray">Reply <strong>STOP</strong> to any message</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">HELP</h4>
                    <p className="text-sm text-brand-gray">Reply <strong>HELP</strong> to any message</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-slate/50">
                  <h4 className="text-brand-blue font-bold mb-2">NO THIRD-PARTY SHARING</h4>
                  <p className="text-sm font-bold bg-brand-blue/10 p-4 rounded border border-brand-blue/20">
                    Your SMS opt-in data will never be shared or sold to third parties for promotional or marketing purposes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">5. FEES AND PAYMENT</h2>
              <p className="text-brand-gray">
                You agree to pay all applicable fees for Services as outlined in your service agreement. Fees are non-refundable except as required by law or as specified in writing.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">6. INTELLECTUAL PROPERTY</h2>
              <p className="text-brand-gray mb-4">
                All content, features, and functionality of our Services are owned by Rhombus Corp and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-brand-gray italic">
                You are granted a limited, non-exclusive, non-transferable, and revocable license to use the Services for their intended purpose.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">7. PRIVACY</h2>
              <p className="text-brand-gray">
                Your use of the Services is governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices.
              </p>
            </section>

            <section className="bg-brand-red/5 border border-brand-red/20 p-8 rounded-2xl">
              <h2 className="text-3xl font-black text-white mb-6">8. LIMITATION OF LIABILITY</h2>
              <p className="text-brand-gray mb-4">To the maximum extent permitted by law, Rhombus Corp shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including:</p>
              <ul className="list-disc pl-6 text-brand-gray grid md:grid-cols-2 gap-2 text-sm">
                <li>Loss of profits or revenues</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Loss of goodwill</li>
              </ul>
              <p className="text-brand-gray mt-4 text-xs italic">...arising from your use or inability to use the Services.</p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">9. INDEMNIFICATION</h2>
              <p className="text-brand-gray">
                You agree to indemnify, defend, and hold harmless Rhombus Corp, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">10. TERMINATION</h2>
              <p className="text-brand-gray mb-4">
                We may terminate or suspend your account and access to the Services at our sole discretion, without prior notice, for any reason, including if you breach these Terms.
              </p>
              <p className="text-brand-gray italic">
                Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">11. THIRD-PARTY LINKS</h2>
              <p className="text-brand-gray mb-4">
                Our Services may contain links to third-party websites or services that are not owned or controlled by Rhombus Corp.
              </p>
              <p className="text-brand-gray">
                We have no control over and assume no responsibility for the content, privacy policies, or practices of third-party websites. You acknowledge and agree that Rhombus Corp shall not be liable for any damage or loss caused by your use of third-party services.
              </p>
            </section>

            <section className="border-2 border-brand-orange/30 p-8 rounded-2xl bg-brand-orange/5">
              <h2 className="text-3xl font-black text-white mb-6">12. DISPUTE RESOLUTION</h2>
              <p className="text-brand-gray mb-4 font-bold">
                Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Georgia.
              </p>
              <p className="text-brand-orange font-black uppercase tracking-tighter text-xl">
                You agree to waive any right to a jury trial or to participate in a class action.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">13. GOVERNING LAW</h2>
              <p className="text-brand-gray font-medium">
                These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6">14. CHANGES TO THESE TERMS</h2>
              <p className="text-brand-gray mb-4">
                We reserve the right to modify these Terms at any time. If we make material changes, we will provide at least 30 days' notice before the new terms take effect.
              </p>
              <p className="text-brand-gray font-bold italic">
                Your continued use of the Services after changes are posted constitutes acceptance of the updated Terms.
              </p>
            </section>

            <div className="h-px bg-brand-slate w-full" />

            <section className="bg-brand-charcoal/50 p-8 rounded-2xl border border-brand-slate">
              <h2 className="text-3xl font-black text-white mb-6">15. CONTACT US</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-bold text-white mb-1">Rhombus Corp</p>
                  <p className="text-sm text-brand-gray">6478 Chariot St.</p>
                  <p className="text-sm text-brand-gray mb-4">Sandy Springs, GA 30328</p>
                </div>
                <div>
                  <p className="text-sm text-brand-gray"><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-blue transition-colors">{COMPANY_INFO.email}</a></p>
                  <p className="text-sm text-brand-gray"><strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-orange transition-colors">{COMPANY_INFO.phone}</a></p>
                  <p className="text-sm text-brand-gray"><strong>EIN:</strong> {COMPANY_INFO.ein}</p>
                </div>
              </div>
            </section>

            <p className="pt-10 font-black border-t border-brand-slate text-center text-brand-orange uppercase tracking-widest text-xs">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default TermsOfService;