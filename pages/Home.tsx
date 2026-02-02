import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import { IMAGES, SERVICES, COMPANY_INFO } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const DEMO_URL = "https://links.echovoicelabs.com/widget/form/6fKuqYYIZ89df07Xji58";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handle hash scrolling on initial load or navigation from other pages
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                Now Serving Sandy Springs & Beyond
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] mb-8">
                Elevate Your <span className="text-brand-orange">Business</span> With <span className="text-brand-blue">AI</span>.
              </h1>

              <p className="text-lg md:text-xl text-brand-gray mb-10 max-w-xl leading-relaxed">
                Rhombus Corp provides the elite intelligence layer your professional service business needs to scale instantly and automate everything.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  onClick={() => scrollToSection('services')} 
                  variant="primary" 
                  className="px-10 py-4 text-base shadow-2xl shadow-brand-orange/20"
                >
                  View Our Services
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-medium text-brand-gray/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  <span>Custom AI Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  <span>Secure Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  <span>24/7 Dedicated Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center lg:block"
            >
              <div className="relative max-w-[350px] sm:max-w-[450px] lg:max-w-none scale-[0.85] transform-gpu origin-center lg:origin-right">
                <motion.img 
                  src={IMAGES.robotGirl} 
                  alt="Rhombus AI Interface" 
                  className="w-full h-auto relative z-10 scale-x-[-1] opacity-100"
                  animate={{ 
                    y: [0, -25, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8">The Future of <span className="text-brand-orange">Professional</span> Services</h2>
            <p className="text-brand-gray text-xl mb-8 leading-relaxed">
              Based in the heart of Sandy Springs, Rhombus Corp is dedicated to bridging the gap between traditional professional services and modern AI capabilities.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  </div>
                  Our Mission
                </h4>
                <p className="text-sm text-brand-gray leading-relaxed">To empower businesses with intelligent automation that replaces complexity with clarity.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  Local Impact
                </h4>
                <p className="text-sm text-brand-gray leading-relaxed">Serving the Atlanta business corridor with on-site consulting and secure, local infrastructure.</p>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('services')} 
              variant="outline" 
              icon
            >
              Explore Our Solutions
            </Button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange to-brand-blue rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-brand-charcoal border border-brand-slate p-12 rounded-3xl shadow-3xl">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-black text-brand-orange">98%</div>
                  <div className="text-brand-gray text-sm font-medium">Customer<br/>Satisfaction</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-black text-brand-blue">24/7</div>
                  <div className="text-brand-gray text-sm font-medium">Monitoring &<br/>Redundancy</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-black text-white">5X</div>
                  <div className="text-brand-gray text-sm font-medium">Average ROI<br/>Within Year 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="!bg-transparent">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6">Our <span className="text-brand-orange">Solutions</span></h2>
          <p className="text-brand-gray text-lg">
            We provide a comprehensive suite of AI tools designed to capture every lead and automate every process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="!bg-brand-darker/50">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 uppercase">Let's <span className="text-brand-blue">Connect</span></h2>
            <p className="text-brand-gray text-lg mb-12">
              Ready to transform your business? Reach out to our team of AI experts in Sandy Springs for a tailored assessment.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-charcoal border border-brand-slate flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-brand-gray hover:text-brand-orange transition-colors font-medium">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-charcoal border border-brand-slate flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-gray hover:text-brand-blue transition-colors font-medium">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-charcoal border border-brand-slate flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Headquarters</h4>
                  <p className="text-brand-gray">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-charcoal border border-brand-slate flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Business Hours</h4>
                  <p className="text-brand-gray">Monday - Friday: 9AM - 6PM EST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-0 md:p-4 rounded-[2.5rem] relative overflow-hidden min-h-[1000px]">
            <iframe
              src="https://links.echovoicelabs.com/widget/form/6fKuqYYIZ89df07Xji58"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
              id="inline-6fKuqYYIZ89df07Xji58"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="SMS Registration Form"
              data-height="987"
              data-layout-iframe-id="inline-6fKuqYYIZ89df07Xji58"
              data-form-id="6fKuqYYIZ89df07Xji58"
              title="SMS Registration Form"
            />
            
            <p className="mt-4 pb-6 text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
              Secure Submission • HIPAA Friendly
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;