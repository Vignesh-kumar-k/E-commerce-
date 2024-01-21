const express = require('express');
const router = express.Router();
const { createorder } = require('../controller/ordercontroller');

// Define a route for creating orders
router.route('/order').post(createorder);

module.exports = router;

/* Using Express to create a router.
The router is configured to handle POST requests to the '/order' endpoint.
The route is associated with the createorder function from the 'ordercontroller' module.
This module exports the configured router to be used in your main application.
Make sure you have the necessary logic in the createorder function to handle order creation. */