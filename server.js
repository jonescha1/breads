// DEPENDENCIES
const express = require("express");
const chalk = require("chalk");

// CONFIGURATION
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000; // Port variable that in retrieved from the .env file.

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an App about Breads!");
});

// Listen
app.listen(PORT, () => {
  console.log(chalk.bold.magentaBright(`Server started on Port: ${PORT}`));
});
