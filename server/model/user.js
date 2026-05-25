// Model (models/User.js)
// username (String)
// email (String, Unique)
// password (Hashed)
// role (String: "user" or "admin")

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: String,
    email: String,
    password: String,
    role: String,
});

module.exports = mongoose.model('User', userSchema);