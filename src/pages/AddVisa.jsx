import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2'

const AddVisa = () => {
  const { user } = useContext(AuthContext);

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;

    const requiredDocuments = Array.from(form.requiredDocuments)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    if (requiredDocuments.length === 0) {
      alert("Please select at least one required document.");
      return;
    }

    const applicationMethods = Array.from(form.applicationMethods)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    if (applicationMethods.length === 0) {
      alert("Please select at least one application method.");
      return;
    }

    const countryName = form.countryName.value;
    const countryImage = form.countryImage.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const description = form.description.value;

    const uid = user.uid;

    const visa = {
      countryName,
      countryImage,
      visaType,
      processingTime,
      ageRestriction,
      fee,
      validity,
      requiredDocuments,
      applicationMethods,
      description,
      uid,
    };

    fetch("http://localhost:5000/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visa),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: `Congratulations !}`,
          text: "Visa Added Successfully",
          icon: "success"
        });
      } );
  };

  return (
    <div className="container mx-auto p-4">
      <Fade>
        <form
          onSubmit={handleAddVisa}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 dark:bg-gray-800 dark:text-white"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-6">
            Add Visa
          </h2>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Country Name
              </label>
              <input
                type="text"
                name="countryName"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter the country name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Country Image URL
              </label>
              <input
                type="url"
                name="countryImage"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter the image URL"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Visa Type
              </label>
              <select
                name="visaType"
                className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                required
              >
                <option value="">Select Visa Type</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Business Visa">Business Visa</option>
                <option value="Transit Visa">Transit Visa</option>
                <option value="Official Visa">Official Visa</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Processing Time (in days)
              </label>
              <input
                type="number"
                name="processingTime"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter processing time"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Age Restriction
              </label>
              <input
                type="number"
                name="ageRestriction"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter age restriction (if any)"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Fee (in USD)
              </label>
              <input
                type="number"
                name="fee"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter visa fee"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Validity (in years)
              </label>
              <input
                type="number"
                name="validity"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter validity duration"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-600 dark:text-gray-300">
              Required Documents
            </label>
            <div className="flex flex-wrap gap-4">
              {[
                "Valid passport",
                "Visa application form",
                "Passport photo",
                "Travel itinerary",
                "Proof of funds",
              ].map((doc) => (
                <label key={doc} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="requiredDocuments"
                    value={doc}
                    className="checkbox checkbox-primary"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {doc}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-600 dark:text-gray-300">
              Application Method
            </label>
            <div className="flex flex-wrap gap-4">
              {["Online", "In-person", "Postal", "Visa on Arrival"].map(
                (method) => (
                  <label key={method} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="applicationMethods"
                      value={method}
                      className="checkbox checkbox-primary"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      {method}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-600 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full dark:bg-gray-700 dark:border-gray-600"
              rows="4"
              placeholder="Provide a brief description of the visa"
              required
            ></textarea>
          </div>

          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Add Visa
            </button>
          </div>
        </form>
      </Fade>
    </div>
  );
};

export default AddVisa;
