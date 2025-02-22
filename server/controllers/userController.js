import User from "../models/userModel.js";
import { z } from "zod";
import bcrypt from "bcrypt";

const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  username: z
    .string()
    .min(3, { message: "Username atleast 3 characters long" }),
  password: z
    .string()
    .min(6, { message: "password atleast 6 characters long" }),
});

// Register endpoint --------------

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).josn({ message: "All fields are required" });
    }
    const validation = userSchema.safeParse({ email, username, password });
    if (!validation.success) {
      const errorMessage = validation.error.errors.map((err) => err.message);
      return res.status(400).json({ errors: errorMessage });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, username, password: hashPassword });
    await newUser.save();

    if (newUser) {
      return res
        .status(200)
        .json({ message: "user regestered successfully", newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error registering user" });
  }
};

// Login endpoint --------------

export const login = async (req, res) => {
  console.log("login");
};

// Logout endpoint --------------

export const logout = async (req, res) => {
  console.log("logout");
};
