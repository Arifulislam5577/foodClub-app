import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: [{ title: { type: String }, value: { type: String } }],
  url: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const PRODUCT = mongoose.model("Product", productSchema);

export default PRODUCT;
