const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userId: String,
    productName: String,
    productPrice: Number,
    category: String,
    stock: Number,
    discountPrice: Number
});

module.exports = mongoose.model("Product", productSchema);