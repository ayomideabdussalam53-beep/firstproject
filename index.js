require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const userRoute = require("./route/userRoutes.js");
const productRoute = require("./route/productRoute.js");

const app = express();
const port = process.env.PORT || 3000;
const atlasString = process.env.ATLAS_STRING || process.env.COMPASS_STRING;

if (!atlasString) {
  console.error("Missing MongoDB connection string in .env");
  process.exit(1);
}

mongoose
  .connect(atlasString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});