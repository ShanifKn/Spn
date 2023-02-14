import React, { useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

const ApprovalList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
          Approval List
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
          Resposne from the students
        </h2>
        <div className="overflow-x-auto md:w-full w-screen">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Task
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Answer
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  24/05/1995
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Web Developer
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className=" fixed  md:flex justify-center items-center overflow-x-hidden md:p-0  pl-5 overflow-y-auto md:inset-0 h-modal md:h-full">
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            <div className="relative rounded-lg shadow bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                <h3 className="text-xl font-semibold text-white">
                  Task #1. Calculate
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white">
                  <CloseTwoToneIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-400">
                  Caluclate the distance between two points
                  <span className="text-red-500 ml-5">Answer: 45</span>
                </p>
                <div>
                  <h1 className="text-black">
                    Result Status:
                    <span className="text-green-400 ml-2">Correct</span>
                  </h1>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-600">
                <button
                  type="button"
                  className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800">
                  Approve
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className=" focus:ring-4 focus:outline-none  rounded-lg border  text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApprovalList;
