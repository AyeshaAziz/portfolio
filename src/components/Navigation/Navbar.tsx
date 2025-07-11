import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import SharedConstants from "@/lib/SharedConstants.json";
import { NavbarProps } from "@/lib/types/NavbarProps";
import { Orientation } from "@/lib/types/Orientation";

const LOGOUT = "Logout";

const Navbar = ({
  menuOptions,
  onLogout,
  orientation = Orientation.HORIZONTAL,
  linkClassName = SharedConstants.EMPTY_STRING,
  buttonClassName = SharedConstants.EMPTY_STRING,
  navClassName = SharedConstants.EMPTY_STRING,
  onLinkClick,
}: NavbarProps) => {
  const isMobile = orientation === Orientation.VERTICAL;
  return (
    <nav
      className={`${
        isMobile ? "flex flex-col space-y-2" : "flex items-center space-x-6"
      } ${navClassName}`}
    >
      {menuOptions.map((option) => (
        <a
          key={option}
          href={`#${option.toLowerCase()}`}
          className={linkClassName}
          onClick={onLinkClick}
        >
          {option}
        </a>
      ))}

      {isMobile ? (
        <a
          href="#"
          className={`${linkClassName} text-red-400 hover:text-red-600`}
          onClick={(e) => {
            e.preventDefault();
            onLogout();
          }}
        >
          {LOGOUT}
        </a>
      ) : (
        <Button
          onClick={onLogout}
          size="sm"
          className={`${buttonClassName} text-left w-full justify-start ml-0`}
        >
          <LogOut className="w-4 h-4 mr-2" />
          {LOGOUT}
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
