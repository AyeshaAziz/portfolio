
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCredentials, clearCredentials } from '../config/security';
import { rateLimiter, logSecurityEvent, sanitizeInput, createSession, clearSession, isSessionValid } from '../utils/security';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string; remainingTime?: number }>;
  logout: () => void;
  user: { name: string; email: string } | null;
  isRateLimited: boolean;
  remainingTime: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  // Check session validity on mount
  useEffect(() => {
    const checkSession = () => {
      if (isSessionValid()) {
        setIsAuthenticated(true);
        setUser({ name: 'John Developer', email: 'john@example.com' });
      } else {
        clearSession();
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkSession();
  }, []);

  // Update rate limit status
  useEffect(() => {
    const updateRateLimit = () => {
      const clientId = 'login_attempt';
      const remaining = rateLimiter.getRemainingTime(clientId);
      setRemainingTime(remaining);
      setIsRateLimited(remaining > 0);
    };

    updateRateLimit();
    const interval = setInterval(updateRateLimit, 1000);

    return () => clearInterval(interval);
  }, []);

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string; remainingTime?: number }> => {
    const clientId = 'login_attempt';
    
    // Check rate limiting
    if (!rateLimiter.isAllowed(clientId)) {
      const remaining = rateLimiter.getRemainingTime(clientId);
      logSecurityEvent('Rate limited login attempt', { username: sanitizeInput(username) });
      return { 
        success: false, 
        error: `Too many failed attempts. Try again in ${remaining} seconds.`,
        remainingTime: remaining
      };
    }

    // Sanitize inputs
    const sanitizedUsername = sanitizeInput(username.trim());
    const sanitizedPassword = sanitizeInput(password);

    // Validate inputs
    if (!sanitizedUsername || !sanitizedPassword) {
      logSecurityEvent('Invalid login attempt - empty credentials', { username: sanitizedUsername });
      return { success: false, error: 'Please fill in all fields' };
    }

    // Get credentials from session storage or environment
    const credentials = getCredentials();

    // Simulate async authentication delay (prevent timing attacks)
    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));

    if (sanitizedUsername === credentials.username && sanitizedPassword === credentials.password) {
      setIsAuthenticated(true);
      setUser({ name: 'John Developer', email: 'john@example.com' });
      createSession();
      rateLimiter.reset(clientId); // Reset rate limit on successful login
      
      logSecurityEvent('Successful login', { username: sanitizedUsername });
      return { success: true };
    } else {
      // Record failed attempt
      rateLimiter.recordAttempt(clientId);
      const remaining = rateLimiter.getRemainingTime(clientId);
      
      logSecurityEvent('Failed login attempt', { 
        username: sanitizedUsername,
        remainingTime: remaining 
      });
      
      return { 
        success: false, 
        error: 'Invalid credentials',
        remainingTime: remaining
      };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    clearSession();
    clearCredentials(); // Clear session storage credentials on logout
    logSecurityEvent('User logout');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout, 
      user, 
      isRateLimited, 
      remainingTime 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
