import React, { useState, useEffect } from "react";
import swal from "sweetalert2"; // For SweetAlert
import { Fade } from "react-awesome-reveal"; // For animations
import { FaSun, FaMoon } from "react-icons/fa"; // For sun/moon icons

const AddVisa = () => {
  const [formData, setFormData] = useState({
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
    countryImage: "",
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle theme change and persist to localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        const updatedDocuments = checked
          ? [...prevData.requiredDocuments, value]
          : prevData.requiredDocuments.filter((doc) => doc !== value);
        return { ...prevData, requiredDocuments: updatedDocuments };
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Success!", "Visa added successfully!", "success").then(() => {
      setFormData({
        countryName: "",
        visaType: "",
        processingTime: "",
        requiredDocuments: [],
        description: "",
        ageRestriction: "",
        fee: "",
        validity: "",
        applicationMethod: "",
        countryImage: "",
      });
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Fade>
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 dark:bg-gray-800 dark:text-white"
        >

          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-6">
            Add Visa
          </h2>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country Name */}
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Country Name
              </label>
              <input
                type="text"
                name="countryName"
                value={formData.countryName}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter the country name"
                required
              />
            </div>

            {/* Country Image */}
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Country Image URL
              </label>
              <input
                type="url"
                name="countryImage"
                value={formData.countryImage}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter the image URL"
                required
              />
            </div>

            {/* Visa Type */}
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Visa Type
              </label>
              <select
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
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

            {/* Processing Time */}
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Processing Time (in days)
              </label>
              <input
                type="number"
                name="processingTime"
                value={formData.processingTime}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter processing time"
                required
              />
            </div>

            {/* Age Restriction */}
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Age Restriction
              </label>
              <input
                type="number"
                name="ageRestriction"
                value={formData.ageRestriction}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter age restriction (if any)"
                required
              />
            </div>

            {/* Fee */}
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Fee (in USD)
              </label>
              <input
                type="number"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter visa fee"
                required
              />
            </div>

            {/* Validity */}
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Validity (in years)
              </label>
              <input
                type="number"
                name="validity"
                value={formData.validity}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter validity duration"
                required
              />
            </div>

            {/* Application Method */}
            <div className="form-control">
              <label className="label font-medium text-gray-600 dark:text-gray-300">
                Application Method
              </label>
              <input
                type="text"
                name="applicationMethod"
                value={formData.applicationMethod}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
                placeholder="Specify the application method (e.g., online)"
                required
              />
            </div>
          </div>

          {/* Required Documents */}
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
                    onChange={handleChange}
                    checked={formData.requiredDocuments.includes(doc)}
                    className="checkbox checkbox-primary"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{doc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label font-medium text-gray-600 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full dark:bg-gray-700 dark:border-gray-600"
              rows="4"
              placeholder="Provide a brief description of the visa"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
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
