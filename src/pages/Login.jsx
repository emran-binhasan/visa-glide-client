import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import loginCover from "../assets/auth.jpg";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
  const{loginUser,setUser} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then(result => {
      const user = result.user
      console.log(user);
      setUser(user);
      Swal.fire({
        title: `Welcome ${user == null?user.displayName:''}`,
        text: "You have signed in succesfully!",
        icon: "success"
      });
      <Navigate to={location.state?location.state:'/'} replace />
    })
    .catch(error => console.log(error))
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full h-screen md:w-1/3 hidden md:block">
          <img
            src={loginCover}
            alt="Login Display"
            className="h-full object-cover shadow-lg"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full h-auto md:h-screen md:w-2/3 bg-white dark:bg-gray-800 px-8 rounded-lg shadow-lg flex flex-col justify-center">
          {/* Form Section */}
          <div className="mt-16"> {/* Added margin to offset the fixed header */}
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Login
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Welcome back! Please login to access your account.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Forgot Password Link */}
              <div className="flex justify-end mb-6">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:underline text-sm dark:text-blue-400"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full py-3 text-white text-lg font-semibold transition-all duration-300"
              >
                Login
              </button>
            </form>

            <p className="text-center text-gray-600 mt-4 dark:text-gray-400">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-blue-600 hover:underline dark:text-blue-400">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
