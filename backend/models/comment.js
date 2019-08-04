const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  expire_at: {type: Date, default: Date.now, expires: 172800},
  author: { type: String, required:true },
  strComment: {type: String, required:true },
  strIdEvent: {type: String, required:true}
});

module.exports = mongoose.model('Comment', commentSchema);
