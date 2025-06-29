
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { logSecurityEvent, isSessionValid, clearSession } from '../utils/security';

interface SecurityContextType {
  isSecurityEnabled: boolean;
  securityLevel: 'low' | 'medium' | 'high';
  reportSecurityEvent: (event: string, details?: any) => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

interface SecurityProviderProps {
  children: ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [isSecurityEnabled] = useState(true);
  const [securityLevel] = useState<'low' | 'medium' | 'high'>('medium');

  const reportSecurityEvent = (event: string, details: any = {}) => {
    logSecurityEvent(event, details);
  };

  // Session timeout monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSessionValid()) {
        reportSecurityEvent('Session expired');
        clearSession();
        // Force page reload to reset authentication state
        window.location.reload();
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  // Security headers monitoring
  useEffect(() => {
    // Check if running in development mode
    const isDev = import.meta.env.DEV;
    
    if (!isDev) {
      // In production, log security configuration
      reportSecurityEvent('Security initialization', {
        securityLevel,
        isSecurityEnabled,
        timestamp: new Date().toISOString()
      });
    }
  }, [isSecurityEnabled, securityLevel]);

  return (
    <SecurityContext.Provider value={{ isSecurityEnabled, securityLevel, reportSecurityEvent }}>
      {children}
    </SecurityContext.Provider>
  );
};
