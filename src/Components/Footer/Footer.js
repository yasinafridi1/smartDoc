import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div id="contact" className="bg-[--black]">
      <Contact />
      <footer className="text-center w-full py-2 border-t border-[--white]">
        <p className="text-[--white] satoshi-700 text-[14px]">
          COPYRIGHT © 2023 Smart Doc, All rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
