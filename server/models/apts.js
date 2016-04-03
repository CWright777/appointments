var mongoose = require('mongoose');

var AptsSchema = new mongoose.Schema({
  date: Date,
  time: String,
  user: String,
  complaint: String,
  created_at: { type: Date, default: Date.now }
})

var Apt = mongoose.model('Apt', AptsSchema);
