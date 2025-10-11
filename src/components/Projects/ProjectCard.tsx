import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Slideshow } from "../ui/slide-show";
import { projects } from "./data";

export const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group">
      <CardHeader>
        <CardTitle className="text-white text-center pb-5 leading-normal">
          {project.title}
        </CardTitle>
        <div className="relative overflow-hidden">
          <Slideshow slides={project.images} autoplayInterval= {project.interval} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
        </div>
        <CardDescription className="text-slate-100 leading-normal pt-5 text-lg">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-slate-700 text-slate-300 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-3">
        </div>
      </CardContent>
    </Card>
  );
};