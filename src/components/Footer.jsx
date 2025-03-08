import React from "react";
import SocialIcons from "./SocialIcons.jsx";

const Footer = () => {

  return (
    <footer
      id="footer"
      className="flex flex-col lg:flex-row w-full items-center justify-between px-6 my-8 md:px-16 py-1"
    >
      <div className="flex flex-col  items-center lg:items-start">
        <div>
          <h4 className="text-dark dark:text-white text-xl font-bold">
            Danidev
          </h4>
        </div>
        <div>
          <p className="text-dark dark:text-white text-md">
            © 2025 DaniDev. All rights reserved.
          </p>
        </div>
      </div>
      <div className="text-dark dark:text-white text-md text-center font-bold">
        Cali- Valle del Cauca / Colombia
      </div>

      <div>
        {/* Redes sociales */}
        <SocialIcons width={32} height={32}/>
      </div>
    </footer>
  );
};

export default Footer;
