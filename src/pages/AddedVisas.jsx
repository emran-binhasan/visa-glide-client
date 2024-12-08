import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2';

const AddedVisas = () => {
  const allVisa = useLoaderData();
  const { user } = useContext(AuthContext);

  const [visas, setVisas] = useState(
    allVisa.filter((each) => each.uid === user.uid)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVisa, setCurrentVisa] = useState(null);

  // Handle the delete functionality
  const handleDeleteVisa = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-glide-server.vercel.app/visa/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remainingVisas = visas.filter((visa) => visa._id !== id);
            setVisas(remainingVisas);
          })
          .catch((error) => {
            Swal.fire({
              title: "Couldn't delete!",
              text: `${error}`,
              icon: "alert"
            });
          });
      }
    });
  };

  const handleUpdateVisa = (e) => {
    e.preventDefault();
    const form = e.target;

    // Ensure 'applicationMethods' is a valid collection
    const applicationMethodsInput = form.applicationMethods;
    if (!applicationMethodsInput) {
      console.error("Application methods input not found.");
      return;
    }

    // Get selected application methods
    const applicationMethods = Array.from(applicationMethodsInput)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    // Validate selection
    if (applicationMethods.length === 0) {
      alert("Please select at least one application method.");
      return;
    }

    const updatedVisa = {
      countryName: form.countryName.value,
      countryImage: form.countryImage.value,
      visaType: form.visaType.value,
      processingTime: form.processingTime.value,
      fee: form.fee.value,
      validity: form.validity.value,
      applicationMethods,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-glide-server.vercel.app/visa/${currentVisa._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedVisa),
        })
          .then((res) => res.json())
          .then(() => {
            const updatedVisas = visas.map((visa) =>
              visa._id === currentVisa._id ? { ...visa, ...updatedVisa } : visa
            );
            setVisas(updatedVisas);
            setIsModalOpen(false);
            Swal.fire({
              title: "Updated!",
              text: "Your file has been updated.",
              icon: "success"
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Couldn't update!",
              text: `${error}`,
              icon: "alert"
            });
          });
      }
    });
  };

  return (
    <div className="container mx-auto py-5 my-5 dark:bg-gray-800 dark:text-gray-400">
      <h2 className="text-xl md:text-3xl font-medium text-center mb-5">Added Visas</h2>

      {/* Display visa cards */}
      {visas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visas.map((visa) => (
            <div
              key={visa._id}
              className="bg-white dark:bg-gray-700 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-50 dark:bg-gray-900 flex items-center justify-center border-b">
                <img
                  src={visa.countryImage}
                  alt={`Flag of ${visa.countryName}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">{visa.countryName}</h3>
                <p className="text-lg dark:text-gray-400">
                  <strong>Visa Type:</strong> {visa.visaType}
                </p>
                <p className="text-lg dark:text-gray-400">
                  <strong>Processing Time:</strong> {visa.processingTime} Days
                </p>
                <p className="text-lg dark:text-gray-400">
                  <strong>Fee:</strong> ${visa.fee}
                </p>
                <p className="text-lg dark:text-gray-400">
                  <strong>Validity:</strong> {visa.validity} Year
                </p>

                {visa.applicationMethods && visa.applicationMethods.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-xl font-medium dark:text-gray-200 mb-3">
                      Application Methods
                    </h2>
                    <ul className="list-disc list-inside dark:text-gray-400 space-y-2">
                      {visa.applicationMethods.map((each, index) => (
                        <li key={index}>{each}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => {
                      setCurrentVisa(visa);
                      setIsModalOpen(true);
                    }}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteVisa(visa._id)}
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg dark:text-gray-400">No visas have been added yet.</p>
      )}

      {/* Modal for updating visa data */}
      {isModalOpen && currentVisa && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full z-60">
            <h2 className="text-2xl font-semibold mb-4">Update Visa Information</h2>
            <form onSubmit={handleUpdateVisa} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Country Name</label>
                <input
                  type="text"
                  name="countryName"
                  defaultValue={currentVisa.countryName}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country Image URL</label>
                <input
                  type="text"
                  name="countryImage"
                  defaultValue={currentVisa.countryImage}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Visa Type</label>
                <input
                  type="text"
                  name="visaType"
                  defaultValue={currentVisa.visaType}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={currentVisa.processingTime}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Fee</label>
                <input
                  type="text"
                  name="fee"
                  defaultValue={currentVisa.fee}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Validity</label>
                <input
                  type="text"
                  name="validity"
                  defaultValue={currentVisa.validity}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Application Methods</label>
                <div>
                  <input
                    type="checkbox"
                    name="applicationMethods"
                    value="Online Application"
                    defaultChecked={currentVisa.applicationMethods?.includes("Online Application")}
                  />
                  <label className="ml-2">Online Application</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="applicationMethods"
                    value="Consulate Submission"
                    defaultChecked={currentVisa.applicationMethods?.includes("Consulate Submission")}
                  />
                  <label className="ml-2">Consulate Submission</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="applicationMethods"
                    value="Visa Agent"
                    defaultChecked={currentVisa.applicationMethods?.includes("Visa Agent")}
                  />
                  <label className="ml-2">Visa Agent</label>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddedVisas;
