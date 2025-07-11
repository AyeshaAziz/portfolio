import { supabase } from '@/integrations/supabase/client';

/**
 * Sign up a new user with email and password.
 * Optionally, a display name can be provided.
 
 */
export const signUp = async (email: string, password: string, displayName?: string) => {
  const redirectUrl = `${window.location.origin}/`;
  return supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectUrl,
      data: { display_name: displayName },
    },
  });
};

/**
 * Sign in an existing user with email and password.
 */
export const signIn = async (email: string, password: string) => {
  return supabase.auth.signInWithPassword({ email, password });
};

/**
 *  Sign out the current user.
 */
export const signOut = async () => {
  return supabase.auth.signOut();
};

/**
 * Get the current session of the authenticated user. 
*/
export const getSession = async () => {
  return supabase.auth.getSession();
};

/**
 *  Subscribe to authentication state changes.
 */
export const onAuthStateChange = (callback: (event: any, session: any) => void) => {
  return supabase.auth.onAuthStateChange(callback);
};
