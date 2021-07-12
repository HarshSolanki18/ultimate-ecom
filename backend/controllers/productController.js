import Product from "../models/ProductModel.js";

//fetch all products
// GET /api/products
// public

export const getProducts=async(req,res)=>{
    const products = await Product.find({});
    res.json(products);
}




// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  console.log(req.body)  
  const product = new Product(req.body);

  console.log(product);

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
}
