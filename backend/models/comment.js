const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  author: { type: String, required:true },
  strComment: {type: String, required:true },
  strIdEvent: {type: String, required:true},
  createAt: { type: Date, default: Date.now(), index: { expires: 172800 }},
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})


module.exports = mongoose.model('Comment', commentSchema);
