
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

// Session storage-based credentials management
export const getCredentials = () => {
  // First try session storage
  const sessionUsername = sessionStorage.getItem('auth_username');
  const sessionPassword = sessionStorage.getItem('auth_password');
  
  if (sessionUsername && sessionPassword) {
    return { username: sessionUsername, password: sessionPassword };
  }
  
  // Fallback to environment variables, then demo credentials
  const username = import.meta.env.VITE_AUTH_USERNAME || 'demo';
  const password = import.meta.env.VITE_AUTH_PASSWORD || 'portfolio';
  
  return { username, password };
};

export const setCredentials = (username: string, password: string) => {
  sessionStorage.setItem('auth_username', username);
  sessionStorage.setItem('auth_password', password);
};

export const clearCredentials = () => {
  sessionStorage.removeItem('auth_username');
  sessionStorage.removeItem('auth_password');
};

export const hasStoredCredentials = () => {
  return sessionStorage.getItem('auth_username') && sessionStorage.getItem('auth_password');
};
