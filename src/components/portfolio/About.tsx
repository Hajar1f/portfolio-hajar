import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export const About = () => {
  const { tString } = useLanguage(); // <-- Utiliser tString pour forcer string

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-subtle section-padding px-6"
    >
      <div className="container-custom max-w-4xl">
        <div className="text-center space-y-8">
          {/* Nom */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="gradient-text">TALBI El Mouatassem </span>
          </h1>

          {/* Titre multilingue */}
          <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
            {tString("about.title")}
          </h2>

          {/* Description justifiée */}
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto text-justify">
            {tString("about.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-10">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="shadow-soft text-lg px-10"
            >
              {tString("about.cta")}
            </Button>

            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/el-mouatassem-billah-talbi-azzi-404080351/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>

              {/* Mail */}
              <a href="mailto:elmouatassem2004@gmail.com">
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
