const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("about");
});
app.get("/resume", function (req, res) {
  res.render("resume");
});
app.get("/works", function (req, res) {
  res.render("works");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
module.exports = app;
