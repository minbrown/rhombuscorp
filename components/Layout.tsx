import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';
import Button from './Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're not on the home page, go home with the hash
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    
    // If we are on the home page, scroll to the element
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero' || id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('hero');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-brand-light font-sans relative">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(4, 6, 17, 0.75), rgba(4, 6, 17, 0.85)), url(${IMAGES.heroBg})`,
          backgroundColor: '#010314',
        }}
      />

      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-darker/95 backdrop-blur-md border-b border-brand-slate py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
            <img 
              src={IMAGES.logo} 
              alt={COMPANY_INFO.name} 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[10px] font-bold uppercase tracking-widest text-brand-gray hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} variant="primary" className="py-2 px-4 text-[10px]">
              Request Demo
            </Button>
          </div>

          <button 
            className="xl:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-brand-darker border-b border-brand-slate p-6 flex flex-col gap-6 shadow-2xl overflow-y-auto max-h-[80vh]">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-bold uppercase tracking-widest text-left text-brand-gray hover:text-brand-orange transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} variant="primary" className="w-full">
              Request Demo
            </Button>
          </div>
        )}
      </nav>

      <main className="flex-grow relative z-10 flex flex-col">
        {children}
      </main>

      <footer className="bg-brand-darker border-t border-brand-slate py-20 relative z-10 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <Link to="/" onClick={handleLogoClick} className="inline-block mb-8">
                <img 
                  src={IMAGES.logo} 
                  alt={COMPANY_INFO.name} 
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-brand-gray text-sm max-w-md leading-relaxed mb-8">
                Providing premier AI-powered design, consulting, and business automation solutions. Sandy Springs based, globally focused.
              </p>
              <div className="flex gap-4">
                <a 
                  href={COMPANY_INFO.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-blue hover:text-brand-orange font-bold uppercase tracking-widest transition-colors"
                >
                  Privacy Policy
                </a>
                <div className="w-px h-3 bg-brand-slate"></div>
                <a 
                  href={COMPANY_INFO.termsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-blue hover:text-brand-orange font-bold uppercase tracking-widest transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-bold uppercase tracking-widest text-[10px]">Direct Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-gray text-sm">
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-3 text-brand-gray text-sm">
                  <Mail className="w-4 h-4 text-brand-orange" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-bold uppercase tracking-widest text-[10px]">Address</h3>
              <div className="flex items-start gap-3 text-brand-gray text-sm leading-relaxed">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <p className="text-[10px] text-brand-slate font-bold uppercase">EIN: {COMPANY_INFO.ein}</p>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-brand-slate text-center md:text-left">
            <p className="text-brand-gray text-[10px] md:text-xs">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Professional AI Solutions & Consulting.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;