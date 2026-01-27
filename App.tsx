import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Pricing from './pages/Pricing.tsx';
import Results from './pages/Results.tsx';
import Contact from './pages/Contact.tsx';
import Privacy from './pages/Privacy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';

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
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;