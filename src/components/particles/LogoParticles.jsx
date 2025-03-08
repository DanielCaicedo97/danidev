import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import optionsParticles from "./PolygonOptionsParticles.js";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

const LogoParticles = ({
  id,
  polygonScale,
  particlesNumbers,
  linkDistance,
  moveRadius,
  modeBubbleDistance,
  modeBubbleSize,
  heightContainer,
}) => {
  const [init, setInit] = useState(false);
  const [options, setOptions] = useState(null);

  // Inicializar tsparticles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => setInit(true));
  }, []);

  // Obtener opciones de partículas solo cuando cambian los props
  useEffect(() => {
    let isMounted = true; // Para evitar actualizaciones después de desmontar el componente

    const fetchOptions = async () => {
      const opts = await optionsParticles(
        polygonScale,
        particlesNumbers,
        linkDistance,
        moveRadius,
        modeBubbleDistance,
        modeBubbleSize,
        heightContainer
      );
      if (isMounted) {
        setOptions(opts);
      }
    };

    fetchOptions();

    return () => {
      isMounted = false; // Limpiar si el componente se desmonta
    };
  }, [
    polygonScale,
    particlesNumbers,
    linkDistance,
    moveRadius,
    modeBubbleDistance,
    modeBubbleSize,
    heightContainer,
  ]);

  return init && options ? <Particles id={id} options={options} /> : null;
};

export default LogoParticles;
