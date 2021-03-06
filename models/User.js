const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  city: {
    type: String
  },
  zipCode: {
    type: String
  },
  emergencyContact: {
    type: String
  },
  phoneNumberOfEmergency: {
    type: String
  },
  fitnessLevel: {
    type: String
  },
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
}, opts);

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    console.log("Save Hook invoked");
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
