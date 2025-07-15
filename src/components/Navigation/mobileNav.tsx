
import React from "react";
import Navbar from "./Navbar";
import { Orientation } from "@/lib/types/Orientation";

interface MobileNavProps {
  menuOptions: string[];
  // onLogout: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  menuOptions, 
  // onLogout, 
  isMenuOpen, 
  setIsMenuOpen 
}) => {
  return (
    <>
      {isMenuOpen && (
        <Navbar
          menuOptions={menuOptions}
          onLogout={() => {
            setIsMenuOpen(false);
            // onLogout();
          }}
          orientation={Orientation.VERTICAL}
          linkClassName="text-white hover:text-blue-400 py-2"
          buttonClassName="text-white hover:text-red-400 py-2 text-left"
          navClassName="md:hidden px-4 pb-4 bg-slate-900/95 border-b border-slate-700"
          onLinkClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default MobileNav;
