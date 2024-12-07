import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const AllVisa = () => {
  const data = useLoaderData();
  const [selectedType, setSelectedType] = useState(""); // State to track selected visa type

  // Handle visa type filter
  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  // Filter visas based on selected type
  const filteredVisas = selectedType
    ? data.filter((visa) => visa.visaType === selectedType)
    : data;

  // Unique visa types for dropdown options
  const visaTypes = [...new Set(data.map((visa) => visa.visaType))];
  console.log(visaTypes)

  return (
    <div className="container mx-auto my-5 py-5">
      <h1 className="text-center text-xl md:text-3xl font-medium">
        All Visa List
      </h1>
      <p className="text-lg text-gray-600 mt-2 text-center w-3/4 mx-auto">
        Explore the different types of visas available for travel, work, study,
        and more. Whether you're planning a short trip, long-term stay, or
        seeking opportunities abroad, you can find all the visa information you
        need right here.
      </p>

      {/* Dropdown Filter */}
      <div className="my-6 flex justify-center">
        <select
          value={selectedType}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
        >
          <option value="">All Visa Types</option>
          {visaTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Visa List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVisas.map((visa) => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
