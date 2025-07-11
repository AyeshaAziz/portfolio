import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import * as AuthService from '../services/Authservice';
import { AuthContextModal } from '@/modal/AuthContextModal';
import { AuthProviderModal } from '@/modal/AuthProviderModal';

const AuthContext = createContext<AuthContextModal | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

/**
 * SupabaseAuthProvider component provides authentication context to its children.
 */
export const SupabaseAuthProvider: React.FC<AuthProviderModal> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = AuthService.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Get initial session
    AuthService.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signUp: AuthService.signUp,
        signIn: AuthService.signIn,
        signOut: AuthService.signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
