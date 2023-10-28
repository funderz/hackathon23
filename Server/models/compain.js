const mongoose = require("mongoose");

const compainSchema = mongoose.Schema({
  name: String,
  picture: String,
  description: String,
  neededPrice: Number,
  currentPrice: Number,
  type: { type: String, enum: ["service", "money"] },
  endDate: Date,
  contributors: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
},{
    timestamps: true,
  });
module.exports = mongoose.model("Compain", compainSchema);
