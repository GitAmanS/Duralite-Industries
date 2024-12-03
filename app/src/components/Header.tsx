"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "HOME", path: "/Home" },
    { name: "ABOUT", path: "/About" },
    { name: "PRODUCTS", path: "/Products" },
    { name: "PHOTO GALLERY", path: "/Photo-Gallery" },
    { name: "CONTACTS", path: "/Contacts" },
  ];

  return (
    <header className="bg-white text-black sticky top-0 z-50">
      <nav className="container md:flex md:flex-col mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="./logo.png" className="md:h-20" alt="Logo" />
          </Link>
        </div>
        <button
          className="lg:hidden text-3xl relative z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div
            className={`w-8 h-1 bg-black rounded-full transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black rounded-full mt-1.5 transform transition-transform duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black rounded-full mt-1.5 transform transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </button>

        {/* Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        <ul
          className={`font-inter md:font-[600] text-sm lg:flex  lg:static lg:transform-none absolute top-0 right-0 h-screen w-2/3 bg-white transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300  lg:h-auto lg:w-auto lg:bg-transparent lg:flex-row lg:space-y-0 flex flex-col md:space-y-6  pt-24 md:mt-6 lg:pt-0 z-40`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="hover:text-blue-400 md:border-x md:border-0 border-b lg:py-0 px-6 py-4 flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <MdKeyboardArrowRight className="block flex items-center mx-4 text-gray-200 text-2xl md:hidden" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
};

export default Header;
