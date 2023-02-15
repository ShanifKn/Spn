import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/User.js";
import adminModel from "../models/Task.js";

// * REGISTER USER    *//
export const register = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      userName,
      email,
      password: passwordHash,
      role,
    });
    await newUser.save();
    res.status(201).json({ success });
  } catch (err) {
    if (err.code === 11000) return res.status(500).json({ error: err.code });
    res.status(500).json({ error: "Server error" });
  }
};

// * LOGIN USER    *//
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });

    if (!user) return res.status(400).json({ error: "User does not exist." });
    if (!user.role === "student")
      return res.status(400).json({ error: "Authorization block" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // * prevent password *//
    let User = user.toObject();
    delete User.password;

    res.status(200).json({ token, User });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

// * Driver Login *//
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const admin = await userModel.findOne({ email: email });

    if (!admin) return res.status(400).json({ error: " Invalid credentials." });
    if (!admin.role === "master")
      return res.status(400).json({ error: "Authorization block" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ error: "Incorrect Password." });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);

    // * prevent password *//
    let Admin = admin.toObject();
    delete Admin.password;

    res.status(200).json({ token, Admin });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

// // * REGISTER ADMIN    *//
// export const registerAdmin = async (req, res) => {
//   try {
//     const { adminName, email, password } = req.body;

//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);
//     const newUser = new adminModel({
//       userName,
//       email,
//       password,
//     });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // * LOGIN ADMIN   *//
// export const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await adminModel.findOne({ email: email });
//     if (!user) return res.status(400).json({ msg: "User does not exist." });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//     res.status(200).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
