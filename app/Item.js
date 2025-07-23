const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  quantity: { type: Number, default: 1 },
  price: { type: Number, default: 0 },
  category: { type: String, default: 'general' },
  createdAt: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Item', itemSchema);
