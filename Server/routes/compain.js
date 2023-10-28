const express = require("express");
const compainRouter = express.Router();
const {
  createCompain,
  editCompain,
  deleteCompain,
  getCompain,
  getCompains,
  contributeToCompain,
  myContributions,
} = require("../controllers/compain");

compainRouter.post("/createCompain", createCompain);
compainRouter.put("/editCompain/:id", editCompain);
compainRouter.delete("/deleteCompain/:id", deleteCompain);
compainRouter.get("/getCompain/:id", getCompain);
compainRouter.get("/getCompains", getCompains);
compainRouter.put("/contributeToCompain", contributeToCompain);
compainRouter.get("/myContributions/:id", myContributions);

module.exports = compainRouter;
