import React from "react";
import logo from "../assets/suitmedia.png";

function Navbar() {
  return (
    <div className="bg-orange-500 p-4 px-48 flex justify-between">
      <div className="items-center">
        <img src={logo} alt="Logo" className="h-12 w-30 mr-4" />
      </div>
      <ul className="flex items-center space-x-6 font-semibold">
        <li className="relative cursor-pointer">
          <a href="#work" className="nav-link">
            Work
          </a>
        </li>
        <li className="relative cursor-pointer">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="relative cursor-pointer">
          <a href="#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="relative cursor-pointer">
          <a href="#ideas" className="nav-link">
            Ideas
          </a>
        </li>
        <li className="relative cursor-pointer">
          <a href="#careers" className="nav-link">
            Careers
          </a>
        </li>
        <li className="relative cursor-pointer">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
