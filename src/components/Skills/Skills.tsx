import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJsSquare,
  FaGitAlt,
  FaHandPointUp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiElectron,
  SiJira,
  SiConfluence,
  SiNgrx,
  SiApachecordova,
  SiCss3,
} from "react-icons/si";

import rxjsLogo from "../../assets/rxjs.svg";
import muiLogo from "../../assets/mui.svg";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "React",
    color: "from-blue-500 to-cyan-500",
    icon: <FaReact size={32} />,
  },
  {
    name: "Angular",
    color: "from-red-600 to-red-400",
    icon: <FaAngular size={32} />,
  },
  {
    name: "NgRx",
    color: "from-pink-500 to-pink-500",
    icon: <SiNgrx size={32} />,
  },
  {
    name: "Rxjs",
    color: "from-pink-500 to-pink-800",
    icon: <img src={rxjsLogo} alt="RxJS" className="w-8 h-8" />,
  },
  {
    name: "Cordova",
    color: "from-blue-500 to-blue-500",
    icon: <SiApachecordova size={32} />,
  },
  {
    name: "Electron",
    color: "from-teal-500 to-cyan-500",
    icon: <SiElectron size={32} />,
  },
  {
    name: "Hammer Js",
    color: "from-red-500 to-red-500",
    icon: <FaHandPointUp size={32} />,
  },
  {
    name: "TypeScript",
    color: "from-blue-600 to-blue-400",
    icon: <SiTypescript size={32} />,
  },
  {
    name: "JavaScript",
    color: "from-yellow-500 to-orange-500",
    icon: <FaJsSquare size={32} />,
  },
  {
    name: "Next.js",
    color: "from-gray-700 to-gray-500",
    icon: <SiNextdotjs size={32} />,
  },
  {
    name: "Tailwind CSS",
    color: "from-teal-500 to-cyan-500",
    icon: <SiTailwindcss size={32} />,
  },
  {
    name: "CSS3",
    color: "from-green-500 to-green-300",
    icon: <SiCss3 size={32} />,
  },
    {
    name: "Angular Material",
    color: "from-blue-300 to-pink-300",
    icon: <FaAngular size={32} />,
  },
      {
    name: "MUI",
    color: "from-blue-300 to-blue-300",
    icon: <img src={muiLogo} alt="RxJS" className="w-8 h-8" />,
  },
  {
    name: "Node.js",
    color: "from-green-600 to-green-400",
    icon: <FaNodeJs size={32} />,
  },
  {
    name: "Python",
    color: "from-yellow-600 to-green-500",
    icon: <FaPython size={32} />,
  },
  {
    name: "Git",
    color: "from-orange-600 to-red-500",
    icon: <FaGitAlt size={32} />,
  },
  {
    name: "Jira",
    color: "from-blue-500 to-blue-400",
    icon: <SiJira size={32} />,
  },
  {
    name: "Confluence",
    color: "from-blue-300 to-blue-400",
    icon: <SiConfluence size={32} />,
  },
  {
    name: "Project Management",
    color: "from-green-500 to-green-300",
    icon: <FaGitAlt size={32} />,
  },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-slate-900 scroll-mt-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Proficient in modern web technologies and frameworks
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
