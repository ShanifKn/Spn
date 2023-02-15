import express from "express";
import { answerReq, getTaskList } from "../Controllers/student.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// * get pending tasks list *//
router.get("/", verifyToken, getTaskList);

// * answer *//
router.post("/answer", verifyToken, answerReq);

export default router;
