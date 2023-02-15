import express from "express";
import {
  addTask,
  responselList,
  getTaskList,
  result,
} from "../Controllers/master.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// * get complete  task list  and approvalList*//
router.get("/tasklist", verifyToken, getTaskList);

router.get("/response", verifyToken, responselList);

//* add task *//
router.post("/add", verifyToken, addTask);

// * get result *//
router.post("/result", verifyToken, result);

export default router;
