import React from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const AllVisa = () => {
  const data = useLoaderData();
  console.log(data);
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
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map(visa => <VisaCard key={visa._id} visa={visa}/>)}
        </div>
      </div>
   
  );
};

export default AllVisa;
