import { mappedlinks } from "@/lib/utils";
import SocialLinks from "./Social/SocialLinks";
import data from "./Social/social.data.json";
import { Orientation } from "@/lib/types/Orientation";

const MESSAGE =
  "Have a project in mind? Let's discuss how we can work together";
const Contact = () => {
  const links = mappedlinks(data.links);

  return (
    <section id="contact" className="py-20 bg-slate-900 scroll-mt-20">
      {/* <div className="container mx-auto px-4"> */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">{MESSAGE}</p>
        <p className="text-slate-400 mb-8">
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
        <SocialLinks links={links} orientation={Orientation.HORIZONTAL} />
      </div>
    </section>
  );
};

export default Contact;
