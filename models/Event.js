const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const EventSchema = new Schema({
  // TODO: Update this to have the necessary fields that make of an "Event"
  eventType: {
    type: String,
    trim: true,
    enum: ['run', '5k', 'hit', 'yoga', 'biking', 'strength training'],
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
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true
  },
  enrollmentCapacity: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  }
}, opts);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
