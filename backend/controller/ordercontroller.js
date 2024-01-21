const ordermodel = require('../models/ordermodel');
const productmodel = require('../models/productmodel');

// Create order API: api/v1/order
exports.createorder = async (req, res, next) => {
    // Extract cart items from the request body
    const cartitems = req.body;

    // Calculate the total order amount
    const amount = Number(cartitems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);

    // Set the initial order status to 'pending'
    const status = 'pending';

    // Create a new order in the database
    const order = await ordermodel.create({ cartitems, amount, status });

    // Update product stock based on the items in the order
    cartitems.forEach(async (item) => {
        // Find the product in the database based on its ID
        const product = await productmodel.findById(item.product._id);

        // Update the product stock by reducing the quantity ordered
        product.stock = product.stock - item.qty;

        // Save the updated product information
        await product.save();
    });

    // Respond with a JSON object indicating the success and the created order
    res.json({
        success: true,
        order,
    });
};
