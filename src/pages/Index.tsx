
import { useAuth } from "../contexts/AuthContext";
import { hasStoredCredentials } from "../config/security";
import LoginPage from "../components/LoginPage";
import PortfolioDashboard from "../components/PortfolioDashboard";
import CredentialsSetup from "../components/CredentialsSetup";
import { useState, useEffect } from "react";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [needsCredentialsSetup, setNeedsCredentialsSetup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we need to setup credentials
    const hasEnvCredentials = import.meta.env.VITE_AUTH_USERNAME && import.meta.env.VITE_AUTH_PASSWORD;
    const hasSessionCredentials = hasStoredCredentials();
    
    setNeedsCredentialsSetup(!hasEnvCredentials && !hasSessionCredentials);
    setIsLoading(false);
  }, []);

  const handleCredentialsSet = () => {
    setNeedsCredentialsSetup(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (needsCredentialsSetup) {
    return <CredentialsSetup onCredentialsSet={handleCredentialsSet} />;
  }

  if (isAuthenticated) {
    return <PortfolioDashboard />;
  }

  return <LoginPage />;
};

export default Index;
