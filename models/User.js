const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const UserSchema = new Schema({
  name: {
    type: String,
    trim: true
  }
}, opts);

const User = mongoose.model("User", UserSchema);

module.exports = User;
