import { Orientation } from "@/lib/types/Orientation";
import { LucideIcon } from "lucide-react";
import React from "react";

export type SocialLink = {
  href: string;
  icon: string;
  label?: string;
  header?: string;
  subheader?: string;
  iconComponent: LucideIcon
};

type SocialLinksProps = {
  links: SocialLink[];
  orientation?: Orientation;
  gap?: string;
  format?: "icon" | undefined;
};

const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  orientation = "horizontal",
  format,
  gap = "space-x-6",
}) => {
  const flexDirection =
    orientation === Orientation.VERTICAL
      ? "flex-col space-y-6"
      : `flex-row ${gap}`;
  return (
    <div className={`flex justify-center ${flexDirection}`}>
      {links.map((link, idx) =>
        format === "icon" ? (
          <a
            key={idx}
            href={link.href}
            aria-label={link.label || "social-link"}
            className="text-slate-400 hover:text-white transition-colors p-3 rounded-full hover:bg-slate-700"
          >
            <link.iconComponent className="w-6 h-6" />
          </a>
        ) : (
          <a
            key={idx}
            href={link.href}
            aria-label={link.label || "social-link"}
            className="flex items-center space-x-4 group"
          >
            <span className="w-12 h-12 text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:from-purple-300 group-hover:to-purple-800 transition-colors">
              <link.iconComponent />
            </span>
            <div>
              <h4 className="text-white font-semibold">{link.header}</h4>
              <p className="text-slate-400">{link.subheader}</p>
            </div>
          </a>
        )
      )}
    </div>
  );
};

export default SocialLinks;
