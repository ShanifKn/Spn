import React, { useEffect, useState } from "react";
import { getApprovalist } from "../../api/masterApi";
import { useSelector } from "react-redux";

const ApprovalList = () => {
  const [tasks, setTask] = useState();
  const token = useSelector((state) => state.admin.token);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchList = async () => {
      const response = await getApprovalist(token);
      console.log(response);
      setTask(response.data.task);
    };
    fetchList();
  }, []);

  console.log(tasks);

  return (
    <>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
          Reponse List
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
          Resposne from the students
        </h2>
        <div className="overflow-x-auto md:w-full w-screen">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  No
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Task
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Status
                </th>
              </tr>
            </thead>

            {!tasks || tasks.length == 0 ? (
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    No task has been Added
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="divide-y divide-gray-200">
                {tasks.map((task, index) => (
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl">
                      {task.student}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl">
                      {task.task}
                    </td>
                    {task.result == "correct" ? (
                      <td className="whitespace-nowrap px-4 py-2 text-green-700 text-xl">
                        {task.result}
                      </td>
                    ) : (
                      <td className="whitespace-nowrap px-4 py-2 text-red-700 text-xl">
                        {task.result}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ApprovalList;
