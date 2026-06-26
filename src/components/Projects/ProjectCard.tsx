import { useState } from "react";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Slideshow } from "../ui/slide-show";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import type { Project } from "./data";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card
        className="bg-slate-800/50 border-slate-700 transition-all duration-500 overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpen(true)}
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(168,85,247,0.15)"
            : "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <CardHeader>
          <CardTitle className="text-white text-center pb-5 leading-normal text-xl">
            {project.title}
            {project.status === "ongoing" && (
              <span className="ml-2 inline-block align-middle px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40">
                Ongoing
              </span>
            )}
          </CardTitle>
          <div className="relative overflow-hidden rounded-lg">
            <Slideshow slides={project.images} autoplayInterval={project.interval} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <CardDescription className="text-slate-300 leading-relaxed pt-5 text-base">
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
        </CardContent>
      </Card>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-center pb-2">
            {project.title}
            {project.status === "ongoing" && (
              <span className="ml-2 inline-block align-middle px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40">
                Ongoing
              </span>
            )}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <Slideshow slides={project.images} autoplayInterval={project.interval} />
          </div>
          <p className="text-slate-300 leading-relaxed text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-slate-700 text-slate-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
