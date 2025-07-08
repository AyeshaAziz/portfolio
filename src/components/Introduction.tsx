import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Github, Mail, Linkedin, User } from "lucide-react";
import SharedConstants from "../lib/SharedConstants.json";

const Introduction = () => {
  return (
    <section id="introduction"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  className="rounded-full object-contain w-full h-full"
                  src={SharedConstants.AVATAR_IMAGE_SRC}
                  alt={SharedConstants.AVATAR_ALT_TEXT}
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <User className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4"></h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Crafting beautiful, responsive web experiences with modern
              technologies and creative problem-solving
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3 text-lg"
            >
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors p-3 rounded-full hover:bg-slate-700"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors p-3 rounded-full hover:bg-slate-700"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors p-3 rounded-full hover:bg-slate-700"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
