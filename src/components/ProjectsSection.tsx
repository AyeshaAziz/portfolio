
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop',
      tech: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop',
      tech: ['Vue.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-slate-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
