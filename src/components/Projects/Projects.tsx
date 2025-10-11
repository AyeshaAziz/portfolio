import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";

const Projects = () => (
  <section
    id="projects"
    className="py-20 scroll-mt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
  >
    <div className="container mx-auto px-0">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
