import Product from "../models/ProductModel.js";

//fetch all products
// GET /api/products
// public

export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
    console.log("product created");
  }catch(err){
    res.status(404).json({err:"Product Not Created"+err.message});
  
    next(new Error("Product Not Created "+err.message));
  }
};
