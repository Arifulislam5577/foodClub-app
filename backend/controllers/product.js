import PRODUCT from "../model/product.js";
import expressAsyncHandler from "express-async-handler";

export const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await PRODUCT.find({});
  if (products.length > 0) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export const getProduct = expressAsyncHandler(async (req, res) => {
  const product = await PRODUCT.findById({ _id: req.params.id });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
