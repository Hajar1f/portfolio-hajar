import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const { t } = useLanguage();

  // Récupère tous les projets depuis les traductions
  const projects = t("projects") as unknown as {
    key: string;
    title: string;
    desc: string;
    technologies: string[];
  }[];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {t("projects.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.key}
              className="group overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-border/50"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b">
                <div className="text-6xl font-bold text-primary/20 select-none">
                  0{index + 1}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-medium text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
