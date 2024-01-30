const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});
app.use((req, res, next) => {
  res.send("Hi from express!");
});

app.listen(4040);


module.exports = app;