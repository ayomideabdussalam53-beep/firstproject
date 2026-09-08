const express = require("express");

const userRoute = express.Router();
const { createUser , deleteUser , getAllUsers, getSingleUser ,updateUser , }= require("../controller/UserController.js");


userRoute.post("/new-user", createUser);
userRoute.get("/getall-users", getAllUsers);
userRoute.get("/get-one-user/:id", getSingleUser);
userRoute.put("/update-user/:id", updateUser);
userRoute.delete("/delete-user/:id", deleteUser);


module.exports = userRoute;