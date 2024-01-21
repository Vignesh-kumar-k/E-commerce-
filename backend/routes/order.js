const express = require('express')
//const { post } = require('./product');
const router = express.Router();
const { createorder } = require('../controller/ordercontroller');

router.route('/order').post(createorder);

module.exports = router;