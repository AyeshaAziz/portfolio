import { Card, CardContent } from "../ui/card";

const SkillCard = ({ skill }) => (
  <Card className="bg-slate-700/50 border-slate-600 overflow-hidden relative group hover:scale-105 transition-transform duration-300 shadow-lg">
    <CardContent className="p-6 text-center relative z-10">
      <div
        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:animate-gradient`}
      >
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
    </CardContent>
    {/* Gradient overlay animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 opacity-10 group-hover:opacity-30 animate-pulse rounded-lg pointer-events-none"></div>
  </Card>
);

export default SkillCard;