import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import avatar from "../assets/avatar.jpg";
import cv from "../assets/cv.pdf";
import SocialLinks from "./Social/SocialLinks";
import data from "./Social/social.data.json";
import { mappedlinks } from "@/lib/utils";

const Introduction = () => {
  const links = mappedlinks(data.links);
  return (
    <section
      id="introduction"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  className="rounded-full object-contain w-full h-full"
                  src={avatar}
                  alt="Ayesha Aziz's Avatar"
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <User className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4"></h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Crafting beautiful, responsive web experiences with modern
              technologies and creative problem solving
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#projects">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                View My Work
              </Button>
            </a>
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                View CV
              </Button>
            </a>
          </div>
          <SocialLinks links={links} format="icon" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
