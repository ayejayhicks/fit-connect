const express = require('express');
const mongoose = require("mongoose");

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const routes = require("./routes");
const app = express();
const port = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(port, () => console.log(`Listening on port ${port}`));