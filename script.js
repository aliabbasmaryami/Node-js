const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log("middleware chala abi");
  next();
});
app.use(function (req, res, next) {
  console.log("middleware ak ur bar chala chala abi");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello, world!");
});

app.get("/profile", function (req, res) {
  res.send("This is the profileee page changes.");
});

app.listen(3000);
