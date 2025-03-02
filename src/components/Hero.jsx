import React, { useEffect, useState } from "react";
import { robot } from "../assets";
import LogoParticles from "../components/particles/LogoParticles";

import Github from "./icons/Github.jsx";
import Instagram from "./icons/Instagram.jsx";
import Linkedin from "./icons/Linkedin.jsx";
import Logo from "./icons/Logo.jsx";

const Hero = () => {
  // Datos de las redes sociales

  const [isMobile, setIsMobile] = useState(false);
  // Detectar si la pantalla es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm: en Tailwind (640px)
    };

    handleResize(); // Llamada inicial

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section
      id="home"
      className="flex flex-col h-screen lg:flex-row items-center justify-center lg:justify-between lg:h-screen px-6 sm:px-16  md:px-24 lg:px-32 py-12 space-y-10 lg:space-y-0 "
    >
      {/* INFORMATION DANI DEV */}

      <div className="flex flex-1 w-[100%] flex-col xl:px-0 sm:mt-0 mt-[35%] sm:px-16 px-6 mr-10">
        {/* Available for projects  */}
        <div className="flex border-1 border-primary-dark dark:border-primary w-[271px] rounded-full p-2 justify-start items-center ">
          <span className="bg-[#0DFF00] w-[14px] h-[14px] m-2 rounded-full "></span>
          <h3 className="text-primary-dark dark:text-primary">
            Available for projects
          </h3>
        </div>
        {/* Description */}
        <div>
          <h1 className="text-dark dark:text-white  text-[40px] sm:text-[64px] font-bold">
            Hi, I'm Daniel
          </h1>
          <p className="text-dark dark:text-white text-[20px]">
            A Electronic Engineer | Mechatronic Designer | Software Developer
          </p>
          <p className="text-[#787878]">
            I’m passionate about AI and robotics, merging technology with
            creativity to build innovative solutions. Let’s shape the future
            together.
          </p>
        </div>
        {/* Social links */}
        <div>
          {/* Redes sociales */}
          <ul className="space-x-4 mt-6 hidden sm:flex">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  alt={social.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.createElement(social.Icon, {
                    width: 50,
                    height: 50,
                    className:
                      "fill-primary-dark dark:fill-primary hover:scale-110 transition-all duration-200 ",
                  })}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* IMAGE 8 BIT  */}
      <div
        id="social_logo"
        className="flex flex-1 w-full h-full justify-center items-start sm:items-center md:my-0 relative"
      >
        <div className="flex flex-col sm:hidden  justify-center items-center px-6 w-full">
          {/* Social links */}
          {isMobile && (
            <div id="logo_particles-mobile" className="mb-16 w-full h-full">
              <LogoParticles
                key="mobile"
                polygonScale={0.4}
                particlesNumbers={350}
                linkDistance={13}
                moveRadius={0.5}
                modeBubbleDistance={20}
                modeBubbleSize={2}
              />
            </div>
          )}

          <div id="social_mobile" className="w-full">
            {/* Redes sociales */}
            <ul className="flex space-x-12 justify-center">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {React.createElement(social.Icon, {
                      width: 40,
                      height: 40,
                      className:
                        "fill-primary-dark dark:fill-primary hover:scale-110 transition-all duration-200 ",
                    })}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*IMAGE 8 BIT MODE MOBILE  */}
          {/* <div className="flex-1/2 relative w-full">
            <img
              className="absolute -top-15 w-full  object-cover z-[10]"
              src={robot}
              alt="Dani_dev_robot"
            />
          </div> */}
        </div>

        {/* <img
          className="z-[10] w-[70%] hidden sm:flex object-cover"
          src={robot}
          alt="Dani_dev_robot"
        /> */}

        {/* 🔹 Versión para Escritorio */}
        {!isMobile && (
          <div
            id="logo_particles-desktop"
            className="z-[10] w-full h-[70%] hidden sm:flex "
          >
            <LogoParticles
              key="desktop"
              polygonScale={1.5}
              particlesNumbers={500}
              linkDistance={45}
              moveRadius={3}
              modeBubbleDistance={50}
              modeBubbleSize={5}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
