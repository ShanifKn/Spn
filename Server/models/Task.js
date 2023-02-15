import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    numbers: [
      {
        num1: { type: String, required: true },
        num2: { type: String, required: true },
        result: { type: Number, required: true },
      },
    ],
    operation: { type: String },
    answers: [
      {
        student: {
          type: String,
        },
        task: {
          type: String,
        },
        result: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);
export default taskModel;
