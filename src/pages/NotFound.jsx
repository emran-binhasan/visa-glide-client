import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen max-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Container with refined box for larger screens */}
      <motion.div
        className="text-center px-6 py-12 bg-white rounded-lg shadow max-w-lg w-11/12 sm:w-3/4 lg:w-1/2"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.h1
          className="text-6xl sm:text-7xl font-bold text-gray-800 leading-tight"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-md md:text-lg text-gray-600 mt-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
           Oops! The page you are looking for doesn't exist. Please check the URL again or return to the homepage.
        </motion.p>

        {/* Return to Home Button with animation */}
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.05 }}  // Scale up on hover
          whileTap={{ scale: 0.95 }}   // Scale down on click
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Link
            to="/"
            className="inline-block px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white rounded-lg text-lg font-medium shadow-md hover:from-teal-500 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
