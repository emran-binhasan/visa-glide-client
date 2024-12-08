import React from "react";
import CountUp from "react-countup";
import {
  FaUsers,
  FaPassport,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";

const Success = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-green-100 to-purple-100 py-16 px-6 sm:px-8 lg:px-16 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-800 dark:to-gray-800">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <h2 className="text-4xl text-gray-800 dark:text-gray-400">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl dark:text-gray-400 mx-auto">
            We’ve made significant progress in simplifying visa requirements and
            applications. Here are some key stats!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* User Count */}
          <div className="p-4 bg-white dark:bg-gray-800 dark:border rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center">
              <FaUsers className="text-4xl text-blue-600 transform transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semisemisemibold text-gray-700 dark:text-gray-400 ml-4">
                Users Assisted
              </h3>
            </div>
            <p className="text-3xl font-semisemibold text-blue-600 mt-4">
              <CountUp start={0} end={2000} duration={4} separator="," />
            </p>
            <p className="text-md text-gray-500 mt-2">
              Helping users navigate visa processes effortlessly.
            </p>
          </div>

          {/* Visa Count */}
          <div className="p-4 bg-white dark:bg-gray-800 dark:border rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center">
              <FaPassport className="text-4xl text-green-600 transform transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semisemisemibold text-gray-700 dark:text-gray-400 ml-4">
                Visa Types
              </h3>
            </div>
            <p className="text-3xl font-semisemibold text-green-600 mt-4">
              <CountUp start={0} end={50} duration={4} separator="," />
            </p>
            <p className="text-md text-gray-500 mt-2">
              Offering a wide range of visa options.
            </p>
          </div>

          {/* Application Count */}
          <div className="p-4 bg-white dark:bg-gray-800 dark:border rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center">
              <FaPaperPlane className="text-4xl text-yellow-600 transform transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semisemisemibold text-gray-700 dark:text-gray-400 ml-4">
                Visa Applications
              </h3>
            </div>
            <p className="text-3xl font-semisemibold text-yellow-600 mt-4">
              <CountUp start={0} end={1200} duration={4.5} separator="," />
            </p>
            <p className="text-md text-gray-500 mt-2">
              Initiating visa applications smoothly.
            </p>
          </div>

          {/* Status Count */}
          <div className="p-4 bg-white dark:bg-gray-800 dark:border rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center">
              <FaClipboardList className="text-4xl text-purple-600 transform transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semisemisemibold text-gray-700 dark:text-gray-400 ml-4">
                Status Updates
              </h3>
            </div>
            <p className="text-3xl font-semisemibold text-purple-600 mt-4">
              <CountUp start={0} end={5000} duration={4} separator="," />
            </p>
            <p className="text-md text-gray-500 mt-2">
              Keeping users updated on their visa status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
