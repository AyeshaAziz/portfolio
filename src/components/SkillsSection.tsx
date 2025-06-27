
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-orange-500' },
    { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-500' },
    { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-cyan-500' },
    { name: 'Node.js', level: 80, color: 'from-green-600 to-green-400' },
    { name: 'Python', level: 75, color: 'from-yellow-600 to-green-500' },
    { name: 'Git', level: 90, color: 'from-orange-600 to-red-500' },
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
