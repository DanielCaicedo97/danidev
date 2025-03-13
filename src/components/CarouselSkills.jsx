import React, { useContext, useState, useMemo, useEffect } from "react";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { tools } from "../data/translations.js";
import iconCategories from "../data/skillCategories.js";

const ImageCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const { language } = useContext(LanguageContext);

  // Obtener los nombres de las categorías
  const getCategoryNames = () => Object.keys(iconCategories);
  const categoryNames = getCategoryNames();

  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState(
    categoryNames.length > 0 ? categoryNames[0] : null
  );

  // Verifica que la categoría seleccionada aún exista
  useEffect(() => {
    if (!categoryNames.includes(selectedCategory)) {
      setSelectedCategory(categoryNames[0] || null);
    }
  }, [categoryNames, selectedCategory]);

  const t = tools[language];

  // Obtener los íconos de la categoría seleccionada
  const categoryData = useMemo(() => iconCategories[selectedCategory] || { icons: [] }, [selectedCategory]);
  const categoryIcons = categoryData.icons || [];

  // Función para avanzar a la siguiente categoría
  const handleNext = () => {
    const index = categoryNames.indexOf(selectedCategory);
    if (index !== -1 && index < categoryNames.length - 1) {
      setSelectedCategory(categoryNames[index + 1]);
    } else {
      setSelectedCategory(categoryNames[0]); // Vuelve al inicio si es la última
    }
  };

  // Función para retroceder a la categoría anterior
  const handlePrev = () => {
    const index = categoryNames.indexOf(selectedCategory);
    if (index > 0) {
      setSelectedCategory(categoryNames[index - 1]);
    } else {
      setSelectedCategory(categoryNames[categoryNames.length - 1]); // Va al final si es la primera
    }
  };

  // Efecto para cambiar automáticamente de categoría cada 500ms si `isPlaying` es `true`
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(handleNext, 2000); // Cambia cada 500ms
      return () => clearInterval(interval); // Limpia el intervalo al desmontar o cambiar estado
    }
  }, [isPlaying, selectedCategory]); // Se ejecuta al cambiar `isPlaying` o `selectedCategory`

  // Alternar reproducción automática
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Botones de control optimizados con `useMemo`
  const controlButtons = useMemo(
    () => [
      { onClick: handlePrev, icon: <FaArrowLeft />, title: t.prev },
      { onClick: togglePlay, icon: isPlaying ? <FaPause /> : <FaPlay />, title: t.play_pause },
      { onClick: handleNext, icon: <FaArrowRight />, title: t.next },
    ],
    [isPlaying, t, selectedCategory]
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
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categoryNames.map((key) => (
            <option key={key} value={key}>
              {iconCategories[key].title[language]}
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
        className="w-full flex flex-wrap items-center justify-center border-2 rounded-2xl border-secondary bg-primary text-secondary 
        dark:bg-secondary-dark dark:text-primary dark:border-primary-dark p-16 gap-10"
      >
        {categoryIcons.length > 0 ? (
          categoryIcons
            .filter((icon) => icon && icon.path) // Filtra valores nulos o sin `path`
            .map((icon, index) => (
              <a href={icon.source} rel="noreferer noopener" title={icon.title} target="_blank" key={index}>
                <div className="flex flex-col justify-center items-center text-center hover:scale-110 transition-all duration-200">
                  {icon.title && (
                    <h4 className="text-dark dark:text-white text-ss font-semibold">
                      {icon.title}
                    </h4>
                  )}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 fill-primary-dark dark:fill-primary">
                    <path d={icon.path} />
                  </svg>
                </div>
              </a>
            ))
        ) : (
          <p className="text-gray-500">{t.no_img_available}</p>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
