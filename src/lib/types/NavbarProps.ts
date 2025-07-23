import { Orientation } from "./Orientation";

export interface NavbarProps {
  menuOptions: string[];
  orientation?: Orientation;
  linkClassName?: string;
  buttonClassName?: string;
  navClassName?: string;
  onLinkClick?: () => void;}