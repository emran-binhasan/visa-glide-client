import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme on mount
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <>
      <NavLink to="/" className="text-gray-700 dark:text-gray-50 hover:text-gray-900 group relative">
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink to="/all-visa" className="text-gray-700 dark:text-gray-50 hover:text-gray-900 group relative">
        All Visa
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink to="/add-visa" className="text-gray-700 dark:text-gray-50 hover:text-gray-900 group relative">
        Add Visa
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink to="/added-visas" className="text-gray-700 dark:text-gray-50 hover:text-gray-900 group relative">
        Added Visas
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink to="/applications" className="text-gray-700 dark:text-gray-50 hover:text-gray-900 group relative">
        Applications
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      {user ? (
        <>
          {/* Tooltip for large screens */}
          <div className="hidden md:block">
            <img
              src={user?.photoURL || "https://via.placeholder.com/40"}
              alt={user?.displayName || "User"}
              data-tooltip-id="user-tooltip"
              className="h-10 w-10 rounded-full cursor-pointer"
            />
            <Tooltip
              id="user-tooltip"
              clickable
              className="flex flex-col items-center p-2 bg-gray-800 text-white rounded"
            >
              <p>{user.displayName || "User"}</p>
              <button
                onClick={logOutUser}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </Tooltip>
          </div>
          {/* Logout button for small screens */}
          <button
            onClick={() => {
              logOutUser();
              setIsMenuOpen(false); // Close menu after logout
            }}
            className="block md:hidden text-gray-700  hover:text-gray-900"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/auth/register" className="text-gray-700 dark:text-gray-50 hover:text-gray-900 group relative">
            Register
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to="/auth/login" className="text-gray-700 dark:text-gray-50 hover:text-gray-900 group relative">
            Login
            <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-pink-500 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center p-2 border-b border-gray-300 dark:border-gray-700">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="text-gray-700">
            {isDarkMode ? <FaSun className="h-6 w-6 text-yellow-500" /> : <FaMoon className="h-6 w-6 text-gray-700" />}
          </button>

          {/* Logo */}
          <img src={logo} className="w-12 inline text-teal-500" alt="Visa Glide Logo" />
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">VISA GLIDE</h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-lg">{navLinks}</nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? '' : <FaBars className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 w-1/2 max-w-xs h-full bg-white dark:bg-gray-800 bg-opacity-80 shadow-xl backdrop-blur-xs transform transition-transform duration-300 z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
        >
          <FaTimes className="h-6 w-6" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center h-full space-y-8 text-center text-lg font-medium">
          {navLinks}
        </nav>
      </div>
    </header>
  );
};

export default Header;
