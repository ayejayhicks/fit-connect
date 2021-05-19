const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitconnect"
);

const eventSeed = [
  {
    eventType: "Biking",
    enrollmentCapacity: "5",
    city: "Cumming",
    fitnessLevel: "Beginner",
    date: "2021-06-19T13:04:00",
    location: "122 red lane, Cumming, GA"
  },
  {
    eventType: "Hiking",
    enrollmentCapacity: "10",
    city: "Atlanta",
    fitnessLevel: "Intermediate",
    date: "2021-06-19T13:04:00",
    location: "321 blue lane, Atlanta, GA"
  },
  {
    eventType: "Yoga",
    enrollmentCapacity: "9",
    city: "Sandy Spring",
    fitnessLevel: "Advanced",
    date: "2021-06-19T13:04:00",
    location: "1212 robin lane, Sandy Spring, CA"
  },
  {
    eventType: "Strength training",
    enrollmentCapacity: "6",
    city: "New York",
    fitnessLevel: "Beginner",
    date: "2021-06-19T13:04:00",
    location: "4124 ivy lane, New York, GA"
  },
  {
    eventType: "Run",
    enrollmentCapacity: "5",
    city: "Chicago",
    fitnessLevel: "Beginner",
    date: "2021-06-19T13:04:00",
    location: "1234 bluejay lane, Chicago, GA"
  },
];

db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
