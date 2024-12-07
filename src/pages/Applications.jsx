import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2';

const Applications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState(""); // State to track search input

  useEffect(() => {
    fetch(`http://localhost:5000/applications/${user.uid}`)
      .then((response) => response.json())
      .then((data) => setApplications(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleDeleteApplication = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your application will be cancelled",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes, cancel it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/application/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            // Update the visas state by removing the deleted visa
            const remainingApplications = applications.filter((application) => application._id !== id);
            setApplications(remainingApplications)
            Swal.fire({
              title: "Cancelled!",
              text: "Your visa application has been cancelled.",
              icon: "success"
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Couldn't cancel application!",
              text: `${error}`,
              icon: "error"
            });
          });
      }
    });

  };



  // Filter applications based on the search term
  const filteredApplications = applications.filter((application) =>
    application.countryName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-medium text-gray-800 text-center mb-12">
        Applied Visas
      </h2>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by country name"
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"
        />
        <button
          onClick={() => setSearch(search)} // Trigger filtering when the button is clicked
          className="ml-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>

      {/* Visa Applications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredApplications.map((application) => (
          <div
            key={application._id}
            className="flex flex-col bg-white shadow-md rounded-lg border border-gray-200"
          >
            {/* Flag Section */}
            <div className="h-48 bg-gray-50 flex items-center justify-center border-b">
              <img
                src={application.countryImage}
                alt={`Flag of ${application.countryName}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="flex-grow p-6">
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                {application.countryName}
              </h3>
              <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Visa Type:</span>{" "}
                  {application.visaType}
                </p>
                <p>
                  <span className="font-medium">Processing Time:</span>{" "}
                  {application.processingTime} Days
                </p>
                <p>
                  <span className="font-medium">Fee:</span> ${application.fee}
                </p>
                <p>
                  <span className="font-medium">Validity:</span>{" "}
                  {application.validity} Year
                </p>
                <p>
                  <span className="font-medium">Applied Date:</span>{" "}
                  {application.applyDate}
                </p>
                <p>
                  <span className="font-medium">Applicant Name:</span>{" "}
                  {`${application.firstName} ${application.lastName}`}
                </p>
                <p className="col-span-2">
                  <span className="font-medium">Email:</span> {application.email}
                </p>
                <p className="col-span-2">
                  <span className="font-medium">Application Methods:</span>{" "}
                  {application.applicationMethods.map((method, index) => (
                    <span key={index} className="block">
                      {method}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {/* Button Section */}
            <div className="p-4 flex justify-center border-t">
              <button
                onClick={() => handleDeleteApplication(application._id)}
                className="px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
              >
                Cancel Application
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
