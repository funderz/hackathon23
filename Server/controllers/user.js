const User = require("../models/user");
const { signToken } = require("../middlewares/auth");

const signup = async (req, res) => {
  const { role } = req.body || {};
  const newUser = await User.create(req.body);
  const token = signToken(newUser?._id, role);
  res.send({
    user: newUser,
    token,
    tokenExpiration: "40 days",
  });
};
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.send("there is no user with that id");
  }
  res.send({ user });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return new Error("Please Provide email and password");
  }

  const userData = await User.findOne({ email }).select("+password +salt");
  if (!userData) {
    return new Error("Incorrect email or password");
  }
  let userInfo;
  let token;

  userInfo = await User.findById(userData._id);
  token = signToken(userData._id, userData?.role);

  //   const saltedPassword = userData.salt + password;
  //   const correct = await userData.correctPassword(
  //     saltedPassword,
  //     userData.password
  //   );
  //   if (!userData || !correct) {
  //     return new Error("Incorrect email or password");
  //   }

  res.send({
    user: userInfo,
    token,
    tokenExpiration: "18h",
  });
};

module.exports = {
  signup,
  getUser,
};
