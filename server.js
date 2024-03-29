// DEPENDENCIES
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const chalk = require("chalk");

// CONFIGURATION
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000; // Port variable that is retrieved from the .env file.
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(
      chalk.blueBright.bgWhiteBright.bold("connected to mongo: "),
      chalk.blueBright(process.env.MONGO_URI)
    );
  }
);

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

// BAKERS ROUTE
const bakersController = require("./controllers/bakers_controller.js");
app.use("/bakers", bakersController);

// 404 PAGE
app.get("*", (req, res) => {
  res.send("404");
});

// Listen
app.listen(PORT, () => {
  console.log(chalk.bold.magentaBright(`Server started on Port: ${PORT}`));
});
