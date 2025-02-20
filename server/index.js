import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongoose.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.get("/", (req, res) => {
  res.send("welcome to Home Page");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
