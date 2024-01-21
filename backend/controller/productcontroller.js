const productmodel = require('../models/productmodel');

// Get products API - /api/v1/products
exports.getproducts = async (req, res, next) => {
  try {
    const query = req.query.keyword?{ name :{
      $regex: req.query.keyword,
      $options:'i' //case insensitive
    }}:{}
    const products = await productmodel.find(query);
    res.json({
      success: true,
      products // Use a consistent key (e.g., 'data') for the response payload
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message, // Provide more details about the error
    });
  }
};

// Get Single product API - /api/v1/product/:id
exports.getsingleproduct = async (req, res, next) => {
  try {
      const product = await productmodel.findById(req.params.id);
      res.json({
          success: true,
          product
      })
  } catch (error) {
      res.status(404).json({
          success: false,
          message: 'Unable to get Product with that ID'
      })
  }
}