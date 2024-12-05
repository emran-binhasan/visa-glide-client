import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from '../assets/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="text-gray-700 hover:text-gray-900 group relative"
      >
        Home
        {/* Left to right border animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/all-visa"
        className="text-gray-700 hover:text-gray-900 group relative"
      >
        All visa
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/add-visa"
        className="text-gray-700 hover:text-gray-900 group relative"
      >
        Add Visa
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/register"
        className="text-gray-700 hover:text-gray-900 group relative"
      >
        Register
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/login"
        className="text-gray-700 hover:text-gray-900 group relative"
      >
        Login
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
    </>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between container mx-auto items-center p-2 bg-white border-black border">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
       
        <img src={logo} className="w-12 inline text-teal-500"/>
        <Link to="/" className="text-xl font-medium text-gray-600">VISA GLIDE</Link>
          
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden font-medium md:flex items-center space-x-8 text-lg">
        {navLinks}
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`md:hidden fixed top-0 right-0 bg-white w-3/4 h-full transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 mt-16">
          {navLinks}
        </nav>
      </div>
    </header>
  );
};

export default Header;
