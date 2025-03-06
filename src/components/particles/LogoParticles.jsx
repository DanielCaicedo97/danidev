import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
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
}) => {
  const [init, setInit] = useState(false);

  // Inicializar Particles una sola vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => setInit(true));
  }, []);

  // Llamamos a optionsParticles pasándole los parámetros recibidos
  const options = useMemo(
    () =>
      optionsParticles(
        polygonScale,
        particlesNumbers,
        linkDistance,
        moveRadius,
        modeBubbleDistance,
        modeBubbleSize
      ),
  );

  return init ? <Particles id={id} options={options} /> : null;
};

export default LogoParticles;
