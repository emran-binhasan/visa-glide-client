import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { user ,logOutUser} = useContext(AuthContext);
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state

  // Handle theme change and persist to localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="text-gray-700 hover:text-gray-900 group relative"
      >
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/all-visa"
        className="text-gray-700 hover:text-gray-900 group relative"
      >
        All visa
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      {user ? (
        <>
          {" "}
          <NavLink
            to="/add-visa"
            className="text-gray-700 hover:text-gray-900 group relative"
          >
            Add Visa
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="added-visas"
            className="text-gray-700 hover:text-gray-900 group relative"
          >
            Added Visas
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="applications"
            className="text-gray-700 hover:text-gray-900 group relative"
          >
            Applications
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <button onClick={logOutUser}>Logout</button>
        </>
      ) : (
        <>
          <NavLink
            to="auth/register"
            className="text-gray-700 hover:text-gray-900 group relative"
          >
            Register
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="auth/login"
            className="text-gray-700 hover:text-gray-900 group relative"
          >
            Login
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </>
      )}
    </>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between container mx-auto items-center p-2 border-black border z-50 relative bg-white dark:bg-gray-800">
      {/* Left Section (Logo + Theme Toggle) */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button (for larger screens) */}
        <button
          onClick={toggleTheme}
          className="hidden md:block text-gray-700 mr-4"
        >
          {isDarkMode ? (
            <FaSun className="h-6 w-6 text-yellow-500" />
          ) : (
            <FaMoon className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Logo */}
        <img src={logo} className="w-12 inline text-teal-500" />
        <h3 className="text-xl font-bold text-gray-700">VISA GLIDE</h3>
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

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 z-40 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 bg-white dark:bg-gray-800 w-3/4 h-full transform transition-transform duration-300 z-50 ${
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
