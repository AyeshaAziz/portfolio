
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'React', color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-400' },
    { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-500' },
    { name: 'Tailwind CSS', color: 'from-teal-500 to-cyan-500' },
    { name: 'Node.js', color: 'from-green-600 to-green-400' },
    { name: 'Python', color: 'from-yellow-600 to-green-500' },
    { name: 'Git', color: 'from-orange-600 to-red-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{skill.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
