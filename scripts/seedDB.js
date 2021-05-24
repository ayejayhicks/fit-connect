const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitconnect"
);

const eventSeed = [
  {
    eventName: "Roll Out",
    typeOfEvent: "Biking",
    participants: "5",
    descriptionOfEvent: "Lock yourself for 2 hours ",
    city: "Cumming",
    level: "Intermediate",
    date: "2021-06-20T04:00:00.000+00:00",
    time: "6AM",
    duration: "2h",
    eventLocation: "122 red lane, Cumming, GA"
  },
  {
    eventName: "Lets DO IT",
    typeOfEvent: "Hiking",
    participants: "10",
    descriptionOfEvent: "All day long ",
    city: "Atlanta",
    level: "Advanced",
    date: "2021-06-10T04:00:00.000+00:00",
    time: "10AM",
    duration: "6h",
    eventLocation: "321 blue lane, Atlanta, GA"
  },
  {
    eventName: "Strength training",
    typeOfEvent: "Yoga",
    participants: "8",
    descriptionOfEvent: "Lock yourself for 2 hours ",
    city: "Sandy Spring",
    level: "Beginner",
    date: "2021-07-25T04:00:00.000+00:00",
    time: "7AM",
    duration: "2h",
    eventLocation: "1212 robin lane, Sandy Spring, CA"
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
