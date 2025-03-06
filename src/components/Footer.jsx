import React from "react";
import Github from "./icons/Github.jsx";
import Instagram from "./icons/Instagram.jsx";
import Linkedin from "./icons/Linkedin.jsx";

const Footer = () => {
  // Datos de las redes sociales
  const socialLinks = [
    {
      href: "https://github.com/DanielCaicedo97",
      alt: "GitHub",
      Icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/daniel-alejandro-caicedo-benavides-7a4b1121b/",
      alt: "LinkedIn",
      Icon: Linkedin,
    },
    {
      href: "https://www.instagram.com/caicedo.daniel.dev/",
      alt: "Instagram",
      Icon: Instagram,
    },
  ];
  return (
    <footer
      id="footer"
      className="flex flex-col sm:flex-row w-full items-center justify-between px-6 my-8 md:px-16 py-1"
    >
      <div className="flex flex-col  items-start">
        <div>
          <h4 className="text-dark dark:text-white text-[20px] font-bold">
            Danidev
          </h4>
        </div>
        <div>
          <p className="text-dark dark:text-white text-[16px]">
            © 2025 DaniDev. All rights reserved.
          </p>
        </div>
      </div>
      <div>
        {/* Redes sociales */}
        <ul className="space-x-4 mt-6 flex justify-between sm:flex-row">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.href}
                alt={social.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                {React.createElement(social.Icon, {
                  width: 32,
                  height: 32,
                  className:
                    "fill-primary-dark dark:fill-primary hover:scale-110 transition-all duration-200 ",
                })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
