// user (Reference to User ID)
// products: [Array of Product IDs and quantities]
// totalAmount (Number)
// status (String: "Pending", "Shipped", "Delivered")
// address (String)

const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    userId: String,
    product_name: String,
    price: Number,
    category: String,
    stock: Number,
})

module.exports = mongoose.model('Order', orderSchema);