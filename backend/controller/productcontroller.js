const productmodel = require('../models/productmodel');

// Get products API - /api/v1/products
exports.getproducts = async (req, res, next) => {
  try {
    // Prepare a query to filter products based on a keyword (if provided)
    const query = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: 'i' } } // Case-insensitive regex search
      : {};

    // Fetch products from the database based on the prepared query
    const products = await productmodel.find(query);

    // Respond with a JSON object containing the retrieved products
    res.json({
      success: true,
      data: products, // Use a consistent key (e.g., 'data') for the response payload
    });
  } catch (error) {
    // Handle internal server error and provide more details about the error
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
    // Fetch a single product from the database based on the provided ID
    const product = await productmodel.findById(req.params.id);

    // Respond with a JSON object containing the retrieved product
    res.json({
      success: true,
      data: product, // Use a consistent key (e.g., 'data') for the response payload
    });
  } catch (error) {
    // Handle the case where the product with the given ID is not found
    res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }
};
