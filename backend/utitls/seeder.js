import mongoose from "mongoose";
import PRODUCT from "../model/product.js";
import { products } from "./data.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("connect database successfully");
});

const seedProducts = async () => {
  try {
    await PRODUCT.deleteMany();
    console.log("Product deleted");
    await PRODUCT.insertMany(products);
    console.log("Product added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
