import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongoose.js";
import todoRouter from "./routes/todoRoute.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.FRONTEND,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

app.use(express.json());
app.use("/todo", todoRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("welcome to Home Page");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
