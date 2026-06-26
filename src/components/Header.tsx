import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Orientation } from "@/lib/types/Orientation";
import MobileNav from "./Navigation/mobileNav";
import Navbar from "./Navigation/Navbar";

// const FRONTEND_DEVELOPER = "Frontend Developer";

const Header = () => {
  const NAME = "Ayesha Aziz";
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
            <h1 className="text-xl font-bold text-white">{NAME}</h1>
            {/* <p className="text-sm text-slate-400">
              {FRONTEND_DEVELOPER}
            </p> */}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Navbar
            menuOptions={MENU_OPTIONS}
            orientation={Orientation.HORIZONTAL}
            linkClassName="text-slate-300 hover:text-white transition-colors"
            buttonClassName="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          data-mobile-menu-toggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white hover:text-blue-400" />
          ) : (
            <Menu className="w-6 h-6 text-white hover:text-blue-400" />
          )}
        </button>
      </div>
      <div id="mobile-menu">
        <MobileNav
          menuOptions={MENU_OPTIONS}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
