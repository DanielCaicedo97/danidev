import * as Icons from "simple-icons";

const iconCategories = {
  ai_software: {
    title: {
      en: "AI Software",
      es: "Software de IA",
    },
    icons: [
      Icons.siTensorflow,
      Icons.siPytorch,
      Icons.siOpencv,
      Icons.siHuggingface,
    ],
  },
  programming_backend: {
    title: {
      en: "Backend Development",
      es: "Desarrollo Backend",
    },
    icons: [
      Icons.siFastapi,
      Icons.siNodedotjs,
      Icons.siNestjs,
      Icons.siSpringboot,
      Icons.siJava,
    ],
  },

  programming_frontend: {
    title: {
      en: "Frontend Development",
      es: "Desarrollo Frontend",
    },
    icons: [
      Icons.siHtml5,
      Icons.siCss3,
      Icons.siJavascript,
      Icons.siReact,
      Icons.siVuedotjs,
      Icons.siNextdotjs,
    ],
  },
  data_science: {
    title: {
      en: "Data Science",
      es: "Ciencia de Datos",
    },
    icons: [
      Icons.siNumpy,
      Icons.siPandas,
      Icons.siScipy,
      Icons.siScikitlearn,
      Icons.siMatplotlib,
    ],
  },

  database: {
    title: {
      en: "Database Management",
      es: "Gestión de Bases de Datos",
    },
    icons: [
      Icons.siPostgresql,
      Icons.siMysql,
      Icons.siMongodb, 
      Icons.siRedis, 
    ],
  },
  collaborative: {
    title: {
      en: "Collaborative Tools",
      es: "Herramientas Colaborativas",
    },
    icons: [Icons.siDocker, Icons.siGit, Icons.siLinux],
  },
  mechatronic_designer: {
    title: {
      en: "Mechatronic Design",
      es: "Diseño Mecatrónico",
    },
    icons: [
      Icons.siDassaultsystemes,
      Icons.siKeyshot,
      Icons.siAutodesk,
      Icons.siAutocad,
      Icons.siInkscape,
      Icons.siDelta,
      Icons.siSiemens,
      Icons.siSchneiderelectric,
    ],
  },
  electronic_designer: {
    title: {
      en: "Electronic Design",
      es: "Diseño Electrónico",
    },
    icons: [
      Icons.siAutodesk, // Eagle pertenece a Autodesk
      Icons.siEasyeda,
      Icons.siMathworks, // MATLAB
      Icons.siPlatformdotio,
      Icons.siArduino,
      Icons.siEspressif, // ESP32
      Icons.siRaspberrypi,
      Icons.siPspice,
      Icons.siMultisim,
      Icons.siC, // Lenguaje C
      Icons.siCplusplus, // Lenguaje C++
    ],
  },
};

export default iconCategories;
