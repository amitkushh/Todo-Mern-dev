import User from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already registered" });
    }

    const newUser = new User({ email, username, password });
    await newUser.save();

    if (newUser) {
      return res.status(200).json({ message: "user regestered successfully", newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error registering user" });
  }
};

export const login = async (req, res) => {
  console.log("login");
};

export const logout = async (req, res) => {
  console.log("logout");
};
