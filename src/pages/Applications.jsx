import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2';

const Applications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState(""); // State to track search input

  useEffect(() => {
    fetch(`https://visa-glide-server.vercel.app/applications/${user.uid}`)
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
        fetch(`https://visa-glide-server.vercel.app/application/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            const remainingApplications = applications.filter((application) => application._id !== id);
            setApplications(remainingApplications);
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
    <div className="container mx-auto py-10 px-4 dark:bg-gray-800 dark:text-gray-400">
      <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-400 text-center mb-12">Applied Visas</h2>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by country name"
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 dark:bg-gray-900 dark:text-gray-300"
        />
        <button
          onClick={() => setSearch(search)} // Trigger filtering when the button is clicked
          className="ml-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>

      {/* Visa Applications List */}
      {filteredApplications.length === 0 ?  (
        <p className="text-center text-gray-600 dark:text-gray-300">No visa applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Country</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Visa Type</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Processing Time</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Fee</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Validity</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Applicant</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((application) => (
                <tr key={application._id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{application.countryName}</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{application.visaType}</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{application.processingTime} Days</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">${application.fee}</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{application.validity} Year</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{`${application.firstName} ${application.lastName}`}</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{application.email}</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDeleteApplication(application._id)}
                      className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Applications;
