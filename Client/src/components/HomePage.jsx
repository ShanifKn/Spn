import React, { useEffect, useState } from "react";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { getTaskList, sendAnswer } from "../api/studentApi";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [isOpen, setOpen] = useState();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const [tasks, setTask] = useState(null);
  const [answer, setAnswer] = useState("");


  const handleToggle = () => {
    setOpen(!isOpen);
  };
  const handleInput = (event) => {
    setAnswer(event.target.value);
  };

  useEffect(() => {
    const fetchList = async () => {
      const response = await getTaskList(token, user);
      setTask(response.data.task);
    };
    fetchList();
  }, []);

  const handleSubmit = async (id) => {
    if (answer === "") return false;
    const response = await sendAnswer(answer, id, token, user);
    if (response === 200) {
      const task = tasks.filter((task) => task._id !== id);
      setTask(task);
    }
  };
  return (
    <>
      <section className="bg-white  ">
        <div className="container px-6 py-12 mx-auto w-6/12">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
            Frequently asked questions
          </h1>

          {!tasks || tasks.length == 0 ? (
            <div className="mt-8 space-y-8 lg:mt-12">
              <div className="p-8 bg-gray-100 rounded-lg ">
                <button className="flex items-center justify-between w-full">
                  <h1 className="font-semibold text-gray-700 ">
                    No tasks has been added
                  </h1>
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-8 space-y-8 lg:mt-12">
              {tasks.map((task, index) => (
                <div
                  key={task._id}
                  class="max-w-2xl px-8 py-4 bg-gray-900 rounded-lg shadow-md ">
                  <div class="flex items-center justify-between">
                    <span class="text-2xl font-medium text-gray-900 ">
                      {task.title}
                    </span>
                  </div>

                  <div class="mt-2">
                    <h1 class="text-xl font-bold text-white hover:text-gray-600  hover:underline">
                      {task.question} {task.numbers[0].num1} and{" "}
                      {task.numbers[0].num2}
                    </h1>
                  </div>

                  <div class="flex items-center justify-between mt-4">
                    <fieldset className="w-28  space-y-1 text-gray-100">
                      <label className="block text-sm font-medium">
                        Total price
                      </label>
                      <div className="flex ">
                        <input
                          type="number"
                          name="answer"
                          onChange={handleInput}
                          value={answer}
                          className="flex flex-1 text-black border py-4 sm:text-sm rounded-l-md focus:ring-inset  focus:ring-violet-400"
                        />
                        <button
                          onClick={() => handleSubmit(task._id)}
                          className="flex items-center ml-5 px-10   cursor-pointer sm:text-sm rounded bg-gray-700">
                          Submit
                        </button>
                      </div>
                    </fieldset>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
