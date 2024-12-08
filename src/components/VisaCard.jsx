import React from "react";
import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
  const { countryName, countryImage, fee, visaType, processingTime, _id } = visa;

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
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105">
      <img
        src={countryImage}
        alt={`Flag of ${countryName}`}
        className="w-full h-40 object-cover rounded-t-md mb-4"
      />
      <div className="px-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-2">{countryName}</h2>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-1">
          <span className="font-medium">Visa Type:</span> {visaType}
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-1">
          <span className="font-medium">Processing Time:</span> {processingTime}{" "}
          Days
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
          <span className="font-medium">Fee:</span> ${fee}
        </p>
        <Link to={`/visa/${_id}`} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-center font-semibold hover:bg-blue-700 transition-colors">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VisaCard;
