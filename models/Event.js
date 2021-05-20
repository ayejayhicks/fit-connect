const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const EventSchema = new Schema({
  eventType: {
    type: String,
    trim: true,
    enum: ['Run', '5k', 'Hiking', 'Hiit', 'Yoga', 'Biking', 'Strength Training'],
    required: true
  },
  city: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  fitnessLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  enrollmentCapacity: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  location: {
    type:String,
    trim: true
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, opts);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
