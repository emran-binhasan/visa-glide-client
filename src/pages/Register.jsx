import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerCover from "../assets/auth.jpg"; // Image for registration page
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const {createUser,setUser} = useContext(AuthContext)
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.firstName.value;+' '+form.lastName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const user = {name, email, photoURL, password}
    console.log(user)

    createUser(email, password)
    .then(result => {
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json)
      .then(data => console.log(data))
      console.log(result.user);
      setUser(result.user)
      navigate('/')
    })
    .catch(error => console.log(error))


  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full h-screen md:w-1/3 hidden md:block">
          <img
            src={registerCover}
            alt="Register Display"
            className="h-full object-cover shadow-lg"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full h-auto md:h-screen md:w-2/3 bg-white dark:bg-gray-800 px-8 rounded-lg shadow-lg flex flex-col justify-center">
          {/* Form Section */}
          <div className="mt-16">
            {" "}
            {/* Added margin to offset the fixed header */}
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Register
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Manage all your tasks efficiently. Let's get you set up.
            </p>
            <form onSubmit={handleRegister}>
              {/* First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Photo URL */}
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password" autoComplete="true"
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Confirm Password */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password" autoComplete="true"
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Terms & Conditions Checkbox */}
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  className="checkbox checkbox-primary mr-2"
                />
                <label
                  htmlFor="terms"
                  className="text-gray-600 dark:text-gray-400"
                >
                  I agree to the{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Terms, Privacy Policy,
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 dark:text-blue-400">Fees</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full py-3 text-white text-lg font-semibold transition-all duration-300"
              >
                Create Account
              </button>
            </form>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
