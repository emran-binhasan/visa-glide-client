import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-400 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-xl md:text-3xl font-medium">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 text-center w-3/4 mx-auto mb-8">
          Got questions or need assistance? We're here to help! Reach out to us through any of the methods below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Phone Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}>
            <div className="flex justify-center mb-4 text-primary">
              <FaPhoneAlt size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+8801601262260</p>
          </motion.div>

          {/* Email Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}>
            <div className="flex justify-center mb-4 text-primary">
              <FaEnvelope size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">info@visaglide.com</p>
          </motion.div>

          {/* Address Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}>
            <div className="flex justify-center mb-4 text-primary">
              <FaMapMarkerAlt size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600 dark:text-gray-400">123 Visa Glide Way, Gulshan 2, Dhaka, Bangladesh</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary-dark transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
