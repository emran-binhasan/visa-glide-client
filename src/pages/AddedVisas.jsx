import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const AddedVisas = () => {
  const allVisa = useLoaderData();
  const { user } = useContext(AuthContext);

  const [visas, setVisas] = useState(
    allVisa.filter((each) => each.uid === user.uid)
  );

  console.log(visas)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVisa, setCurrentVisa] = useState(null);

  // Handle the delete functionality
  const handleDeleteVisa = (id) => {
    fetch(`http://localhost:5000/visa/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        const remainingVisas = visas.filter((visa) => visa._id !== id);
        setVisas(remainingVisas);
      })
      .catch((error) => console.error("Error deleting visa:", error));
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
  
    fetch(`http://localhost:5000/visa/${currentVisa._id}`, {
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
      })
      .catch((error) => console.error("Error updating visa:", error));
  };
  
  return (
    <div className="container mx-auto py-5 my-5">
      <h2 className="text-xl md:text-3xl font-medium text-center mb-5">Added Visas</h2>

      {/* Display visa cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-50 flex items-center justify-center border-b">
              <img
                src={visa.countryImage}
                alt={`Flag of ${visa.countryName}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">{visa.countryName}</h3>
              <p className="text-lg text-gray-600">
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Processing Time:</strong> {visa.processingTime} Days
              </p>
              <p className="text-lg text-gray-600">
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Validity:</strong> {visa.validity} Year
              </p>

              {visa.applicationMethods && visa.applicationMethods.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl font-medium text-gray-800 mb-3">
                    Application Methods
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
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

      {/* Modal for updating visa data */}
      {isModalOpen && currentVisa && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full z-60">
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

              <div className="flex flex-wrap gap-4">
                {[
                  "Online",
                  "In-person",
                  "Postal",
                  "Visa on Arrival",
                ].map((method) => (
                  <label key={method} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="applicationMethods"
                      value={method}
                      className="checkbox checkbox-primary"
                      defaultChecked={currentVisa.applicationMethods.includes(method)}
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{method}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <button type="submit" className="btn btn-primary flex-1">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
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
