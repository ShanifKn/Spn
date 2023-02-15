import taskModel from "../models/Task.js";

// * get the task list which student did'nt complete *//
export const getTaskList = async (req, res) => {
  try {
    const { user } = req.query;
    const response = await taskModel.find({
      "answers.student": { $ne: user },
    });
    res.status(200).json({ task: response });
  } catch (err) {
    res.status(500);
  }
};

// * aswer give by the student *//
export const answerReq = async (req, res) => {
  try {
    const { ans, id, user } = req.body;

    const task = await taskModel.findById(id);

    if (ans == task.numbers[0].result) {
      await taskModel.updateOne(
        { _id: id },
        {
          $push: {
            answers: { student: user, result: "correct", task: task.title },
          },
        }
      );
    } else {
      await taskModel.updateOne(
        { _id: id },
        {
          $push: {
            answers: { student: user, result: "incorrect", task: task.title },
          },
        }
      );
    }
    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
