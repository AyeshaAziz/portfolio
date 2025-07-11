import { User, Session } from '@supabase/supabase-js';

/**
 * AuthContextModal interface defines the structure for the authentication context.
 */
export interface AuthContextModal{
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, displayName?: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
}
