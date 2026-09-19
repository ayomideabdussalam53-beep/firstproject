//import "dotenv/config";
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


const userRoute = require("./userRoutes.js");
const compassString = process.env.COMPASS_STRING;
const atlasString = process.env.ATLAS_STRING;
const productRoute = require("./productRoute.js");
mongoose
  .connect(atlasString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//mongodb+srv://ayomideabdussalam53_db_user:<db_password>@cluster0.tnstjtp.mongodb.net/?appName=Cluster0
//const compassString = "mongodb://localhost:27017/myDatabase"
//const atlasString = "mongodb+srv://ayomideabdussalam53_db_user:ajisafe@cluster0.tnstjtp.mongodb.net/?appName=Cluster0"