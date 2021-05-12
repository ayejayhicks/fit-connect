const express = require('express');
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./routes");
const app = express();
const port = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Add routes, both API and view
app.use("/api",routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitconnect',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the API server
app.listen(port, () => console.log(`Listening on port ${port}`));