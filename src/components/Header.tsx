import { useAuth } from "../contexts/SupabaseAuthContext";
import Navbar from "./Navbar";
import SharedConstants from "../lib/SharedConstants.json";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Orientation } from "@/lib/types/Orientation";
import MobileNav from "./mobileNav";

const Header = () => {
  const { signOut, user } = useAuth();
  const MENU_OPTIONS = ["About", "Skills", "Projects", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHeaderClick = () => {
    window.location.hash = "#introduction";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div onClick={handleHeaderClick} style={{ cursor: "pointer" }}>
            <h1 className="text-xl font-bold text-white">{user?.email?.split('@')[0] || 'User'}</h1>
            <p className="text-sm text-slate-400">
              {SharedConstants.FRONTEND_DEVELOPER}
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Navbar
            menuOptions={MENU_OPTIONS}
            onLogout={signOut}
            orientation={Orientation.HORIZONTAL}
            linkClassName="text-slate-300 hover:text-white transition-colors"
            buttonClassName="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white hover:text-blue-400" />
          ) : (
            <Menu className="w-6 h-6 text-white hover:text-blue-400" />
          )}
        </button>
      </div>
      <MobileNav
        menuOptions={MENU_OPTIONS}
        onLogout={signOut}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};

export default Header;
