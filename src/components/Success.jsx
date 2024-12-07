import CountUp from 'react-countup';
import { FaUserAlt, FaBook, FaClipboardList, FaLanguage } from 'react-icons/fa';

const Success = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-extrasemisemibold text-gray-800">Our Achievements</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We’ve made significant progress in simplifying visa requirements and applications. Here are some key stats!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* User Count */}
          <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center">
              <FaUserAlt className="text-4xl text-blue-600 transform transition-all duration-300 hover:scale-110" />
              <h3 className="text-xl font-semisemisemibold text-gray-700 ml-4">Users Assisted</h3>
            </div>
            <p className="text-3xl font-semisemibold text-blue-600 mt-4">
              <CountUp start={0} end={2000} duration={4} separator="," />
            </p>
            <p className="text-md text-gray-500 mt-2">Helping users navigate visa processes effortlessly.</p>
          </div>

          {/* Visa Count */}
          <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center">
              <FaBook className="text-4xl text-green-600 transform transition-all duration-300 hover:scale-110" />
              <h3 className="text-xl font-semisemisemibold text-gray-700 ml-4">Visa Types Available</h3>
            </div>
            <p className="text-3xl font-semisemibold text-green-600 mt-4">
              <CountUp start={0} end={50} duration={4} separator="," />
            </p>
            <p className="text-md text-gray-500 mt-2">A wide range of visa types to choose from.</p>
          </div>

          {/* Application Count */}
          <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center">
              <FaLanguage className="text-4xl text-yellow-600 transform transition-all duration-300 hover:scale-110" />
              <h3 className="text-xl font-semisemisemibold text-gray-700 ml-4">Visa Applications Initiated</h3>
            </div>
            <p className="text-3xl font-semisemibold text-yellow-600 mt-4">
              <CountUp start={0} end={1200} duration={4.5} separator="," />
            </p>
            <p className="text-md text-gray-500 mt-2">Seamless processing for every user.</p>
          </div>

          {/* Status Count */}
          <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center">
              <FaClipboardList className="text-4xl text-purple-600 transform transition-all duration-300 hover:scale-110" />
              <h3 className="text-xl font-semisemisemibold text-gray-700 ml-4">Visa Status Updates</h3>
            </div>
            <p className="text-3xl font-semisemibold text-purple-600 mt-4">
              <CountUp start={0} end={5000} duration={4} separator="," />
            </p>
            <p className="text-md text-gray-500 mt-2">Keep users informed about their visa status at all times.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
