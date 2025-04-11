const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  spotifyUserId: { type: String, required: true }, 
  name: { type: String, required: true },
  artist: { type: String, required: true },
  advice: { type: String }, 
  trackId:{type:String},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Track', trackSchema);