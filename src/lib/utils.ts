import { clsx, type ClassValue } from "clsx"
import { LucideIcon, Mail, Github, Linkedin } from "lucide-react";
import { twMerge } from "tailwind-merge"

const ICONS: Record<string, LucideIcon> = {
  Mail,
  Github,
  Linkedin,
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const mappedlinks =(links)=>
  links.map((link) => {
    const iconComponent = ICONS[link.icon]; 
    return {...link, iconComponent};
  });