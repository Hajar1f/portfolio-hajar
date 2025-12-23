import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "./translations";

type ProjectTranslation = { title: string; desc: string; technologies: string[] };
type TranslationValue = string | readonly string[] | ProjectTranslation;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => TranslationValue;
  tString: (key: string) => string;
  tObject: (key: string) => ProjectTranslation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): TranslationValue => {
    const value = translations[language][key as keyof typeof translations["fr"]];
    if (value === undefined) return key;
    return value as TranslationValue;
  };

  const tString = (key: string): string => {
    const value = t(key);
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object" && "title" in value) return value.title;
    return key;
  };

  const tObject = (key: string): ProjectTranslation => {
    const value = t(key);
    if (
      typeof value === "object" &&
      "title" in value &&
      "desc" in value &&
      "technologies" in value
    ) {
      return value;
    }
    return { title: "", desc: "", technologies: [] };
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tString, tObject }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
