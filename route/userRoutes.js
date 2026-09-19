const express = require("express");

const {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  loginUser
} = require("../controller/UserController.js");

const userRoute = express.Router();

userRoute.post("/new-user", createUser);
userRoute.get("/getall-users", getAllUsers);
userRoute.get("/get-one-user/:id", getSingleUser);
userRoute.put("/update-user/:id", updateUser);
userRoute.delete("/delete-user/:id", deleteUser);
userRoute.get("/login", loginUser);

module.exports = userRoute;