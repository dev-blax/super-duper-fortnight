import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaBus } from "react-icons/fa";

function NavigationComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link to="/" className="font-bold text-lg">
          BusXon
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 items-center">
          <NavLink to="/contact" className="text-sm">
            Contact
          </NavLink>
          <NavLink to="/booklist" className="text-sm">
            Buses
          </NavLink>
          <NavLink to="/about" className="text-sm">
            About Us
          </NavLink>
          <NavLink to="/booking" className="bg-stone-600 text-white px-6 py-2 text-sm">
            Book Now
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden bg-stone-700 border-t border-gray-200 absolute top-full left-0 w-full py-4 flex flex-col px-4 md:px-0  z-10 ${
            isMenuOpen ? 'menu-open' : 'menu-close'
          }`}
        >
          <NavLink to="/contact" className="py-2 text-lg text-white" onClick={toggleMenu}>
            Contact
          </NavLink>
          <NavLink to="/booklist" className="py-2 text-lg text-white" onClick={toggleMenu}>
            Buses
          </NavLink>
          <NavLink to="/about" className="py-2 text-lg text-white" onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink
            to="/booking"
            className="py-2 text-lg bg-stone-600 text-white px-6"
            onClick={toggleMenu}
          >
            Book Now
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default NavigationComponent;
