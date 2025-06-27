
import React from 'react';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import LoginPage from '../components/LoginPage';
import PortfolioDashboard from '../components/PortfolioDashboard';

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <PortfolioDashboard /> : <LoginPage />;
};

const Index = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default Index;
