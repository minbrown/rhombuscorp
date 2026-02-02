import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicyRedirect from './pages/PrivacyPolicy';
import PrivacyNewRedirect from './pages/PrivacyNew';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
        {/* Main Legal Routes */}
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        
        {/* Legacy Redirects */}
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
        <Route path="/privacy-policy-old" element={<PrivacyPolicyRedirect />} />
        <Route path="/privacy-new" element={<PrivacyNewRedirect />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;