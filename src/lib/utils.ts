import { clsx, type ClassValue } from "clsx";
import { LucideIcon, Mail, Github, Linkedin } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface SocialLinkRaw {
  href: string;
  icon: string;
  label?: string;
  header?: string;
  subheader?: string;
}

export interface SocialLink extends SocialLinkRaw {
  iconComponent: LucideIcon;
}

const ICONS: Record<string, LucideIcon> = {
  Mail,
  Github,
  Linkedin,
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const mappedlinks = (links: SocialLinkRaw[]): SocialLink[] =>
  links.map((link) => {
    const iconComponent = ICONS[link.icon];
    return { ...link, iconComponent };
  });
