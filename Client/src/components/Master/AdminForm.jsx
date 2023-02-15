import React, { useState } from "react";
import admin from "../../assets/admin.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../api/auth";

import { setAdminLogin } from "../../state/Slice/adminSlice";

const AdminForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setError("All fields are required.");
      return false;
    }
    if (!/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Invalid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    const response = await adminLogin(email, password);

    if (response.status === 400) {
      setError(response.data.error);
    } else if (response.status === 500) {
      navigate("/404");
    } else {
      dispatch(
        setAdminLogin({
          user: response.Admin.userName,
          token: response.token,
        })
      );
      navigate("/master");
    }
  };
  return (
    <>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        {error ? (
          <div className="flex items-center rounded-xl    shadow-md overflow-hidden max-w-xl relative bg-gray-900 text-gray-100 mb-10">
            <div className="self-stretch flex items-center px-3 flex-shrink-0 bg-gray-700 text-violet-400">
              <HighlightOffTwoToneIcon />
            </div>
            <div className="p-4 flex-1">
              <p className="text-xl text-red-600">{error}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className=" justify-center items-center">
          <img className="w-auto h-7 sm:h-8 ml-52 " src={admin} alt="" />
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl ml-44 ">
            Master
          </h1>
        </div>

        <div className="relative flex items-center mt-8">
          <span className="absolute">
            <MailOutlineIcon className="w-6 h-6 mx-3 text-gray-300 " />
          </span>

          <input
            type="email"
            onChange={handleEmail}
            value={email}
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
            onChange={handlePassword}
            value={password}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus0"
            placeholder="Password"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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

export default AdminForm;
