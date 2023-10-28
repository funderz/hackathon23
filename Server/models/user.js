const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    password: String,
    role: {
      type: String,
      enum: ["contributor", "projectOwner"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
