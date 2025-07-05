// Security configuration constants
export const SECURITY_CONFIG = {
  // Rate limiting
  MAX_LOGIN_ATTEMPTS: 5,
  LOGIN_COOLDOWN_MS: 15 * 60 * 1000, // 15 minutes
  PROGRESSIVE_DELAY_BASE: 1000, // 1 second base delay
  
  // Session management
  SESSION_TIMEOUT_MS: 30 * 60 * 1000, // 30 minutes
  
  // Input validation
  MAX_INPUT_LENGTH: 1000,
  
  // Security headers
  CSP_POLICY: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", "data:", "https:"],
    'font-src': ["'self'"],
    'connect-src': ["'self'"],
    'frame-ancestors': ["'none'"],
  }
};

// Import credentials from JSON file
import credentialsData from '../data/credentials.json';

export const getCredentials = () => {
  // Use credentials from JSON file
  return {
    username: credentialsData.username,
    password: credentialsData.password
  };
};

export const setCredentials = (username: string, password: string) => {
  // Note: In a real application, you would need a backend to update the JSON file
  // For now, we'll just log that credentials would be updated
  console.log('Credentials would be updated:', { username, password });
};

export const clearCredentials = () => {
  // Clear any session storage if needed
  sessionStorage.removeItem('auth_username');
  sessionStorage.removeItem('auth_password');
};

export const hasStoredCredentials = () => {
  // Check if credentials exist in JSON file
  return credentialsData.username && credentialsData.password;
};
