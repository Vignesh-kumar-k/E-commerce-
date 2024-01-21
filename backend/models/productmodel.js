const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numofreviews:String,
    createdat:Date
});

const productmodel= mongoose.model('product',productschema);
module.exports = productmodel;
