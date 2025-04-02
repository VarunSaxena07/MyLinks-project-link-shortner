"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/10 backdrop-blur-lg shadow-lg sticky w-full top-0 z-50">
      <nav className="md:h-26 h-20 flex  justify-between items-center px-6 md:px-12">
        {/* Logo with subtle glow */}
        <div className="logo text-3xl font-bold text-white tracking-wide drop-shadow-lg">
          My<span className="text-yellow-300">Links</span>
        </div>

        {/* Navbar Links */}
        <ul className="md:flex hidden gap-6 text-white text-lg">
          <Link href="/">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              Home
            </li>
          </Link>
          <Link href="/contact">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              Contact Us
            </li>
          </Link>
          <Link href="/shorten">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              Shorten
            </li>
          </Link>
          <Link href="/about">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              About
            </li>
          </Link>
        </ul>
        <div className="md:hidden cursor-pointer flex items-center">
          {isMenuOpen ? (
            <Image
              width={30}
              height={30}
              alt="Close"
              src="/cross.svg"
              className="invert"
              onClick={toggleMenu}
            />
          ) : (
            <Image
              width={30}
              height={30}
              alt="Menu"
              src="/hamburger.svg"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <ul className=" flex flex-col justify-center items-center md:hidden gap-6 text-white text-lg">
          <Link href="/">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              Home
            </li>
          </Link>
          <Link href="/contact">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              Contact Us
            </li>
          </Link>
          <Link href="/shorten">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              Shorten
            </li>
          </Link>
          <Link href="/about">
            <li className="relative cursor-pointer transition-all duration-300 hover:text-yellow-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full">
              About
            </li>
          </Link>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
