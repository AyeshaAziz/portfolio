
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that follows best practices.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to user experience.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and cross-browser compatibility.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working effectively in teams using modern development workflows and tools.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Passionate frontend developer with 5+ years of experience creating modern web applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                I'm a frontend developer who loves turning complex problems into simple, beautiful designs. 
                My journey in web development started 5 years ago, and I've been passionate about creating 
                exceptional user experiences ever since.
              </p>
              <p>
                I specialize in React, TypeScript, and modern CSS frameworks, with a strong focus on 
                performance optimization and accessibility. I believe that great code should be both 
                functional and elegant.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
