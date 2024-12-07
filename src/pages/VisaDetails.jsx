import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const VisaDetails = () => {
  const { user } = useContext(AuthContext);
  const visa = useLoaderData();
  const {
    countryName,
    countryImage,
    fee,
    validity,
    visaType,
    processingTime,
    description,
    requiredDocuments,
    applicationMethods,
  } = visa;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const date = new Date().toISOString().split("T")[0];

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const applyDate = form.date.value;
    const fee = form.fee.value;
    const uid = user.uid;
    const application = {
      countryName,
      countryImage,
      email,
      visaType,
      processingTime,
      applicationMethods,
      validity,
      firstName,
      lastName,
      applyDate,
      fee,
      uid,
    };
    console.log(application);
    fetch(`http://localhost:5000/applications/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 max-w-3xl mx-auto">
      <div className="flex items-center gap-6 mb-6">
        <img
          src={countryImage}
          alt={`Flag of ${countryName}`}
          className="w-24 h-24 object-cover rounded-md border"
        />
        <h1 className="text-3xl font-bold text-gray-800">
          {countryName} Visa Details
        </h1>
      </div>
      <div className="space-y-4">
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Visa Type:</span> {visaType}
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Processing Time:</span>{" "}
          {processingTime} Days
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Fee:</span> ${fee}
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Validity:</span> {validity} Year
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Description:</span> {description}
        </p>
      </div>
      {requiredDocuments && requiredDocuments.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            Required Documents
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {requiredDocuments.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      )}
      {applicationMethods && applicationMethods.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            Application Methods
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {applicationMethods.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <button
          className="btn btn-primary w-full"
          onClick={() => setIsModalOpen(true)}
        >
          Apply for the Visa
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full z-60">
            <h2 className="text-2xl font-semibold mb-4">Visa Application</h2>
            <form onSubmit={handleAddVisa} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Applied Date
                </label>
                <input
                  type="text"
                  name="date"
                  readOnly
                  defaultValue={date}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Fee
                </label>
                <input
                  type="text"
                  name="fee"
                  defaultValue={fee}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button type="submit" className="btn btn-primary flex-1">
                  Apply
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

export default VisaDetails;
