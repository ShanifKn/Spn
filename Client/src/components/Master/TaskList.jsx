import React, { useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";

const TaskList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Add, setAdd] = useState(false);
  const [selectedOperation, setSelectOperation] = useState();
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    title: "",
    question: "",
    num1: "",
    num2: "",
    operation: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleAdd = () => {
    setAdd(!Add);
  };

  const handleSelectOptions = (event) => {
    setSelectOperation(event.target.value);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      operation: selectedOperation,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.title === "" ||
      formData.question === "" ||
      formData.num1 === "" ||
      formData.num2 === "" ||
      formData.operation === ""
    ) {
      setError("All fields are required.");
      return false;
    }

    const form = new FormData()



  };

  return (
    <>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
          Task List
        </span>
        <div className="flex justify-between items-center md:w-full ">
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 md:mr-0 mr-10">
            List of assigned task
          </h2>

          <span
            className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm"
            onClick={toggleAdd}>
            <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:relative">
              Add Task
            </button>
          </span>
        </div>
        <div className="overflow-x-auto md:w-full w-screen">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  No
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Task
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Operation
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
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  24/05/1995
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Addition
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

      {Add && (
        <div className=" fixed  md:flex justify-center items-center overflow-x-hidden md:p-0  pl-5 overflow-y-auto md:inset-0 h-modal md:h-full">
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            <div className="relative rounded-lg shadow bg-gray-800">
              {error && (
                <div
                  role="alert"
                  class="rounded border-l-4 border-red-500 bg-red-50 p-4">
                  <div class="flex items-center gap-2 text-red-800">
                    <WarningOutlinedIcon />

                    <strong class="block font-medium">{error}</strong>
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                <h3 className="text-xl font-semibold text-white">Add Task</h3>
                <button
                  onClick={toggleAdd}
                  type="button"
                  className="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white">
                  <CloseTwoToneIcon className="w-5 h-5" />
                </button>
              </div>
              <section className=" p-6 mx-auto  rounded-md shadow-md bg-gray-800">
                <form onSubmit={handleSubmit}>
                  <div className=" sm:grid-cols-2">
                    <div className="w-4/5">
                      <label className=" text-gray-200 text-xl font-medium">
                        Task title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Two sums"
                        className="block w-full px-4 py-2 mt-2 rounded-md bg-gray-600 text-gray-50 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="mt-2">
                      <label className=" text-gray-200 text-xl font-medium">
                        Question
                      </label>
                      <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleInputChange}
                        placeholder="Find the sum of two numbers ?"
                        className="block w-full px-4 py-2 mt-2 rounded-md bg-gray-600 text-gray-50 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="mt-4 flex justify-between w-2/5 gap-4">
                      <div>
                        <label className=" text-gray-200 text-xl font-medium ">
                          Num 1
                        </label>
                        <input
                          type="number"
                          name="num1"
                          value={formData.num1}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2  rounded-md bg-gray-600 text-gray-50 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label className=" text-gray-200 text-xl font-medium">
                          Num 2
                        </label>
                        <input
                          type="number"
                          name="num2"
                          value={formData.num2}
                          onChange={handleInputChange}
                          className=" block w-full px-4 py-2 mt-2 rounded-md bg-gray-600 text-gray-50 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className=" text-gray-200 text-xl font-medium">
                        Arithmetic Operators
                      </label>
                      <fieldset className="grid grid-cols-4 gap-4 mt-2">
                        <div>
                          <label
                            className={`block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 ${
                              selectedOperation === "plus"
                                ? "peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                : ""
                            }`}>
                            <input
                              type="radio"
                              value="plus"
                              checked={selectedOperation === "plus"}
                              onChange={handleSelectOptions}
                            />
                            <p className="mt-1 text-white">Addition</p>
                          </label>
                        </div>
                        <div>
                          <label
                            className={`block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 ${
                              selectedOperation === "minus"
                                ? "peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                : ""
                            }`}>
                            <input
                              type="radio"
                              className="peer "
                              value="minus"
                              checked={selectedOperation === "minus"}
                              onChange={handleSelectOptions}
                            />
                            <p className="text-white">Subtraction</p>
                          </label>
                        </div>
                        <div>
                          <label
                            className={`block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 ${
                              selectedOperation === "times"
                                ? "peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                : ""
                            }`}>
                            <input
                              type="radio"
                              value="times"
                              checked={selectedOperation === "times"}
                              onChange={handleSelectOptions}
                            />
                            <p className="mt-1 text-white">Multiplication</p>
                          </label>
                        </div>{" "}
                        <div>
                          <label
                            className={`block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 ${
                              selectedOperation === "divided_by"
                                ? "peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                : ""
                            }`}>
                            <input
                              type="radio"
                              value="divided_by"
                              checked={selectedOperation === "divided_by"}
                              onChange={handleSelectOptions}
                            />
                            <p className="mt-1 text-white">Division</p>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                    <div className=" mt-6">
                      <label className=" text-green-500 text-2xl">Result</label>
                      <div className="flex justify-between items-center">
                        <input
                          type="password"
                          className="block w-2/5 px-4 py-2 mt-2 rounded-md bg-gray-600 text-gray-300 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                        <button
                          type="submit"
                          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                          Result
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-600">
                <button
                  type="button"
                  className=" focus:ring-4 focus:outline-none  rounded-lg border  text-sm font-medium px-5 py-2.5 focus:z-10 bg-red-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">
                  ADD
                </button>
                <button
                  type="button"
                  onClick={toggleAdd}
                  className=" focus:ring-4 focus:outline-none  rounded-lg border  text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
              <div className="p-6 space-y-6 ">
                <p className="text-base leading-relaxed text-white">
                  Caluclate the distance between two points
                </p>
                <span className="text-red-500 ">Answer: 45</span>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-600">
                <button
                  type="button"
                  onClick={toggleModal}
                  className=" focus:ring-4 focus:outline-none  rounded-lg border  text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskList;
