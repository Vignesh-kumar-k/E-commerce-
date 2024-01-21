const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectdatabase = require('./config/connectdatabase');

// Load environment variables from config.env file
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Import routes
const products = require('./routes/product');
const orders = require('./routes/order');

// Connect to the database
connectdatabase();

// Use JSON parsing middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Define routes for products and orders
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});

/** code sets up an Express server with CORS enabled, connects to a database, and defines routes for handling products and orders. 
 * You are using Express to create a server.
Environment variables are loaded from the config.env file using dotenv.
The connectdatabase function is called to establish a connection to the database.
CORS middleware is used to enable Cross-Origin Resource Sharing for all routes.
Routes for products and orders are defined using the imported modules.
The server starts listening on the specified port from the environment variables.
 */