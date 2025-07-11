/**
 * Supabase configuration.
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabaseConfig = {
  url: SUPABASE_URL,
  key: SUPABASE_API_KEY
};
