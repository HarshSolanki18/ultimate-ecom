import express from "express";
const router = express.Router();
import {
  getProducts,
  createProduct,
} from "../controllers/productController.js";

//fetch all products
// GET /api/products
// public
router.route("/").get(getProducts).post(createProduct);


export default router;
