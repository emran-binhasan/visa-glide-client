import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const AuthLayout = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="flex justify-between items-center w-full fixed top-0 left-0 px-4 py-3 z-10 bg-white dark:bg-gray-800 shadow-md">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-xl font-medium text-gray-700 hover:underline dark:text-gray-300"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </button>

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8 h-8" alt="Website Logo" />
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
            VISA GLIDE
          </h3>
        </div>


      </div>

      {/* Outlet for nested routes */}
      <Outlet />
    </>
  );
};

export default AuthLayout;
