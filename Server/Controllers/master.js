import taskModel from "../models/Task.js";
import {
  dividedBy,
  minus,
  plus,
  times,
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
} from "./calculate.js";

//* GET TASK LIST *//
export const getTaskList = async (req, res) => {
  try {
    const taskList = await taskModel.find();
    res.status(200).json({ task: taskList });
  } catch (err) {
    res.status(500);
  }
};

//* get task *//
export const getTask = async (req, res) => {
  try {
    console.log(req.query);
    const task = await taskModel.findOne({ _id: id });
    res.status(200).json({ task: task });
  } catch (err) {
    res.status(500);
  }
};

// * ADD TASK *//
export const addTask = async (req, res) => {
  try {
    const { title, question, num1, num2, operator, result } = req.body;
    console.log(req.body);
    const newTask = await taskModel
      .create({
        title: title,
        question: question,
        numbers: [{ num1: num1, num2: num2, result: result }],
        operation: operator,
      })
      .then((newTask) => {
        res.status(200).json({ task: newTask });
      });
  } catch (error) {
    res.status(500);
  }
};

// * GET RESULT * //
export const result = async (req, res) => {
  const { left, operation, right } = req.body;
  let result;

  // *convert string into function *//
  const leftSide = eval(left);
  const rightSide = eval(right);

  switch (operation) {
    case "plus":
      result = leftSide(plus(rightSide()));
      break;
    case "minus":
      result = leftSide(minus(rightSide()));
      break;
    case "times":
      result = leftSide(times(rightSide()));
      break;
    case "dividedBy":
      result = leftSide(dividedBy(rightSide()));
      break;
    default:
      return res.status(400).json({ error: "Invalid operator" });
  }
  return res.status(200).json({ result });
};

export const responselList = async (req, res) => {
  try {
    const tasks = await taskModel.find({
      "answers.student": { $exists: true },
    });

    const list = tasks[0].answers;
    res.status(200).json({ task: list });
  } catch (err) {
    res.status(500);
  }
};
