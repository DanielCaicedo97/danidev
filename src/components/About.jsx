import React from "react";
import { robot } from "../assets/index.js";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-16 py-10 gap-10 lg:gap-16"
    >
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
          Yes, I built this robot!
          <a
            href="https://www.instagram.com/p/DFBss42s1QL/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-500 font-semibold relative 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
                 after:h-[2px] after:bg-blue-500 
                 after:transition-all after:duration-300 hover:after:w-full"
          >
            Click here to see
          </a>
        </div>

        <div className="absolute w-full h-full -top-50 right-200 rounded-full z-[0] pink__gradient"></div>
      </div>

      {/* Contenido */}
      <div className="flex-1 w-full space-y-6 relative">
        <h2 className="text-dark dark:text-white font-bold text-4xl sm:text-5xl text-center md:text-left">
          About Me
        </h2>

        {/* Professional Profile */}
        <div>
          <h3 className="text-dark dark:text-white text-2xl">
            Professional Profile
          </h3>
          <p className="text-[#787878] text-justify leading-relaxed">
            I am an electronic engineer, mechatronic designer, and software
            developer with a deep passion for artificial intelligence and
            robotics. From the beginning of my career, the fusion of technology
            and creativity has driven me to explore innovative solutions.
          </p>
          <p className="text-[#787878] text-justify leading-relaxed">
            My passion for robotics and programming pushes me to learn and grow
            every day in this ever-evolving field. I believe in the power of
            technology to shape the future, and I’m always ready for new
            challenges. Let’s build something amazing together!
          </p>
        </div>

        {/* Awards & Recognitions */}
        <div>
          <h3 className="text-dark dark:text-white text-2xl">
            Awards & Recognitions
          </h3>
          <ul className="text-[#787878] list-disc list-inside space-y-3">
            <li>
              🏆{" "}
              <b>
                <a
                  href="https://www.sena.edu.co/es-co/Noticias/Paginas/noticia.aspx?IdNoticia=178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                >
                  First Place – FORMULA ECO SENA (2015)
                </a>
              </b>
              : Designed and built an electric single-seater vehicle, securing
              first place.
            </li>
            <li>
              🏅{" "}
              <b>
                <a
                  href="https://acofipapers.org/index.php/eiei/article/view/852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                >
                  ACOFI Recognition for Student Activities (2020)
                </a>
              </b>
              : Awarded for the project "Embedded System for Minisumo Robot -
              SIT-UV: An Educational Tool".
            </li>
            <li>
              🥉 <b>Third Place – FAST BOT Robotics Competition (2018)</b>:
              Competed in the advanced minisumo category in Cali.
            </li>
            <li>
              🥉 <b>Third Place – TECNO FEST Robotics Competition (2019)</b>:
              Showcased technical expertise and innovation in Cali.
            </li>
          </ul>
        </div>

        {/* gradients */}
        <div className="absolute w-full h-full top-0 -right-200 rounded-full z-[0] green__gradient"></div>
      </div>
    </section>
  );
};

export default About;
