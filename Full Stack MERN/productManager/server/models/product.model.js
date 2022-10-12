const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minLength: [3, "Title must be at least 3 character long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [10, "Price must be at least 10 dollars"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [3, "Description must be at least 3 character long"]
    },
}, {timestamp:true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;