const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/user");
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e));
app.listen(8000, () => "server is ready");
app.use(express.json())
app.use("/user", userRouter);
