import React, { useEffect, useRef, useState } from "react";
import LogoParticles from "../components/particles/LogoParticles";

import SocialIcons from "./SocialIcons.jsx";

const Hero = () => {
  const logoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [PolygonContainer, setPolygonContainer] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setWindowWidth(window.innerWidth);
      if (logoRef.current) {
        const { width, height } = logoRef.current.getBoundingClientRect();
        setPolygonContainer(height);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex h-full flex-col lg:flex-row items-center justify-center lg:justify-between mt-10 lg:mt-0 sm:px-6  lg:px-32 space-y-10 lg:space-y-0 ">
      {/* INFORMATION DANI DEV */}

      <div className="flex lg:flex-1 w-full flex-col xl:px-0 sm:mt-0 sm:px-4 px-4 lg:mr-10">
        {/* Available for projects  */}

        <div className="flex border-1 border-primary-dark dark:border-primary w-[100%] xl:w-[55%]  rounded-full p-2 justify-start items-center mb-4">
          <span className="bg-[#0DFF00] w-4 h-4 m-2 rounded-full "></span>
          <h3 className="text-primary-dark dark:text-primary">
            Available for projects
          </h3>
        </div>
        {/* Description */}
        <div className="max-w-3xl">
          <h1 className="text-dark dark:text-white font-bold text-4xl xl:text-6xl">
            Hi, I'm Daniel
          </h1>
          <p className="text-dark dark:text-white text-lg xl:text-xl font-medium my-4">
            Electronic Engineer | Mechatronic Designer | Software Developer
          </p>
          <p className="text-[#787878] text-base sm:text-lg lg:text-xl text-justify">
            I’m passionate about AI and robotics, merging technology with
            creativity to build innovative solutions. Let’s shape the future
            together.
          </p>
        </div>
        {/* Social links */}
        <div>
          {/* Redes sociales */}

          <div className="hidden lg:flex">
            <SocialIcons width={50} height={50} />
          </div>
        </div>
      </div>
      {/* IMAGE 8 BIT  */}
      <div
        id="social_logo"
        className="flex flex-1 w-full h-full justify-center items-start sm:items-center md:my-0 relative"
      >
        {/* Logo Versión para Mobile */}
        <div className="flex flex-col justify-center items-center  w-full lg:hidden ">
          {/* Social links */}
          {isMobile && (
            <div
              id="logo_particles-mobile"
              ref={logoRef}
              className="mb-8 w-full h-full"
            >
              <LogoParticles
                key="mobile"
                polygonScale={0.4}
                particlesNumbers={350}
                linkDistance={13}
                moveRadius={0.5}
                modeBubbleDistance={15}
                modeBubbleSize={10}
                heightContainer={PolygonContainer}
              />
            </div>
          )}

          <div id="social_mobile" className="w-full px-4">
            {/* Redes sociales */}
            <SocialIcons width={40} height={40} />
          </div>
        </div>
        {/* Logo Versión para Escritorio */}
        {!isMobile && (
          <div
            id="logo_particles-desktop"
            className="z-[0] w-full h-full hidden lg:flex"
          >
            <LogoParticles
              key="desktop"
              polygonScale={1.2}
              particlesNumbers={500}
              linkDistance={30}
              moveRadius={3}
              modeBubbleDistance={50}
              modeBubbleSize={5}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
