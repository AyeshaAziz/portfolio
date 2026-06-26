import { Card, CardContent } from "../ui/card";

interface Skill {
  name: string;
  color: string;
  icon: JSX.Element;
}

const SkillCard = ({ skill }: { skill: Skill }) => (
  <Card className="bg-slate-700/50 border-slate-600 overflow-hidden relative group hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-purple-500/10">
    <CardContent className="p-6 text-center relative z-10">
      <div
        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
      >
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
        {skill.name}
      </h3>
    </CardContent>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg pointer-events-none" />
  </Card>
);

export default SkillCard;
