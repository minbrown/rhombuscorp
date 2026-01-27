import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return <Navigate to="/privacy" replace />;
};

export default PrivacyPolicy;