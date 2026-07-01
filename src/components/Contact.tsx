import { mappedlinks } from "@/lib/utils";
import SocialLinks from "./Social/SocialLinks";
import data from "./Social/social.data.json";
import { Orientation } from "@/lib/types/Orientation";

const MESSAGE =
  "Have a project in mind? Let's discuss how we can work together";
const Contact = () => {
  const links = mappedlinks(data.links);

  return (
    <section id="contact" className="py-20 scroll-mt-20 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 border-t border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">{MESSAGE}</p>
        <p className="text-slate-400 mb-8 pr-5 pl-5">
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
        <SocialLinks links={links} orientation={Orientation.HORIZONTAL} />
        <p className="mt-12 text-xs text-slate-600">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
