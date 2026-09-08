const express = require("express");
const mongoose = require("mongoose");


const userRoute = require("./userRoutes.js");

mongoose
  .connect("mongodb://localhost:27017/myDatabase")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});