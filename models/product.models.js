const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter product name"]

    },
    quanitity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    },
}, { Timestamps: true });

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;