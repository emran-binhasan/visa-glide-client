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
      cancelButtonColor: "#d33"
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
      <h2 className="text-xl md:text-3xl font-medium text-center mb-1">Added Visas</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 text-center w-3/4 mx-auto mb-5">
        List of visa you've added 
      </p>

      {/* Display visa cards */}
      {visas.length > 0 ?(
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Country</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Visa Type</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Processing Time</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Fee</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Validity</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visas.map((visa) => (
                <tr key={visa._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    <img
                      src={visa.countryImage}
                      alt={`Flag of ${visa.countryName}`}
                      className="inline-block w-8 h-8 rounded-full mr-2"
                    />
                    {visa.countryName}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{visa.visaType}</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{visa.processingTime} Days</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">${visa.fee}</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{visa.validity} Year</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    <button
                      onClick={() => handleDeleteVisa(visa._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors mr-2"
                    >
                      Delete
                    </button>
                    <button
                    onClick={() => {
                      setCurrentVisa(visa);
                      setIsModalOpen(true);
                    }}
                      className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
