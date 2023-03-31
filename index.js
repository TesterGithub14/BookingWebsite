import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw error;
  }
};

app.use("/auth", authRoute);

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!");
});
