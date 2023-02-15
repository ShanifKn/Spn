import React from "react";
import { Link, useNavigate } from "react-router-dom";
import admin from "../../assets/admin.png";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { useDispatch } from "react-redux";
import { setAdminLogout } from "../../state/Slice/adminSlice";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setAdminLogout());
    navigate("/signin");
  };

  const dispatch = useDispatch();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/">
          <img
            src={admin}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          />

          <span className="ml-3 text-xl">Master</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900">Home</Link>
        </nav>
        <button
          onClick={handleLogout}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Logout
          <LogoutTwoToneIcon className="ml-2" />
        </button>
      </div>
    </header>
  );
};

export default Header;
