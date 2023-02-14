import express from "express";
import { login, adminLogin, register } from "../Controllers/auth.js";

const router = express.Router();

// * User login & registration *//
router.post("/login", login);
router.post("/register", register);

// * Admin login & registration *//
router.post("/adminlogin", adminLogin);

export default router;
