const express = require("express");
const stripeRouter = express.Router();
const { createPayment } = require("../controllers/stripe");

stripeRouter.post("/successfull", createPayment);

module.exports = stripeRouter;
