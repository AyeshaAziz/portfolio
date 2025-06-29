
import DOMPurify from 'dompurify';
import { SECURITY_CONFIG } from '../config/security';

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

// Rate limiting storage
interface RateLimitData {
  attempts: number;
  lastAttempt: number;
  nextAllowedTime: number;
}

class RateLimiter {
  private storage: Map<string, RateLimitData> = new Map();

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const data = this.storage.get(identifier);

    if (!data) return true;

    // Clean up old entries
    if (now > data.nextAllowedTime) {
      this.storage.delete(identifier);
      return true;
    }

    return false;
  }

  recordAttempt(identifier: string): void {
    const now = Date.now();
    const data = this.storage.get(identifier) || { attempts: 0, lastAttempt: 0, nextAllowedTime: 0 };

    data.attempts += 1;
    data.lastAttempt = now;

    // Progressive delay: exponential backoff
    const delay = Math.min(
      SECURITY_CONFIG.PROGRESSIVE_DELAY_BASE * Math.pow(2, data.attempts - 1),
      SECURITY_CONFIG.LOGIN_COOLDOWN_MS
    );

    data.nextAllowedTime = now + delay;
    this.storage.set(identifier, data);
  }

  getRemainingTime(identifier: string): number {
    const data = this.storage.get(identifier);
    if (!data) return 0;

    const remaining = data.nextAllowedTime - Date.now();
    return Math.max(0, Math.ceil(remaining / 1000)); // Return seconds
  }

  reset(identifier: string): void {
    this.storage.delete(identifier);
  }
}

export const rateLimiter = new RateLimiter();

// Security logging
export const logSecurityEvent = (event: string, details: any = {}) => {
  console.warn(`[SECURITY] ${event}`, {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    ...details
  });
};

// Session management
export const isSessionValid = (): boolean => {
  const sessionStart = localStorage.getItem('sessionStart');
  if (!sessionStart) return false;

  const elapsed = Date.now() - parseInt(sessionStart);
  return elapsed < SECURITY_CONFIG.SESSION_TIMEOUT_MS;
};

export const createSession = (): void => {
  localStorage.setItem('sessionStart', Date.now().toString());
};

export const clearSession = (): void => {
  localStorage.removeItem('sessionStart');
};
