
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useSecurity } from '../contexts/SecurityContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Code2, Lock, User, Shield, AlertTriangle } from 'lucide-react';
import { loginSchema } from '../schemas/auth';
import { sanitizeInput } from '../utils/security';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  
  const { login, isRateLimited, remainingTime } = useAuth();
  const { reportSecurityEvent } = useSecurity();

  const validateForm = () => {
    try {
      loginSchema.parse({ username, password });
      setValidationErrors({});
      return true;
    } catch (error: any) {
      const errors: Record<string, string> = {};
      error.errors?.forEach((err: any) => {
        errors[err.path[0]] = err.message;
      });
      setValidationErrors(errors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      reportSecurityEvent('Form validation failed', { username: sanitizeInput(username) });
      return;
    }

    if (isRateLimited) {
      setError(`Too many attempts. Please wait ${remainingTime} seconds.`);
      return;
    }

    setIsLoading(true);

    try {
      const result = await login(username, password);
      
      if (!result.success) {
        setError(result.error || 'Login failed');
        if (result.remainingTime && result.remainingTime > 0) {
          // Rate limited, show countdown
        }
      }
    } catch (err) {
      setError('An unexpected error occurred');
      reportSecurityEvent('Login error', { error: err });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: 'username' | 'password', value: string) => {
    const sanitized = sanitizeInput(value);
    
    if (field === 'username') {
      setUsername(sanitized);
    } else {
      setPassword(sanitized);
    }
    
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoNHYtNGgtNHY0em0wLTEwaDR2LTRoLTR2NGptLTEwIDEwaDR2LTRoLTR2NGptMC0xMGg0di00aC00djR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <Card className="w-full max-w-md relative backdrop-blur-sm border-slate-700 bg-slate-800/50">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-white">Developer Portfolio</CardTitle>
            <CardDescription className="text-slate-300">
              Access your professional portfolio
            </CardDescription>
          </div>
          
          {/* Security indicator */}
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
            <Shield className="w-4 h-4" />
            <span>Secured with enhanced protection</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className={`pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 ${
                    validationErrors.username ? 'border-red-500' : ''
                  }`}
                  disabled={isLoading || isRateLimited}
                  maxLength={50}
                />
              </div>
              {validationErrors.username && (
                <p className="text-red-400 text-sm">{validationErrors.username}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 ${
                    validationErrors.password ? 'border-red-500' : ''
                  }`}
                  disabled={isLoading || isRateLimited}
                  maxLength={100}
                />
              </div>
              {validationErrors.password && (
                <p className="text-red-400 text-sm">{validationErrors.password}</p>
              )}
            </div>
            
            {/* Rate limiting alert */}
            {isRateLimited && (
              <Alert className="border-yellow-500/50 bg-yellow-500/10">
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                <AlertDescription className="text-yellow-400">
                  Too many failed attempts. Please wait {remainingTime} seconds before trying again.
                </AlertDescription>
              </Alert>
            )}
            
            {error && (
              <Alert className="border-red-500/50 bg-red-500/10">
                <AlertDescription className="text-red-400">{error}</AlertDescription>
              </Alert>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              disabled={isLoading || isRateLimited}
            >
              {isLoading ? 'Authenticating...' : 'Access Portfolio'}
            </Button>
          </form>
          
          <div className="text-center pt-4 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              Demo credentials: <span className="text-blue-400 font-mono">demo / portfolio</span>
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Set VITE_AUTH_USERNAME and VITE_AUTH_PASSWORD for custom credentials
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
