"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/10 backdrop-blur-lg shadow-lg sticky w-full top-0 z-50">
      <nav className="md:h-26 h-20 flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <div className="logo text-3xl font-bold text-white tracking-wide drop-shadow-lg">
          My<span className="text-yellow-300">Links</span>
        </div>

        {/* Desktop Navbar */}
        <ul className="md:flex hidden gap-6 text-white text-lg">
          {["Home", "Contact", "Shorten", "About"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase().replace(" ", "")}`}>
              <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
                {item}
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer flex items-center z-50">
          <Image
            width={30}
            height={30}
            alt="Menu"
            src={isMenuOpen ? "/cross.svg" : "/hamburger.svg"}
            className="invert"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Mobile Menu (Overlapping Fullscreen) */}
      <ul
        className={`fixed top-20 left-0 w-full p-6 bg-black/90 backdrop-blur-lg backdrop-brightness-20 shadow-lg flex flex-col justify-center items-center md:hidden gap-6 text-white text-lg transition-all duration-500 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {["Home", "Contact", "Shorten", "About"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase().replace(" ", "")}`}
            onClick={() => setMenuOpen(false)}
          >
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
