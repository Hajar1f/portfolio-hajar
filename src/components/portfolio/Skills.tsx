import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

export const Skills = () => {
  const { t } = useLanguage();

  const rawTech = t("skills.technical.list");
  const technicalSkills: string[] = Array.isArray(rawTech) ? rawTech : [];

  const rawSoft = t("skills.soft.list");
  const softSkills: string[] = Array.isArray(rawSoft) ? rawSoft : [];

  // Certifications
  const certifications = [
    {
      name: t("cert.additive.title") as string,
      description: t("cert.additive.description") as string,
      status: t("cert.additive.status") as string,
    },
    {
      name: t("cert.airbus.title") as string,
      description: t("cert.airbus.description") as string,
      status: t("cert.airbus.status") as string,
    },
  ];

  // Langues
  const languages = [
    { name: t("lang.fr") as string, level: t("lang.natif") as string },
    { name: t("lang.es") as string, level: t("lang.natif") as string },
    { name: t("lang.en") as string, level: t("lang.c1") as string },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {t("skills.title") as string}
        </h2>

        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Compétences techniques */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">
              {t("skills.technical") as string}
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-sm sm:text-base px-5 py-2.5 font-medium hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">
              {t("skills.soft.title") as string}
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-sm sm:text-base px-5 py-2.5 font-medium hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">
              {t("skills.certifications") as string}
            </h3>
            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 bg-background/70 rounded-xl border border-border/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-lg">{cert.name}</h4>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {cert.description.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Langues */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">
              {t("skills.languages") as string}
            </h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, idx) => (
                <Badge
                  key={idx}
                  variant="default"
                  className="text-base px-6 py-3 font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {lang.name} — <span className="ml-1 font-bold">{lang.level}</span>
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
