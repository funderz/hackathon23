const express = require("express");
const userRouter = express.Router();
const { signup, getUser } = require("../controllers/user");

userRouter.get("/:id", getUser);

userRouter.post("/signup", signup);

module.exports = userRouter;
