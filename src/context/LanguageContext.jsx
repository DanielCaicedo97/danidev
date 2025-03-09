import React, { createContext, useState } from "react";

// Crear contexto
export const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma inicial

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "es" ? "en" : "es";
      localStorage.setItem("Language", newLanguage);
      document.documentElement.lang = newLanguage.toLowerCase();
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
