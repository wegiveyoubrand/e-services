// call required modules
const express = require("express");

const ejs = require("ejs");

const PORT = process.env.PORT || 3000;

// set to use
const app = express("");
app.use(express.static("public"));

app.set("view engine", "ejs");

// listen to port
app.listen(PORT);
// routing
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

app.get("/dashboard", function (req, res) {
  res.render("dashboard", { title: "Dashboard" });
});
