// DEPENDENCIES
const express = require("express");
const chalk = require("chalk");

// CONFIGURATION
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000; // Port variable that in retrieved from the .env file.

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an App about Breads!");
});

// Breads
const breadsController = require("./controllers/breads_controller");
app.use("/breads", breadsController);

// Listen
app.listen(PORT, () => {
  console.log(
    chalk.bold.bgWhiteBright.magentaBright(`Server started on Port: ${PORT}`)
  );
});
