import React, { useState } from "react";
import Person3Icon from "@mui/icons-material/Person3";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { register } from "../api/auth";

const FormSignup = () => {
  const [error, setError] = useState("");
  const [selectRole, setSelectRole] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const handleRadioChange = (event) => {
    setSelectRole(event.target.value);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // * Form submission *//
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.userName === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.password2 === ""
    ) {
      setError("All fields are required.");
      return false;
    }
    if (
      !/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      setError("Invalid email address.");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    if (formData.password !== formData.password2) {
      setError("Password must match.");
      return false;
    }
    if (selectRole === "") {
      setError("Please select an option!");
      return false;
    }

    const form = new FormData();
    form.append("userName", formData.userName);
    form.append("password", formData.password);
    form.append("email", formData.email);
    form.append("role", selectRole);

    const response = await register(form);
    // *Error Handling *//
    if (response === 11000) {
      setError("User Already Exist");
    } else if (response == "server error") {
      navigate("/404");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        {error ? (
          <div className="flex items-center rounded shadow-md overflow-hidden max-w-xl relative bg-gray-900 text-gray-100 mb-10">
            <div className="self-stretch flex items-center px-3 flex-shrink-0 bg-gray-700 text-violet-400">
              <HighlightOffTwoToneIcon />
            </div>
            <div className="p-4 flex-1">
              <p className="text-sm text-gray-400">{error}</p>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-center mx-auto items-center ">
          <img className="w-auto h-7 sm:h-8" src={Logo} alt="" />
          <span className="text-xl ml-2">Smart Class</span>
        </div>

        <div className="relative flex items-center mt-8">
          <span className="absolute">
            <Person3Icon className="w-6 h-6 mx-3 text-gray-500" />
          </span>

          <input
            type="text"
            value={formData.userName}
            onChange={handleInputChange}
            name="userName"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>
        <div className="relative flex items-center mt-6">
          <span className="absolute">
            <MailOutlineIcon className="w-6 h-6 mx-3 text-gray-500" />
          </span>
          <input
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <LockIcon className="w-6 h-6 mx-3 text-gray-500" />
          </span>

          <input
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <LockIcon className="w-6 h-6 mx-3 text-gray-500" />
          </span>

          <input
            type="password"
            value={formData.password2}
            name="password2"
            onChange={handleInputChange}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-evenly items-center mt-5">
          <div className="flex items-center ">
            <input
              type="radio"
              value="master"
              checked={selectRole === "master"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
            />
            <label
              for="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 ">
              Master
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="student"
              checked={selectRole === "student"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
            />
            <label
              for="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 ">
              Student
            </label>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Sign Up
          </button>

          <div className="mt-6 text-center ">
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
