import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap, Users } from "lucide-react";
import aboutData from "@/data/about-data.json";
import SharedConstants from "@/lib/SharedConstants.json";

const About = () => {
  // Map icon names to actual components
  const iconMap: Record<string, JSX.Element> = {
    Code2: <Code2 className="w-8 h-8" />,
    Palette: <Palette className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
  };

  return (
    <section id="about" className="py-20 bg-slate-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{aboutData.title}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {aboutData.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                {aboutData.paragraph[SharedConstants.ZERO]}
              </p>
              <p>
                {aboutData.paragraph[SharedConstants.ONE]}
              </p>
              <p>
                {aboutData.paragraph[SharedConstants.TWO]}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {aboutData.features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
