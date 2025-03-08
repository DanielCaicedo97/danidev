import React from "react";
import Github from "./icons/Github.jsx";
import Instagram from "./icons/Instagram.jsx";
import Linkedin from "./icons/Linkedin.jsx";
const SocialIcons = ({ width = 32, height = 32 }) => {
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
    <ul className="space-x-4 mt-6 flex justify-around sm:flex-row">
      {socialLinks.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            alt={social.alt}
            target="_blank"
            rel="noopener noreferrer"
            title={social.alt}
          >
            {React.createElement(social.Icon, {
              width: width,
              height: height,
              className:
                "fill-primary-dark dark:fill-primary hover:scale-110 transition-all duration-200 ",
            })}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
