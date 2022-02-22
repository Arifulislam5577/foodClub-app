import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productRouter);

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("connect database successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    "listening on port " + PORT + " on " + process.env.NODE_ENV + " mode"
  );
});
