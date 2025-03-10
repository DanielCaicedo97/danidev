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
  // const categoryIcons = iconCategories[selectedCategory] || [];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categoryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + categoryImages.length) % categoryImages.length
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
          className="p-2 rounded w-full md:w-auto"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="mechatronic_designer">{t.mechatronic_design}</option>
          <option value="electronic_designer">
            {t.electronic_engineering}
          </option>
          <option value="ai_software">{t.ai_software_dev}</option>
          <option value="programming_frontend">{t.programming_frontend}</option>
          <option value="programming_backend">{t.programming_backend}</option>
          <option value="ai_technologies">{t.ai_technologies}</option>
          <option value="data_science">{t.data_science}</option>
          <option value="database">{t.database}</option>
          <option value="collaborative">{t.collaborative}</option>
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
      <div className="w-60 h-60 flex items-center justify-center border rounded-lg bg-gray-100">
        {/* {categoryImages.length > 0 ? (
          <img
            src={categoryImages[currentIndex]}
            alt="Software Image"
            className="w-full h-full object-contain"
          />
        ) : (
          <p className="text-gray-500">{t.no_img_available}</p>
        )} */}
      </div>
    </div>
  );
};

export default ImageCarousel;
