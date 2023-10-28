const express = require("express");
const userRouter = express.Router();
const { signup } = require("../controllers/user");
const { getUser } = require("../controllers/user");



userRouter.get("/getUsers", getUser);

userRouter.post("/", signup);






module.exports = userRouter;
