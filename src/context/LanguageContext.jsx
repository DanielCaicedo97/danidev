import React, { createContext, useEffect, useState } from "react";

// Crear contexto
export const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("Language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("Language", language);
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
