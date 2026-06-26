import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { Orientation } from "@/lib/types/Orientation";

interface MobileNavProps {
  menuOptions: string[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  menuOptions,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    toggleRef.current = document.querySelector<HTMLElement>(
      "[data-mobile-menu-toggle]",
    );
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }

      if (e.key === "Tab" && navRef.current) {
        const focusable = navRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div
          ref={navRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden"
        >
          <Navbar
            menuOptions={menuOptions}
            orientation={Orientation.VERTICAL}
            linkClassName="text-white hover:text-blue-400 py-2"
            buttonClassName="text-white hover:text-red-400 py-2 text-left"
            navClassName="px-4 pb-4 bg-slate-900/95 border-b border-slate-700"
            onLinkClick={() => {
              setIsMenuOpen(false);
              toggleRef.current?.focus();
            }}
          />
        </div>
      )}
    </>
  );
};

export default MobileNav;
