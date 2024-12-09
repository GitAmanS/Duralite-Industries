"use client";
import { useState } from "react";
import Link from "next/link";

import { FaFacebookF, FaLink } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Header({ children }) {
  const [activeTab, setActiveTab] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Close menu when a tab is clicked
  };

  const navLinks = [
    { title: "HOME", path: "/Home" },
    { title: "ABOUT", path: "/About" },
    { title: "PRODUCTS", path: "/Products" },
    { title: "WHY US?", path: "/Whyus" },
  ];

  return (
    <div>
      <div className="bg-white px-4 md:mx-40 py-4">
        <div className="flex justify-between items-center">
          <img
            src="./logo.png"
            alt="Logo"
            className="h-8 md:h-16 border-r-2 pr-3"
          />
          <h1 className="mr-auto text-xs md:text-base ml-3 font-[500] text-gray-500">
            Duralite Solutions Icn.
          </h1>
          <div className="flex mx-2 text-xl space-x-2 md:space-x-6">
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaInstagram />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaTwitter />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaFacebookF />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-[#F5F5F5] shadow-md">
        <nav className="flex justify-between items-center px-4 md:mx-40 ">
          <ul
            className={`${
              isMobileMenuOpen
                ? "flex flex-col space-y-4 w-full text-center mt-4 bg-gray-200 "
                : "hidden md:flex md:flex-row md:space-x-8"
            } text-sm font-medium`}
          >
            {navLinks.map(({ title, path }) => (
              <li
                key={title}
                className={`cursor-pointer md:py-4 transition-all duration-300 ${
                  activeTab === title
                    ? "text-[#004185] border-b-[3px] border-[#004185]"
                    : "text-black border-b-[3px] border-transparent hover:border-[#004185] hover:text-blue-700"
                }`}
                onClick={() => handleTabClick(title)}
              >
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu button */}
          <div className="md:hidden mr-auto">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <div className="w-6 h-6 bg-black"></div>
              ) : (
                <div className="w-6 h-6 bg-black"></div>
              )}
            </button>
          </div>

          <div className="flex flex-row font-[400] text-sm md:text-base">
            <button className="text-black py-4 px-4">+91 9529575726</button>
            <button className="text-white font-sans bg-[#004185] py-4 px-4 rounded-sm">
              CONTACT US
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="">{children}</div>
    </div>
  );
}
