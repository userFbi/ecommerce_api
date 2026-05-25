const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    userId: String,
    categoryName: String,
    categoryImage: String
})

module.exports = mongoose.model('Category', categorySchema); 