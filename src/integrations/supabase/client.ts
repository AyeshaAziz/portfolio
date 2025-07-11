import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { supabaseConfig } from './config';

/**
 * Supabase client instance for interacting with the database.
 * Configured to use localStorage for authentication persistence.
 */
export const supabase = createClient<Database>(supabaseConfig.url, supabaseConfig.key, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});