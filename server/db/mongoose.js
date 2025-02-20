import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Database connected successfully");
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("failed to connect database");
    process.exit(1);
  }
};

export default connectDB;
