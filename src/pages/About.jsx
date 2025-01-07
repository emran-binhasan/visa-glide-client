import React from 'react';
import { FaGlobe, FaPassport, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-400 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-center text-xl md:text-3xl font-medium">
        About Visa Glide
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 text-center w-3/4 mx-auto">
          At Visa Glide, we simplify the process of exploring visa requirements, applying for visas online, and tracking applications. Our mission is to make international travel and immigration seamless, accessible, and stress-free for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Mission Section */}
          <motion.div 
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}>
            <div className="flex justify-center mb-4 text-primary">
              <FaGlobe size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Empower individuals and businesses with a user-friendly platform for their travel and visa needs.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div 
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}>
            <div className="flex justify-center mb-4 text-primary">
              <FaPassport size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To become the go-to platform for visa services, trusted for reliability, efficiency, and professionalism.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}>
            <div className="flex justify-center mb-4 text-primary">
              <FaHandshake size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Integrity, innovation, and exceptional customer service are at the heart of what we do.
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Why Choose Visa Glide?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We offer a dynamic, user-friendly interface, seamless functionality, and personalized support to cater to all your visa needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
