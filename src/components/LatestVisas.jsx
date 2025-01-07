import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const LatestVisas = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestVisas = async () => {
      try {
        const response = await fetch("https://visa-glide-server.vercel.app/visas/8");
        const data = await response.json();
        setLatestVisas(data);
      } catch (error) {
        console.error("Error fetching latest visas:", error);
      }
    };
    fetchLatestVisas();
  }, []);

  
  return (
    <section className="latest-visas-section py-8 bg-gradient-to-br from-[#d4b5e5] to-[#bef7ec] dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 space-y-2">
          <h2 className="text-4xl text-gray-800 dark:text-gray-400">
            <Slide direction="up" triggerOnce>
              <span>Latest Visas</span>
            </Slide>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl dark:text-gray-400 mx-auto">
            <Slide direction="up" triggerOnce>
              <Typewriter
                words={["Checkout our latest added visas !"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </Slide>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {latestVisas.map((visa) => (
           <div className="visa-card border relative rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 flex flex-col">
           <img
             src={visa.countryImage}
             alt={`${visa.country} flag`}
             className="w-full h-40 object-cover rounded-t-lg"
           />
           <div className="p-3 flex-grow flex flex-col">
             <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
               {visa.countryName}
             </h3>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 absolute py-1 px-2 bg-white shadow-lg rounded-lg top-2 left-2">
               {visa.visaType}
             </p>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 absolute py-1 px-2 bg-white shadow-lg rounded-lg top-[122px] right-2">
               ${visa.fee}
             </p>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
              {visa.description}
             </p>
             <button
               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-800 dark:hover:bg-blue-900 mt-auto"
               onClick={() => navigate(`/visa/${visa._id}`)}
             >
               See Details
             </button>
           </div>
         </div>
         
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="bg-gray-800 mb-1 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors dark:bg-gray-700 dark:hover:bg-gray-800"
            onClick={() => navigate("/all-visa")}
          >
            See All Visas
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestVisas;
