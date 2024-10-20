// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true }, // Phone number as the primary identifier
  createdAt: { type: Date, default: Date.now }, // Timestamp field
}, { timestamps: true });

module.exports = mongoose.model('Auth', userSchema, 'auth');
