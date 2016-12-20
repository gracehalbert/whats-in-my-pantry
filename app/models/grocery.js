var mongoose = require('mongoose');

module.exports = mongoose.model('Grocery', {
  text: String,
  size: Number,
  quantity: Number,
  puchase: Date,
  expiration: Date
});
