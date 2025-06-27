
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';

const PortfolioHeader = () => {
  const { logout, user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{user?.name}</h1>
            <p className="text-sm text-slate-400">Frontend Developer</p>
          </div>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          
          <Button 
            onClick={logout}
            variant="outline"
            size="sm"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default PortfolioHeader;
