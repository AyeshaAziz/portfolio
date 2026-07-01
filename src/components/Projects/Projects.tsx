import { useState, useEffect } from "react";
import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";

const categories = [
  { key: "all", label: "All" },
  { key: "enterprise", label: "Enterprise" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visible, setVisible] = useState(false);

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="py-20 scroll-mt-20 bg-slate-900 border-t border-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
