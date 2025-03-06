import React, { useState } from "react";
import { FaCogs, FaMicrochip, FaBrain } from "react-icons/fa";

const Skill = () => {
  const [showDetails, setShowDetails] = useState({
    mechatronic: false,
    electronic: false,
    software: false,
  });

  const toggleDetails = (field) => {
    setShowDetails((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center px-6 md:px-16 py-10 gap-10 lg:gap-16"
    >
      <div className="flex flex-col p-8 max-w-5xl">
        <h2 className="text-dark dark:text-white font-bold text-4xl sm:text-5xl text-center my-12">
          My Skills
        </h2>
        <p className="text-[#787878] text-justify leading-relaxed">
          Thanks to my participation in various projects and my passion for
          continuous learning, I have developed a wide range of skills. I
          specialize in mechatronic design, automated systems, and electronics.
          In recent years, I have focused on artificial intelligence, data
          processing, and software development, mainly in backend.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Mechatronic Design */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
          <FaCogs className="text-4xl text-primary dark:text-white mb-4" />
          <h3 className="text-lg font-semibold text-dark dark:text-white">
            Mechatronic Design
          </h3>
          <p className="text-[#787878] mt-2">
            Conceptualization and development of mechanical systems with
            electronic integration.
          </p>
          {showDetails.mechatronic && (
            <p className="text-sm text-blue-500 font-semibold mt-2">
              SolidWorks, Keyshot, AUTOCAD, Cura3D, Mach3
            </p>
          )}
          <button
            onClick={() => toggleDetails("mechatronic")}
            className="mt-3 text-blue-500 hover:text-blue-700 text-sm"
          >
            {showDetails.mechatronic ? "Show less" : "See more"}
          </button>
        </div>

        {/* Electronic Engineering */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
          <FaMicrochip className="text-4xl text-primary dark:text-white mb-4" />
          <h3 className="text-lg font-semibold text-dark dark:text-white">
            Electronic Engineering
          </h3>
          <p className="text-[#787878] mt-2">
            Design and programming of electronic systems and process automation.
          </p>
          {showDetails.electronic && (
            <p className="text-sm text-green-500 font-semibold mt-2">
              Proteus, Multisim-NI, Eagle, easyEDA, Platformio, Matlab,
              Simulink, Arduino, C++
            </p>
          )}
          <button
            onClick={() => toggleDetails("electronic")}
            className="mt-3 text-blue-500 hover:text-blue-700 text-sm"
          >
            {showDetails.electronic ? "Show less" : "See more"}
          </button>
        </div>

        {/* AI & Software Development */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
          <FaBrain className="text-4xl text-primary dark:text-white mb-4" />
          <h3 className="text-lg font-semibold text-dark dark:text-white">
            AI & Software Development
          </h3>
          <p className="text-[#787878] mt-2">
            Application of artificial intelligence, data analysis, and backend
            development.
          </p>
          {showDetails.software && (
            <p className="text-sm text-orange-400 font-semibold mt-2">
              Python, Node.js (Nest.js), React, Next.js, Tailwind, PostgreSQL
            </p>
          )}
          <button
            onClick={() => toggleDetails("software")}
            className="mt-3 text-blue-500 hover:text-blue-700 text-sm"
          >
            {showDetails.software ? "Show less" : "See more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skill;
