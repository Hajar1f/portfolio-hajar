import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import * as React from "react";

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const Experience = () => {
  const { tString } = useLanguage(); // <-- utiliser tString ici

  const experiences: ExperienceItem[] = [
    {
      title: tString("experience.job1.title"),
      company: tString("experience.job1.company"),
      period: tString("experience.job1.period"),
      description: [
        tString("experience.job1.desc1"),
        tString("experience.job1.desc2"),
        tString("experience.job1.desc3"),
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {tString("experience.title")}
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-0.5 bg-border/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8">
                <div className="flex-shrink-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-background shadow-lg">
                    <Briefcase className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 pb-12 md:pb-0">
                  <Card className="p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {exp.title.split("\n").map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </h3>
                        <p className="text-lg font-semibold text-primary mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
