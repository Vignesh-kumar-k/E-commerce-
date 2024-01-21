const express = require('express');
const { getproducts, getsingleproduct } = require('../controller/productcontroller');
const router = express.Router();

// Define a route for getting all products
router.route('/products').get(getproducts);

// Define a route for getting a single product by ID
router.route('/products/:id').get(getsingleproduct);

module.exports = router;

/** Using Express to create a router.
The router is configured with two routes:
/products: Handles GET requests to fetch all products using the getproducts function from the 'productcontroller' module.
/products/:id: Handles GET requests to fetch a single product by ID using the getsingleproduct function from the 'productcontroller' module.
The module exports the configured router to be used in your main application.
This setup allows you to organize and manage product-related routes in a modular way */