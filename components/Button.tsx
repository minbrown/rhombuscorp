import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  icon = false,
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-bold transition-all duration-300 rounded-lg text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-orange text-brand-brown hover:brightness-110 shadow-lg shadow-brand-orange/20",
    secondary: "bg-brand-green text-white hover:brightness-110 shadow-lg shadow-brand-green/20",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-dark"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (to) {
    if (external) {
      return (
        <motion.a 
          href={to} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${baseStyles} ${variants[variant]} ${className}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link to={to} className="inline-block">
        <motion.button
          className={`${baseStyles} ${variants[variant]} ${className}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;