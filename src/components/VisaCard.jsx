import React from "react";
import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
  const { countryName, countryImage, fee, visaType, processingTime, _id,description } = visa;

  const handleVisaDetails =async id =>{
    console.log(id);
    await fetch(`https://visa-glide-server.vercel.app/visa/${id}`,{
        method:'GET',
        headers:{
            'content-type':'application/json'
        },
    })
  }

  return (
    <div className="visa-card border relative rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 flex flex-col">
           <img
             src={countryImage}
             alt={`${countryName} flag`}
             className="w-full h-40 object-cover rounded-t-lg"
           />
           <div className="p-3 flex-grow flex flex-col">
             <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
               {countryName}
             </h3>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 absolute py-1 px-2 bg-white shadow-lg rounded-lg top-2 left-2">
               {visaType}
             </p>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 absolute py-1 px-2 bg-white shadow-lg rounded-lg top-[122px] right-2">
               ${fee}
             </p>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
              {description}
             </p>
             <button
               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mb-1 dark:bg-blue-800 dark:hover:bg-blue-900 mt-auto"
               onClick={() => navigate(`/visa/${_id}`)}
             >
               See Details
             </button>
           </div>
         </div>
  );
};

export default VisaCard;
