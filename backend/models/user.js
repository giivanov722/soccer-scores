const mongoose = require('mongoose');
const uniqueVal = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email:{ type: String, required: true, unique: true},
  password: { type: String, required: true},
  username: { type: String, required: true }
})

//gives error if if its tried a user to be saved with
// email that already exists
userSchema.plugin(uniqueVal);

module.exports = mongoose.model("User", userSchema);
