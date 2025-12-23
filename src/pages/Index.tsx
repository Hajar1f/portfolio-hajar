import { ThemeProvider } from "@/contexts/ThemeContext";

import { LanguageProvider } from "@/contexts/LanguageContext";

import  {Header}  from "@/components/portfolio/Header";

import { About } from "@/components/portfolio/About";

import { Skills } from "@/components/portfolio/Skills";

import { Education } from "@/components/portfolio/Education";

import { Experience } from "@/components/portfolio/Experience";

import { Projects } from "@/components/portfolio/Projects";

import { Interests } from "@/components/portfolio/Interests";

import { Contact } from "@/components/portfolio/Contact";



import moi from "@/assets/moi.png.png";



const Index = () => {

  return (

    <ThemeProvider>

      <LanguageProvider>

        <div className="min-h-screen">

          <Header />



          <div className="text-center relative"> {/* Ajout de "relative" ici */}

            <img

              src={moi}

              alt="Moi"

              // IMPORTANT : Ajout de "relative" et "z-20" pour que l'image soit AU-DESSUS

              className="w-48 h-48 rounded-full mx-auto mt-32 mb-8 object-cover"

            />

          </div>



          {/* J'ai enlevé le "relative z-10" d'ici pour que l'image puisse passer au-dessus */}

          <main className="-mt-12 md:-mt-32">

            <About />

            <Skills />

            <Education />

            <Experience />

            <Projects />

            <Interests />

            <Contact />

          </main>



          <footer className="bg-card border-t border-border py-8">

            <div className="container-custom px-4 text-center text-muted-foreground">

              <p>© E.M. TALBI</p>

            </div>

          </footer>

        </div>

      </LanguageProvider>

    </ThemeProvider>

  );

};



export default Index