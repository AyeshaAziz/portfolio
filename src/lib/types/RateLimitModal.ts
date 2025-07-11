// Rate limiting storage
export interface RateLimitModal {
  attempts: number;
  lastAttempt: number;
  nextAllowedTime: number;
}