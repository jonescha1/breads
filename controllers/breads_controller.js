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
  res.send(Bread[req.params.arrayIndex]);
});

module.exports = breads;
