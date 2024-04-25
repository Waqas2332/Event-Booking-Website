import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import eventRoutes from "./routes/eventRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/auth", userRoutes);

app.listen(5000, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log(err));
});
