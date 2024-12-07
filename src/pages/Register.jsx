import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Import React Toastify
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from "../contexts/AuthProvider";
import registerCover from "../assets/auth.jpg";

const Register = () => {
  const { createUser, setUser, updateData } = useContext(AuthContext);
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const validatePassword = (password) => {
    // Password must have at least one uppercase letter, one lowercase letter, and 6 or more characters
    return /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validate passwords
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Password must contain at least one uppercase and one lowercase letter!');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    const user = { firstName, lastName, email, photoURL, password };

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        updateData({
          displayName: firstName + " " + lastName,
          photoURL: photoURL
        });
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data));
        navigate('/');
      })
      .catch(error => {
        toast.error(error.message); // Show error message with React Toastify
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <ToastContainer/>
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
            {" "} {/* Added margin to offset the fixed header */}
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
                  required
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Photo URL */}
              <input
                type="text"
                name="photoURL"
                required
                placeholder="Photo URL"
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="true"
                required
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Confirm Password */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="true"
                required
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Terms & Conditions Checkbox */}
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  className="checkbox checkbox-primary mr-2"
                  required
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
