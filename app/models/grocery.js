var mongoose = require('mongoose');

module.exports = mongoose.model('Grocery', {
  text: String,
  size: String,
  quantity: Number,
  purchase: Date,
  expiration: Date,
  user: String
});
