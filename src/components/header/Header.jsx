"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">[Company Logo]</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Responsive Menu Button */}
        <button
          onClick={toggleMenuDrawer}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Responsive Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 transition duration-1000 ease-in-out transform">
            {/* Your menu items go here */}
            <a href="#" className="block text-white py-2">
              Home
            </a>
            <a href="#" className="block text-white py-2">
              About
            </a>
            <a href="#" className="block text-white py-2">
              Services
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
