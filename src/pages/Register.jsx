import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from "react-awesome-reveal"; // Import React Awesome Reveal
import { AuthContext } from "../contexts/AuthProvider";
import registerCover from "../assets/auth.jpg";
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, setUser, updateData, handleGoogleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const validatePassword = (password) => {
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

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must contain at least one uppercase and one lowercase letter!"
      );
      return;
    }

    const user = { firstName, lastName, email, photoURL, password };

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateData({
          displayName: `${firstName} ${lastName}`,
          photoURL: photoURL,
        });
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => res.json());
        Swal.fire({
          title: `Welcome, ${user.displayName || ""}!`,
          text: "You have signed in successfully!",
          icon: "success",
        });
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <ToastContainer />
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full h-screen md:w-1/3 hidden md:block">
          <Fade direction="left" triggerOnce>
            <img
              src={registerCover}
              alt="Register Display"
              className="h-full object-cover shadow-lg"
            />
          </Fade>
        </div>

        {/* Right Form Section */}
        <div className="w-full h-auto md:h-screen md:w-2/3 bg-white dark:bg-gray-800 px-8 py-6 md:py-12 rounded-lg shadow-lg flex flex-col justify-center">
          <Fade direction="up" triggerOnce>
            <div className="mt-8 md:mt-0">
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
                    <span className="text-blue-600 dark:text-blue-400">
                      Fees
                    </span>
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

              <div className="mt-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-red-500 hover:bg-red-600 w-full text-white py-3 text-lg font-semibold transition-all duration-300"
                >
                  Sign in with Google
                </button>
              </div>

              <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Log in
                </Link>
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Register;
