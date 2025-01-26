import React, { useState } from "react";
import { close, logo, menu, moon, sun } from "../assets";
const NavBar = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  // Clip-path shapes
  const leftShape = "polygon(0 0, 75% 0, 100% 100%, 25% 100%)";
  const centerShape = "polygon(0 0, 100% 0, 85% 100%, 15% 100%)";
  const rightShape = "polygon(25% 0, 100% 0, 75% 100%, 0 100%)";

  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="absolute top-1/2 w-full">
      <nav
        className=" justify-between items-center h-[150px] w-full size-full hidden md:flex"
        aria-label="Main navigation"
      >
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
            className="absolute w-full h-full bg-primary flex justify-center items-center text-white font-bold"
            style={{
              clipPath: leftShape,
              zIndex: 1, // Coloca la forma principal encima de la sombra
            }}
          >
            <img src={logo} alt="logo" className="w-[56px] h-[56px]" />
          </div>
        </div>

        {/* Center Navigation */}
        <div className="relative w-[720px] h-[100px]">
          {/* Sombra */}
          <div
            className="absolute w-full h-full bg-secondary"
            style={{
              clipPath: centerShape,
              transform: "translate(8px, 8px)", // Desplaza la sombra
              zIndex: 0, // Coloca la sombra detrás
            }}
          ></div>

          {/* Forma principal */}
          <div
            className="absolute w-full h-full bg-primary flex justify-center items-center"
            style={{
              clipPath: centerShape,
              zIndex: 1, // Coloca la forma principal encima de la sombra
            }}
          >
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white text-lg font-semibold hover:text-gray-300 transition-all duration-200"
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
            className="absolute w-full h-full bg-primary flex justify-center items-center"
            style={{
              clipPath: rightShape,
              zIndex: 1, // Coloca la forma principal encima de la sombra
            }}
          >
            <img
              src={darkMode ? moon : sun}
              alt="dark_mode"
              className={`w-[40px] h-[40px] transition-all duration-200 hover:scale-120 ${
                darkMode ? "rotate-45 ease-out" : "rotate-0 ease-out"
              }}`}
              onClick={handDarkMode}
            />
          </div>
        </div>
      </nav>

      {/* navbar mobile */}
      <nav className="flex justify-center items-center md:hidden ">
        {/* Center Navigation */}
        <div className="relative w-[345px] h-[100px] mt-6 ">
          {/* Sombra */}
          <div
            className="absolute w-full h-full bg-secondary"
            style={{
              clipPath: rightShape,
              transform: "translate(8px, 8px)", // Desplaza la sombra
              zIndex: 0, // Coloca la sombra detrás
            }}
          ></div>

          {/* Forma principal */}
          <div
            className=" w-full h-full bg-primary flex justify-center items-center"
            style={{
              clipPath: rightShape,
              zIndex: 1, // Coloca la forma principal encima de la sombra
            }}
          >
            <div className="flex justify-between items-center w-[50%]">
              <div className="flex-1 flex justify-center">
                <img src={logo} alt="logo" className="w-[56px] h-[56px] " />
              </div>
              <div>
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className={`w-[28px] h-[32px] transition-all duration-200 ${
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
          } p-4 absolute top-8  left-0  bg-secondary mx-2 my-2 w-[60%] rounded-xl `}
        >
          <ul className="flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-2xl font-semibold hover:text-gray-300 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
