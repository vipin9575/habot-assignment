import logo from "../assets/habot-logo.svg";
import downArrow from "../assets/down-arrow.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-custom fixed w-full top-0 z-50 ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex shrink-0 items-center cursor-pointer">
            <img className="h-8 w-auto" src={logo} alt="Habot Logo" />
          </div>
          <div className="hidden sm:block">
            <ul className="flex items-center space-x-11 text-gray-400">
              <li className="hover:text-gray-600 cursor-pointer">
                Find Suppliers
              </li>
              <li className="flex items-center gap-1 hover:text-gray-600 cursor-pointer">
                Find Service Tags <img src={downArrow} alt="arrow" />
              </li>
              <li className="border border-green-500 rounded text-green-600 font-bold py-3 px-6 hover:bg-green-700 hover:text-white transition ease-in-out cursor-pointer">
                Login / Sign Up
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            className="sm:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col space-y-4 text-gray-400">
              <li className="hover:text-gray-600 cursor-pointer">
                Find Suppliers
              </li>
              <li className="flex items-center gap-1 hover:text-gray-600 cursor-pointer">
                Find Service Tags <img src={downArrow} alt="arrow" />
              </li>
              <li className="border-2 border-green-500 rounded text-green-600 font-bold py-3 px-6 hover:bg-green-500 hover:text-white">
                Login / Sign Up
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
