import { logo_lines_inside } from "../../assets/index.js";

const getSvgDimensions = () => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = logo_lines_inside;
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
  });
};

let svgDimensions = { width: 0, height: 0 };

// Obtener dimensiones antes de usarlas
getSvgDimensions().then((dimensions) => {
  svgDimensions = dimensions;
});

// Función que devuelve las opciones, asegurando que `svgDimensions` esté listo
const getOptions = async (
  polygonScale = 1.5,
  particlesNumbers = 500,
  linkDistance = 40,
  moveRadius = 3,
  modeBubbleDistance = 50,
  modeBubbleSize = 5,
  heightContainer = null
) => {
  const svgDimensions = await getSvgDimensions();
  return {
    autoPlay: true,
    fullScreen: false,
    clear: true,
    defaultThemes: {},
    delay: 0,
    detectRetina: false,
    duration: 0,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onDiv: {
          selectors: {},
          enable: true,
          mode: {},
          type: "circle",
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1,
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: modeBubbleDistance,
          duration: 2,
          mix: false,
          opacity: 8,
          size: modeBubbleSize,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: {},
          },
        },
        connect: {
          distance: 10,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: {},
          },
        },
        slow: {
          factor: 1,
          radius: 0,
        },
        particle: {
          replaceCursor: false,
          pauseOnStop: false,
          stopDelay: 0,
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffff",
              },
              stop: {
                value: "#000000",
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: "#000000",
            },
            length: 2000,
          },
        },
      },
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 1,
        },
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: "#0DFF00",
        animation: {
          h: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
        },
      },
      effect: {
        close: true,
        fill: true,
        options: {},
        type: {},
      },
      groups: [],
      move: {
        angle: {
          offset: 0,
          value: 10,
        },

        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,

        outModes: {
          default: "bounce",
          bottom: "bounce",
          left: "bounce",
          right: "bounce",
          top: "bounce",
        },
        random: false,
        size: false,
        speed: 0.1,
        straight: false,
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: false,
          width: 1920,
          height: 1080,
        },
        limit: {
          mode: "delete",
          value: 0,
        },
        value: particlesNumbers,
      },
      opacity: {
        value: {
          min: 0.5,
          max: 1,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        close: true,
        fill: true,
        options: {},
        type: "circle",
      },
      size: {
        value: 1,
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: {
            value: 3,
          },
          rate: {
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
          particles: {},
        },
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: 25,
      },
      tilt: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10,
        },
      },
      life: {
        count: 0,
        delay: {
          value: 0,
          sync: false,
        },
        duration: {
          value: 0,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          value: 45,
        },
        width: 1,
      },
      links: {
        blink: false,
        color: {
          value: "#4FC0EF",
        },
        consent: false,
        distance: linkDistance,
        enable: true,
        frequency: 1,
        opacity: 1,
        shadow: {
          blur: 5,
          color: {
            value: "#000",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    key: "polygonMask",
    name: "Polygon Mask",
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: {
            value: "#092349",
          },
          width: 0.5,
          opacity: 0.7,
        },
      },
      enable: true,
      inline: {
        arrangement: "equidistant",
      },
      move: {
        radius: moveRadius,
        type: "path",
      },
      scale: heightContainer
        ? heightContainer / svgDimensions.height
        : polygonScale,
      type: "inline",
      url: logo_lines_inside,
      position: {
        x: 50,
        y: 50,
      },
    },
  };
};
export default getOptions;
