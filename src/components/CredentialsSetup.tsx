
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Settings, Shield, Save } from "lucide-react";
import { setCredentials } from "../config/security";
import { sanitizeInput } from "../utils/security";
import SharedConstants from "../lib/SharedConstants.json";
import { CredentialsSetupProps } from "../lib/types/CredentialSetupProps";

const CredentialsSetup: React.FC<CredentialsSetupProps> = ({
  onCredentialsSet,
}) => {
  const [username, setUsername] = useState(SharedConstants.EMPTY_STRING);
  const [password, setPassword] = useState(SharedConstants.EMPTY_STRING);
  const [confirmPassword, setConfirmPassword] = useState(
    SharedConstants.EMPTY_STRING
  );
  const [error, setError] = useState(SharedConstants.EMPTY_STRING);

  const setFormError = (username: string, password: string) => {
    setError(SharedConstants.EMPTY_STRING);

    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < SharedConstants.FOUR) {
      setError("Password must be at least 4 characters long");
      return;
    }
  };

  const useDemoCredentials = () => {
    setUsername("demo");
    setPassword("portfolio");
    setConfirmPassword("portfolio");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(username, password);

    const sanitizedUsername = sanitizeInput(username.trim());
    const sanitizedPassword = sanitizeInput(password);

    setCredentials(sanitizedUsername, sanitizedPassword);
    onCredentialsSet();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <Card className="w-full max-w-md backdrop-blur-sm border-slate-700 bg-slate-800/50">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-white">
              Setup Credentials
            </CardTitle>
            <CardDescription className="text-slate-300">
              Set your login credentials for this session
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                maxLength={50}
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                maxLength={100}
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                maxLength={100}
              />
            </div>

            {error && (
              <Alert className="border-red-500/50 bg-red-500/10">
                <AlertDescription className="text-red-400">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Credentials
            </Button>
          </form>

          <div className="text-center pt-4 border-t border-slate-700">
            <Button
              onClick={useDemoCredentials}
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Use Demo Credentials (demo/portfolio)
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
            <Shield className="w-4 h-4" />
            <span>Credentials stored securely in session storage</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CredentialsSetup;
