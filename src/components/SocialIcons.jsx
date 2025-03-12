import React, { useContext } from "react";
import Github from "./icons/Github.jsx";
import Instagram from "./icons/Instagram.jsx";
import Linkedin from "./icons/Linkedin.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";

const SocialIcons = ({ width = 32, height = 32 }) => {
  const { language } = useContext(LanguageContext);

  const socialTranslations = {
    en: { my_blog: "My blog" },
    es: { my_blog: "Mi blog" },
  };

  // Datos de redes sociales
  const socialLinks = [
    {
      id: "github",
      href: "https://github.com/DanielCaicedo97",
      label: "GitHub",
      Icon: Github,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/daniel-alejandro-caicedo-benavides-7a4b1121b/",
      label: "LinkedIn",
      Icon: Linkedin,
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/caicedo.daniel.dev/",
      label: "Instagram",
      Icon: Instagram,
    },
  ];

  return (
    <ul className="grid grid-cols-3 gap-6 md:flex md:justify-around items-center w-full">
      {socialLinks.map(({ id, href, label, Icon }) => (
        <li key={id} className="flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
          >
            {React.createElement(Icon, {
              width,
              height,
              className:
                "fill-primary-dark dark:fill-primary hover:scale-110 transition-all duration-200",
            })}
          </a>
        </li>
      ))}

      {/* Botón "My Blog" centrado correctamente */}
      <li className="col-span-3 flex justify-center items-center md:col-span-1 w-full h-full">
        <a
          href="https://danidev.io/blog/"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            relative overflow-hidden font-medium rounded-lg flex items-center justify-center 
            px-6 py-2 transition-all duration-500 transform hover:scale-105 
            bg-gradient-to-r from-[#A19CCC] to-[#4FC0EF] 
            dark:from-[#092349] dark:to-[#4fbfef85] 
            before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-white/10 before:to-transparent before:opacity-0 
            hover:before:opacity-100 before:transition-opacity hover:brightness-110 group
            w-full h-full
          `}
        >
          <span className="text-center text-dark dark:text-white font-bold flex items-center justify-center w-full h-full">
            {socialTranslations[language].my_blog}
          </span>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
