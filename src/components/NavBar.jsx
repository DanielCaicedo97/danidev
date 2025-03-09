import React, { useState, useEffect, useContext } from "react";
import { close, menu } from "../assets";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { navbar } from "../data/translations.js";

import Logo from "./icons/Logo.jsx";
import Moon from "./icons/Moon.jsx";
import Sun from "./icons/Sun.jsx";

const NavBar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = navbar[language];
  const navLinks = [
    { href: "#home", label: t.home },
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  // Clip-path shapes
  const leftShape = "polygon(0 0, 75% 0, 100% 100%, 25% 100%)";
  const centerShape = "polygon(0 0, 100% 0, 85% 100%, 15% 100%)";
  const rightShape = "polygon(25% 0, 100% 0, 75% 100%, 0 100%)";

  // Obtener preferencias del usuario o del sistema
  const getInitialTheme = () => {
    const userPreference = localStorage.getItem("theme");
    if (userPreference) return userPreference === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  // Alternar entre temas y almacenarlo en localStorage
  const handleDarkMode = () => {
    setDarkMode((prev) => {
      const newTheme = !prev ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return !prev;
    });
  };

  // Aplicar el tema guardado o el del sistema
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="top-1/2 w-full">
      <nav
        id="navbar_desktop"
        className="justify-between items-center h-[150px] w-full size-full hidden lg:flex"
        aria-label="Main navigation"
      >
        {/* Forma lado derecho */}
        <div className="relative w-[410px] h-[100px]">
          {/* Sombra */}
          <div
            className="absolute w-full h-full bg-secondary"
            style={{
              clipPath: leftShape,
              transform: "translate(-4px, 8px)", // Desplaza la sombra
              zIndex: 0, // Coloca la sombra detrás
            }}
          ></div>

          {/* Forma principal */}
          <div
            className="absolute w-full h-full bg-primary dark:bg-primary-dark flex justify-center items-center text-white font-bold"
            style={{
              clipPath: leftShape,
              zIndex: 1, // Coloca la forma principal encima de la sombra
            }}
          >
            <Logo className="fill-primary-dark dark:fill-primary" />
          </div>
        </div>

        {/* Center Navigation */}
        <div className="relative w-[900px] h-[100px]">
          {/* Sombra */}
          <div
            className="absolute w-full h-full bg-secondary"
            style={{
              clipPath: centerShape,
              transform: "translate(9px, 8px)", // Desplaza la sombra
              zIndex: 0, // Coloca la sombra detrás
            }}
          ></div>

          {/* Forma principal */}
          <div
            className="w-full h-full bg-primary dark:bg-primary-dark flex justify-center items-center"
            style={{
              clipPath: centerShape,
              zIndex: 1, // Coloca la forma principal encima de la sombra
            }}
          >
            <ul className="flex space-x-3 xl:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className=" text-primary-dark dark:text-primary text-lg font-semibold animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Decorative Shape */}
        <div className="relative w-[410px] h-[100px]">
          {/* Sombra */}
          <div
            className="absolute w-full h-full bg-secondary"
            style={{
              clipPath: rightShape,
              transform: "translate(4px, 8px)", // Desplaza la sombra
              zIndex: 0, // Coloca la sombra detrás
            }}
          ></div>

          {/* Forma principal */}
          <div
            className="absolute w-full h-full bg-primary dark:bg-primary-dark flex justify-center items-center"
            style={{
              clipPath: rightShape,
              zIndex: 1, // Coloca la forma principal encima de la sombra
            }}
          >
            <button
              onClick={handleDarkMode}
              className={` flex justify-center items-center rounded-full 
                 bg-primary dark:bg-primary-dark hover:scale-120 transition-all duration-300 m-2 p-4 ${
                   darkMode ? "rotate-0 ease-out" : "rotate-45 ease-out"
                 }`}
            >
              {darkMode ? (
                <Sun className="fill-primary-dark dark:fill-primary" />
              ) : (
                <Moon className="fill-primary-dark dark:fill-primary" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center h-12 w-12 rounded-full dark:bg-primary bg-primary-dark
             dark:text-black text-white text-xl font-bold hover:scale-120 transition-all duration-300 
            shadow-md"
            >
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* navbar mobile */}
      <nav
        id="navbar_mobile"
        className="flex justify-center items-center lg:hidden "
      >
        {/* Center Navigation */}
        <div className="relative w-full h-[calc(100vw*0.25)] mt-4 ">
          {/* Sombra */}
          <div
            className="absolute w-full h-full bg-secondary "
            style={{
              clipPath: rightShape,
              transform: "translate(8px, 8px)", // Desplaza la sombra
              zIndex: 0, // Coloca la sombra detrás
            }}
          ></div>

          {/* Forma principal */}
          <div
            className=" w-full h-full bg-primary-dark  flex justify-center items-center"
            style={{
              clipPath: rightShape,
              zIndex: 1, // Coloca la forma principal encima de la sombra
            }}
          >
            <div className="flex justify-between items-center w-[50%]">
              <div className="flex-1 flex justify-center">
                <img alt="logo" src="./logo.svg" className="w-[25%]" />
              </div>
              <div>
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className={`transition-all duration-200 ${
                    toggle ? "rotate-90 ease-out" : "rotate-0 ease-out"
                  }`}
                  onClick={() => setToggle((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col  justify-between max-w-72 items-center p-4 absolute top-8 left-0 md:left-32 space-y-4 bg-secondary mx-2 my-2 w-[60%] rounded-xl `}
        >
          <ul className="flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-2xl font-semibold hover:text-gray-300 transition-all duration-200"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={handleDarkMode}
            className={` flex justify-center items-center rounded-full 
                  hover:scale-120 transition-all duration-300  ${
                    darkMode ? "rotate-0 ease-out" : "rotate-45 ease-out"
                  }`}
          >
            {darkMode ? (
              <Sun className="fill-primary" />
            ) : (
              <Moon className="fill-primary" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center h-10 w-full max-w-32 rounded-full bg-primary 
              text-black text-xl font-bold hover:scale-120 transition-all duration-300 
            shadow-md"
          >
            {language.toUpperCase()}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
