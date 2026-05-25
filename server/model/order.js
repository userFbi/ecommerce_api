// Model (models/Product.js)
// name (String)
// description (Text)
// price (Number)
// category (String)
// stock (Number)
// image (URL/String)

const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    userId: String,
    orderId: String,
    productId: String,
    quantity: Number,
});

module.exports = mongoose.model('Order', orderSchema);