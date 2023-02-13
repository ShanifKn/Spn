import React from "react";
import Person3Icon from "@mui/icons-material/Person3";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const FormSignup = () => {
  return (
    <>
      <form class="w-full max-w-md">
        <div class="flex justify-center mx-auto items-center ">
          <img class="w-auto h-7 sm:h-8" src={Logo} alt="" />
          <span className="text-xl ml-2">Smart Class</span>
        </div>

        <div class="relative flex items-center mt-8">
          <span class="absolute">
            <Person3Icon className="w-6 h-6 mx-3 text-gray-500" />
          </span>

          <input
            type="text"
            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>
        <div class="relative flex items-center mt-6">
          <span class="absolute">
            <MailOutlineIcon className="w-6 h-6 mx-3 text-gray-500" />
          </span>
          <input
            type="email"
            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
          />
        </div>

        <div class="relative flex items-center mt-4">
          <span class="absolute">
            <LockIcon className="w-6 h-6 mx-3 text-gray-500" />
          </span>

          <input
            type="password"
            class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
          />
        </div>

        <div class="relative flex items-center mt-4">
          <span class="absolute">
            <LockIcon className="w-6 h-6 mx-3 text-gray-500" />
          </span>

          <input
            type="password"
            class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Confirm Password"
          />
        </div>

        <div class="mt-6">
          <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Sign Up
          </button>

          <div class="mt-6 text-center ">
            <Link
              className="text-sm text-blue-500 hover:underline "
              to="/login">
              Already have an account?
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormSignup;
