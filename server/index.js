import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongoose.js";
import router from "./routes/todoRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.use("/todo", router);

app.get("/", (req, res) => {
  res.send("welcome to Home Page");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
