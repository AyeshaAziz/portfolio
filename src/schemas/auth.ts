
import { z } from 'zod';
import { SECURITY_CONFIG } from '../config/security';

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, 'Username is required')
    .max(SECURITY_CONFIG.MAX_INPUT_LENGTH, 'Username too long')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username contains invalid characters'),
  password: z
    .string()
    .min(1, 'Password is required')
    .max(SECURITY_CONFIG.MAX_INPUT_LENGTH, 'Password too long'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
