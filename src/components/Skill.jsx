import React, { useState, useContext } from "react";
import { FaCogs, FaMicrochip, FaBrain } from "react-icons/fa";
import { skills } from "../data/translations.js"; // Importa las traducciones
import { LanguageContext } from "../context/LanguageContext"; // Importa el contexto del idioma
import { CarouselSkills } from "./index.js";

const Skill = () => {
  const { language } = useContext(LanguageContext); // Obtiene el idioma actual
  const t = skills[language]; // Traducciones según el idioma seleccionado

  const [showDetails, setShowDetails] = useState({
    mechatronic: false,
    electronic: false,
    software: false,
  });

  const toggleDetails = (field) => {
    setShowDetails((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <>
      <section
        id="skills"
        className="flex flex-col items-center justify-center py-10  lg:gap-16"
      >
        <div className="flex flex-col p-4 lg:p-0 max-w-5xl">
          <h2 className="text-dark dark:text-white font-bold text-4xl sm:text-5xl text-center my-12">
            {t.skills_title}
          </h2>
          <p className="text-[#787878] text-justify leading-relaxed">
            {t.skills_description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl p-4 lg:p-0">
          {/* AI & Software Development */}
          <div
            onClick={() => toggleDetails("software")}
            className="border-2 rounded-2xl border-secondary bg-primary text-secondary 
      dark:bg-secondary-dark dark:text-primary dark:border-primary-dark p-6  shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
          >
            <FaBrain className="text-4xl text-dark dark:text-white mb-4" />
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              {t.ai_software_dev}
            </h3>
            <p className="text-[#787878] mt-2">{t.ai_software_desc}</p>
            {showDetails.software && (
              <p className="text-sm text-orange-400 font-semibold mt-2">
                {t.ai_software_tools}
              </p>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDetails("software");
              }}
              className="mt-3 text-blue-500 hover:text-blue-700 text-sm"
            >
              {showDetails.software ? t.show_less : t.show_more}
            </button>
          </div>
          {/* Mechatronic Design */}
          <div
            onClick={() => toggleDetails("mechatronic")}
            className="border-2 rounded-2xl border-secondary bg-primary text-secondary 
      dark:bg-secondary-dark dark:text-primary dark:border-primary-dark  p-6  shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
          >
            <FaCogs className="text-4xl text-dark dark:text-white mb-4" />
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              {t.mechatronic_design}
            </h3>
            <p className="text-[#787878] mt-2">{t.mechatronic_desc}</p>
            {showDetails.mechatronic && (
              <p className="text-sm text-blue-500 font-semibold mt-2">
                {t.mechatronic_tools}
              </p>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDetails("mechatronic");
              }}
              className="mt-3 text-blue-500 hover:text-blue-700 text-sm"
            >
              {showDetails.mechatronic ? t.show_less : t.show_more}
            </button>
          </div>

          {/* Electronic Engineering */}
          <div
            onClick={() => toggleDetails("electronic")}
            className="border-2 rounded-2xl border-secondary bg-primary text-secondary 
      dark:bg-secondary-dark dark:text-primary dark:border-primary-dark p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
          >
            <FaMicrochip className="text-4xl text-dark dark:text-white mb-4" />
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              {t.electronic_engineering}
            </h3>
            <p className="text-[#787878] mt-2">{t.electronic_desc}</p>
            {showDetails.electronic && (
              <p className="text-sm text-green-500 font-semibold mt-2">
                {t.electronic_tools}
              </p>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDetails("electronic");
              }}
              className="mt-3 text-blue-500 hover:text-blue-700 text-sm"
            >
              {showDetails.electronic ? t.show_less : t.show_more}
            </button>
          </div>
        </div>
      </section>

      <section id="tools" className="flex flex-col px-4 md:px-20 xl:px-32">
        <div className="px-4 lg:p-0 my-8 lg:my-10">
          <h3 className="text-dark dark:text-white font-bold text-3xl sm:text-4xl text-center ">
            {t.tools}
          </h3>
        </div>
        <div id="tools_images">
          <CarouselSkills />
        </div>
      </section>
    </>
  );
};

export default Skill;
