import express from "express";
import {
  login,
  // loginAdmin,
  register,
  // registerAdmin,
} from "../Controllers/auth.js";

const router = express.Router();

// * User login & registration *//
router.post("/login", login);
router.post("/register", register);

// * Admin login & registration *//
router.post("/adminlogin", loginAdmin);

export default router;
