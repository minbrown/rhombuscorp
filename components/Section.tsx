import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, light = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative overflow-hidden ${
        light ? 'bg-brand-light text-brand-dark' : 'bg-brand-dark text-brand-light'
      } ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
