const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const EventSchema = new Schema({
  // TODO: Update this to have the necessary fields that make of an "Event"
  eventName: {
    type: String,
    trim: true,
  }, 
  eventType: {
    type: String,
    trim: true,
    enum: ['Run', '5k', 'Hiking', 'Hiit', 'Yoga', 'Biking', 'Strength Training'],
    required: true
  },
  typeOfEvent: {
    type: String,
    trim: true,
    enum: ['Yoga', 'Hiking', 'Running', 'MountainBiking', 'Biking', 'WeightLifting', 'GymClass', 'Walk'],
    required: true
  },
  descriptionOfEvent: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  time: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  duration: {
    type: String,
    trim: true,
    required: true
  },
  participants: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  eventLocation: {
    type: String,
    trim: true,
    required: true
  },
  city: {
    type: String,
    trim: true,
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
