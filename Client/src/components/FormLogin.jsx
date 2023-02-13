import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Logo from "../assets/logo.png";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <>
      <form className="w-full max-w-md">
        <img className="w-auto h-7 sm:h-8" src={Logo} alt="" />

        <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl ">
          sign In
        </h1>

        <div className="relative flex items-center mt-8">
          <span className="absolute">
            <MailOutlineIcon className="w-6 h-6 mx-3 text-gray-300 " />
          </span>

          <input
            type="email"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus0"
            placeholder="Email address"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <LockIcon className="w-6 h-6 mx-3 text-gray-300 da0" />
          </span>

          <input
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus0"
            placeholder="Password"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Sign in
          </button>

          <div className="mt-6 text-center flex-col">
            <div>
              <Link
                className="text-sm text-blue-500 hover:underline"
                to="/register">
                Don’t have an account yet? Sign up
              </Link>
            </div>
            <div>
              <Link className="text-sm text-blue-500 hover:underline">
                Login as Master
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
