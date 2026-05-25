// userId: (Reference to User ID) - Ensures every user has their own unique cart.
// items: An array of objects containing:
// productId: (Reference to Product ID).
// quantity: (Number) - How many of this item they want.
// bill: (Number) - The total price of all items currently in the cart.

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: String,
    productId: String,
    quantity: Number,
    bill: Number,
});

module.exports = mongoose.model('Cart', cartSchema);

