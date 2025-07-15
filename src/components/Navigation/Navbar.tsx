import SharedConstants from "@/lib/SharedConstants.json";
import { NavbarProps } from "@/lib/types/NavbarProps";
import { Orientation } from "@/lib/types/Orientation";


const Navbar = ({
  menuOptions,
  orientation = Orientation.HORIZONTAL,
  linkClassName = SharedConstants.EMPTY_STRING,
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
    </nav>
  );
};

export default Navbar;
