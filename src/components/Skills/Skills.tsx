import { useState, useEffect, useRef } from "react";
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
  SiRedux,
  SiApachecordova,
  SiCss3,
  SiOpenai,
  SiClaude,
  SiOpensourceinitiative,
} from "react-icons/si";
import { LuTerminal, LuBot } from "react-icons/lu";

import rxjsLogo from "../../assets/rxjs.svg";
import muiLogo from "../../assets/mui.svg";
import SkillCard from "./SkillCard";

type SkillCategory = "all" | "frontend" | "state-mgmt" | "tools" | "ai";

interface Skill {
  name: string;
  category: SkillCategory;
  color: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { name: "React", category: "frontend", color: "from-blue-500 to-cyan-500", icon: <FaReact size={32} /> },
  { name: "Angular", category: "frontend", color: "from-red-600 to-red-400", icon: <FaAngular size={32} /> },
  { name: "Next.js", category: "frontend", color: "from-gray-700 to-gray-500", icon: <SiNextdotjs size={32} /> },
  { name: "TypeScript", category: "frontend", color: "from-blue-600 to-blue-400", icon: <SiTypescript size={32} /> },
  { name: "JavaScript", category: "frontend", color: "from-yellow-500 to-orange-500", icon: <FaJsSquare size={32} /> },
  { name: "Tailwind CSS", category: "frontend", color: "from-teal-500 to-cyan-500", icon: <SiTailwindcss size={32} /> },
  { name: "CSS3", category: "frontend", color: "from-green-500 to-green-300", icon: <SiCss3 size={32} /> },
  { name: "Angular Material", category: "frontend", color: "from-blue-300 to-pink-300", icon: <FaAngular size={32} /> },
  { name: "MUI", category: "frontend", color: "from-blue-300 to-blue-300", icon: <img src={muiLogo} alt="MUI" className="w-8 h-8" /> },
  { name: "NgRx", category: "state-mgmt", color: "from-pink-500 to-pink-500", icon: <SiNgrx size={32} /> },
  { name: "Redux", category: "state-mgmt", color: "from-purple-600 to-blue-500", icon: <SiRedux size={32} /> },
  { name: "Rxjs", category: "state-mgmt", color: "from-pink-500 to-pink-800", icon: <img src={rxjsLogo} alt="RxJS" className="w-8 h-8" /> },
  { name: "Cordova", category: "tools", color: "from-blue-500 to-blue-500", icon: <SiApachecordova size={32} /> },
  { name: "Electron", category: "tools", color: "from-teal-500 to-cyan-500", icon: <SiElectron size={32} /> },
  { name: "Hammer Js", category: "tools", color: "from-red-500 to-red-500", icon: <FaHandPointUp size={32} /> },
  { name: "Node.js", category: "tools", color: "from-green-600 to-green-400", icon: <FaNodeJs size={32} /> },
  { name: "Python", category: "tools", color: "from-yellow-600 to-green-500", icon: <FaPython size={32} /> },
  { name: "Git", category: "tools", color: "from-orange-600 to-red-500", icon: <FaGitAlt size={32} /> },
  { name: "Jira", category: "tools", color: "from-blue-500 to-blue-400", icon: <SiJira size={32} /> },
  { name: "Confluence", category: "tools", color: "from-blue-300 to-blue-400", icon: <SiConfluence size={32} /> },
  { name: "Project Management", category: "tools", color: "from-green-500 to-green-300", icon: <FaGitAlt size={32} /> },
  { name: "GitHub Copilot", category: "ai", color: "from-yellow-500 to-yellow-300", icon: <SiOpenai size={32} /> },
  { name: "Cursor", category: "ai", color: "from-green-600 to-emerald-400", icon: <LuTerminal size={32} /> },
  { name: "Claude Code", category: "ai", color: "from-emerald-500 to-teal-400", icon: <SiClaude size={32} /> },
  { name: "OpenCode", category: "ai", color: "from-violet-500 to-fuchsia-500", icon: <SiOpensourceinitiative size={32} /> },
  { name: "Claude / ChatGPT", category: "ai", color: "from-emerald-500 to-teal-400", icon: <SiClaude size={32} /> },
  { name: "AI Agent Workflows", category: "ai", color: "from-cyan-500 to-blue-500", icon: <LuBot size={32} /> },
];

const categories: { key: SkillCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "state-mgmt", label: "State Management" },
  { key: "tools", label: "Tools & Platforms" },
  { key: "ai", label: "AI" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const currentSkills = activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);
    setVisibleCards([]);
    const timer = setTimeout(() => {
      currentSkills.forEach((s, i) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, s.name]);
        }, i * 80);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 scroll-mt-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Proficient in modern web technologies and frameworks
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className={`transition-all duration-500 ${visibleCards.includes(skill.name)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
