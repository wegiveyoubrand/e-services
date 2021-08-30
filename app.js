// call required modules
const express = require("express");

const ejs = require("ejs");

// set to use
const app = express("");
app.use(express.static("public"));

app.set("view engine", "ejs");

// listen to port
app.listen(process.env.PORT || 3000);

// routing
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

app.get("/dashboard", function (req, res) {
  res.render("dashboard", { title: "Dashboard" });
});
