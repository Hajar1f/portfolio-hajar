import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const { tString, language } = useLanguage(); // <-- utiliser tString

  // Données de formation
  const educationData = {
    fr: [
      {
        degree: "Cycle ingénieur généraliste",
        school: "IMT Mines d'Albi, Albi",
        period: "2026 - 2029",
        description: "Option Matériaux et Procédés pour l'aéronautique et le spatial : conception de matériaux haute performance et procédés associés, simulation et analyse mécanique, évaluation en conditions extrêmes.",
      },
      {
        degree: "CPGE TSI 1re et 2e années",
        school: "Lycée Saint-Cricq, Pau",
        period: "2023 - 2026",
        description: "Sciences de l'ingénieur, mécanique, matériaux, résistance des matériaux (RDM), physique appliquée et modélisation technique pour l’ingénierie.",
      },
      {
        degree: "Baccalauréat Technologique",
        school: "Lycée Saint-Cricq, Pau",
        period: "2021 - 2023",
        description: "Mention Très Bien",
      },
    ],
    en: [
      {
        degree: "General Engineering Program",
        school: "IMT Mines d'Albi, Albi",
        period: "2026 - 2029",
        description: "Option Materials and Processes for Aeronautics and Space: design of high-performance materials and associated processes, simulation and mechanical analysis, evaluation under extreme conditions.",
      },
      {
        degree: "CPGE TSI 1st and 2nd years",
        school: "Lycée Saint-Cricq, Pau",
        period: "2023 - 2026",
        description: "Engineering Science, Mechanics, Materials Science, Strength of materials (SOM), Applied Physics",
      },
      {
        degree: "Technological Baccalaureate",
        school: "Lycée Saint-Cricq, Pau",
        period: "2021 - 2023",
        description: "Graduated with Highest Honors",
      },
    ],
    es: [
      {
        degree: "Ciclo de Ingeniería General",
        school: "IMT Mines d'Albi, Albi",
        period: "2026 - 2029",
        description: "Opcion en Materiales y Procesos para Aeronáutica y Espacio: diseño de materiales de alto rendimiento y procesos asociados, simulación y análisis mecánico, evaluación en condiciones extremas.",
      },
      {
        degree: "CPGE TSI 1º y 2º año",
        school: "Lycée Saint-Cricq, Pau",
        period: "2023 - 2026",
        description: "Ciencias de la Ingeniería, Mecánica, Ciencia de Materiales, Resistencia de materiales (RDM), Física aplicada y Modelización técnica para la ingeniería ",
      },
      {
        degree: "Bachillerato Tecnológico",
        school: "Lycée Saint-Cricq, Pau",
        period: "2021 - 2023",
        description: "Mención Muy Bien",
      },
    ],
  };

  // On force l'accès avec 'as any' pour éviter l'erreur TypeScript sur language dynamique
  const currentEducation = (educationData as any)[language] || educationData.fr;

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {tString("education.title") || "Formation"} {/* <-- correction ici */}
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block" />

          <div className="space-y-12">
            {currentEducation.map((edu: any, index: number) => (
              <div
                key={index}
                className={`relative flex items-center gap-6 md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-background shadow-lg">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <Card className="p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-lg font-semibold text-primary mb-2">
                      {edu.school}
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </Card>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
