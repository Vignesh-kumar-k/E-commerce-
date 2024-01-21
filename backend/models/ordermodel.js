const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
     cartitems:Array,
     amount:String,
     status:String,
     createdat:Date
})
const ordermodel = mongoose.model('order',orderSchema);

module.exports = ordermodel;