// Interests.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Dumbbell, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Définition de la liste des intérêts
const interests = [
  {
    icon: Dumbbell,
    titleKey: "interests.powerlifting.title",
    descriptionKey: "interests.powerlifting.desc",
  },
  {
    icon: HeartHandshake,
    titleKey: "interests.recycling.title",
    descriptionKey: "interests.recycling.desc",
  },
];

export const Interests = () => {
  // Utilisation du contexte langue
  const { tString } = useLanguage();

  return (
    <section id="interests" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {tString("interests.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card
                key={index}
                className="group p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="h-9 w-9 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {tString(interest.titleKey)}
                </h3>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {tString(interest.descriptionKey)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
