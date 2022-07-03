// DEPENDENCIES
const express = require("express");
const Bread = require("../models/bread");

// CONFIGURATION
const breads = express.Router();

// INDEX
breads.get("/", (req, res) => {
  res.render("index", {
    breads: Bread,
    title: "Index Page",
  });
});

// SHOW
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: Bread[req.params.arrayIndex],
    });
  } else {
    res.render("404");
  }
});

module.exports = breads;
