import React, { useContext, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaArrowLeft,
  FaArrowRight,
  FaThLarge,
  FaExpand,
} from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { tools } from "../data/translations.js";
import iconCategories from "../data/skillCategories.js";

const ImageCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("ai_software");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toogleShowAll, setToggleShowAll] = useState(false);
  const { language } = useContext(LanguageContext);

  const t = tools[language];

  const categoryIcons = iconCategories[selectedCategory] || [];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categoryIcons.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + categoryImages.length) % categoryIcons.length
    );
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleViewMode = () => {
    setToggleShowAll((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      {/* Controles */}
      <div className="flex justify-between items-center w-full max-w-4xl mb-6">
        {/* Selector de categoría */}
        <select
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 "
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="ai_software">{t.ai_software_dev}</option>
          <option value="programming_frontend">{t.programming_frontend}</option>
          <option value="programming_backend">{t.programming_backend}</option>
          <option value="data_science">{t.data_science}</option>
          <option value="database">{t.database}</option>
          <option value="collaborative">{t.collaborative}</option>
          <option value="electronic_designer">{t.electronic_engineering}</option>
          <option value="mechatronic_designer">{t.mechatronic_design}</option>
        </select>

        {/* Botones de control */}
        <div className="flex gap-4">
          <button
            onClick={toggleViewMode}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {toogleShowAll ? <FaExpand /> : <FaThLarge />}
          </button>
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={togglePlay}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Carrusel de imágenes */}
      <div className="w-full  flex flex-wrap items-center justify-center border rounded-lg bg-white dark:bg-gray-800 p-16 gap-10 ">
        {categoryIcons.length > 0 ? (
          categoryIcons
            .filter(Boolean) // Filtra íconos nulos o undefined
            .map((software, index) => (
              <a
                key={index}
                className="flex flex-col  justify-center items-center text-center  hover:scale-110 transition-all duration-200"
                href={software.source}
                alt={software.title}
                target="_blank"
                rel="noopener noreferrer"
                title={software.title}
              >
                <h4 className="text-dark dark:text-white text-ss font-semibold">
                  {software.title}
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 fill-primary-dark dark:fill-primary"
                >
                  <path d={software.path} />
                </svg>
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
