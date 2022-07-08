// DEPENDENCIES
const express = require("express");
const methodOverride = require("method-override");
const chalk = require("chalk");

// CONFIGURATION
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000; // Port variable that is retrieved from the .env file.

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an App about Breads!");
});

// BREADS ROUTE
const breadsController = require("./controllers/breads_controller");
app.use("/breads", breadsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.send("404");
});

// Listen
app.listen(PORT, () => {
  console.log(
    chalk.bold.bgWhiteBright.magentaBright(`Server started on Port: ${PORT}`)
  );
});
