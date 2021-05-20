const express = require('express');
const mongoose = require("mongoose");
const session = require('express-session');
const path = require("path");

const routes = require("./routes");
const { Console } = require('console');
var MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
const port = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitconnect',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

var store = new MongoDBStore(
  {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/fitconnect',
    collection: 'sessions'
  });
 
store.on('error', function(error) {
  if (error){
    console.log("Error occurred");
    console.log(error);
  }
});

app.use(session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(port, () => console.log(`Listening on port ${port}`));