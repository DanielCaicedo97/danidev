import React, { useContext, useState, useMemo } from "react";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { tools } from "../data/translations.js";
import iconCategories from "../data/skillCategories.js";

const ImageCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("ai_software");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useContext(LanguageContext);

  const t = tools[language];

  // Obtener los íconos de la categoría seleccionada
  const categoryData = iconCategories[selectedCategory] || { icons: [] };
  const categoryIcons = categoryData.icons;

  // Función para manejar el siguiente ícono
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categoryIcons.length);
  };

  // Función para manejar el ícono anterior
  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + categoryIcons.length) % categoryIcons.length
    );
  };

  // Alternar reproducción (esto se puede usar para auto-rotar los íconos si se implementa un intervalo)
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Diccionario de botones (usando useMemo para optimizar renderizado)
  const controlButtons = useMemo(
    () => [
      { onClick: handlePrev, icon: <FaArrowLeft />, title: t.prev },
      {
        onClick: togglePlay,
        icon: isPlaying ? <FaPause /> : <FaPlay />,
        title: t.play_pause,
      },
      { onClick: handleNext, icon: <FaArrowRight />, title: t.next },
    ],
    [isPlaying, t]
  );

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Controles */}
      <div className="flex justify-between items-center w-full mb-6">
        {/* Selector de categoría */}
        <select
          className="
            p-2 rounded-md border-2 border-secondary bg-primary text-secondary 
            dark:bg-secondary-dark dark:text-primary dark:border-primary-dark
            transition-all duration-300 cursor-pointer outline-none text-sm sm:text-lg font-bold
          "
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentIndex(0); // Reinicia el índice al cambiar de categoría
          }}
        >
          {Object.entries(iconCategories).map(([key, value]) => (
            <option key={key} value={key}>
              {value.title[language]}{" "}
              {/* Renderiza el título en el idioma seleccionado */}
            </option>
          ))}
        </select>

        {/* Botones de control */}
        <div className="flex gap-4">
          {controlButtons.map(({ onClick, icon, title }, index) => (
            <button
              key={index}
              onClick={onClick}
              title={title}
              className="
                p-2 rounded-md border-2 border-secondary bg-primary text-secondary 
                dark:bg-secondary-dark dark:text-primary dark:border-primary-dark
                hover:bg-secondary hover:text-primary
                dark:hover:bg-primary-dark dark:hover:text-secondary
                transition-all duration-300 transform hover:scale-110 
                shadow-md dark:shadow-lg dark:shadow-primary-dark/30 shadow-secondary/30
              "
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Carrusel de imágenes */}
      <div
        className="w-full flex flex-wrap items-center justify-center border-2 rounded-lg border-secondary bg-primary text-secondary 
      dark:bg-secondary-dark dark:text-primary dark:border-primary-dark p-16 gap-10"
      >
        {categoryIcons.length > 0 ? (
          categoryIcons
            .filter(Boolean) // Filtra valores nulos o undefined
            .map((icon, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center hover:scale-110 transition-all duration-200"
              >
                {icon.title && (
                  <h4 className="text-dark dark:text-white text-ss font-semibold">
                    {icon.title}
                  </h4>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 fill-primary-dark dark:fill-primary"
                >
                  <path d={icon.path} />
                </svg>
              </div>
            ))
        ) : (
          <p className="text-gray-500">{t.no_img_available}</p>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
