import React, { useContext } from "react";
import { robot } from "../assets/index.js";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { about } from "../data/translations.js"; // Asegúrate de importar el archivo de traducciones

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center lg:min-h-screen"
    >
      <div>
        <h2 className="text-dark dark:text-white font-bold my-0 lg:my-8 text-4xl sm:text-5xl text-center md:text-left">
          {about[language].about_me}
        </h2>
      </div>

      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center px-4 md:px-16 py-10 gap-10 lg:gap-16">
        {/* Imagen con Gradientes */}
        <div className="flex-1 flex flex-col justify-center items-center relative text-center">
          {/* Imagen */}
          <img
            className="w-3/4 sm:w-2/3 md:w-[70%] lg:w-[80%] scale-x-[-1] object-cover relative z-10"
            src={robot}
            alt="Dani Dev Robot"
          />

          {/* Texto con Enlace */}
          <div className="mt-4 text-dark dark:text-white text-lg font-medium">
            {about[language].yes_modeled_robot}
            <a
              href="https://www.instagram.com/p/DFBss42s1QL/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 font-semibold relative 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
            after:h-[2px] after:bg-blue-500 
            after:transition-all after:duration-300 hover:after:w-full"
            >
              {about[language].click_here_see}
            </a>
          </div>

          <div className="absolute w-full h-full -top-[15rem] right-200 rounded-full z-[0] pink__gradient"></div>
        </div>

        {/* Contenido */}
        <div className="flex-1 w-full space-y-6 relative">
          {/* Professional Profile */}
          <div>
            <h3 className="text-dark dark:text-white text-2xl">
              {about[language].professional_profile}
            </h3>
            <p className="text-[#787878] text-justify leading-relaxed">
              {about[language].profile_text_1}
            </p>
            <p className="text-[#787878] text-justify leading-relaxed">
              {about[language].profile_text_2}
            </p>
          </div>

          {/* Awards & Recognitions */}
          <div>
            <h3 className="text-dark dark:text-white text-2xl">
              {about[language].awards}
            </h3>
            <ul className="text-[#787878] list-disc list-inside space-y-3">
              <li>
                <b>
                  <a
                    href="https://www.sena.edu.co/es-co/Noticias/Paginas/noticia.aspx?IdNoticia=178"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                  >
                    {about[language].award_1}
                  </a>
                </b>
                : {about[language].award_1_desc}
              </li>
              <li>
                <b>
                  <a
                    href="https://acofipapers.org/index.php/eiei/article/view/852"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                  >
                    {about[language].award_2}
                  </a>
                </b>
                : {about[language].award_2_desc}
              </li>
              <li>
                <b>{about[language].award_3}</b>: {about[language].award_3_desc}
              </li>
              <li>
                <b>{about[language].award_4}</b>: {about[language].award_4_desc}
              </li>
            </ul>
          </div>

          {/* gradients */}
          <div className="absolute w-full h-full top-0 -right-200 rounded-full z-[0] green__gradient"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
