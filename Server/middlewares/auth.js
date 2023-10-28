const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const signToken = (userId, role) => {
  return jwt.sign({ userId, role }, process.env.jwtSecret, {
    expiresIn: process.env.jwtExpires,
  });
};

const verifToken = (token) => {
  return jwt.verify(token, process.env.jwtSecret);
};
// export default (req, res, next) => {
//   const authHeader = req.get("Authorization");
//   if (!authHeader) {
//     req.isAuth = false;
//     return next();
//   }
//   const token = authHeader.split(" ")[1];
//   log.info("Token", token);
//   if (!token || token === "") {
//     req.isAuth = false;
//     return next();
//   }
//   req.token = token;
//   req.isAuth = true;
//   return next();
// };

const authMiddleWare = (req, res, next) => {
  const authHeader = req.get("Authorization");
  const publicKey = req.get("publicKey");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  req.token = token;
  req.isAuth = true;
  req.publicKey = publicKey;
  return next();
};

const getUserFromToken = async (token) => {
  const decoded = verifToken(token);
  const currentUser = await User.findById(decoded?.userId).lean();
  return currentUser;
};

const checkAuthAndResolve = async (context, controller) => {
  try {
    const decoded = verifToken(context.token);
    const currentUser = await User.findById(decoded?.userId);
    if (!currentUser) {
      throw new AuthenticationError(
        "The user belonging to this token does no longer exist."
      );
    }

    if (currentUser.changedPasswordAfter(decoded?.iat)) {
      throw new AuthenticationError(
        "User recently changed password! Please log in again."
      );
    }
    return controller.apply({ name: "eggmed" }, [
      {
        data: decoded,
        user: currentUser,
      },
    ]);
  } catch (error) {
    log.info(error);
    return error;
  }
};

const checkScopesAndResolve = (
  context,
  expectedScopes,
  controller,
  ...params
) => {
  const token = context.headers.authorization;
  if (!token) {
    throw new AuthenticationError(`You must supply a JWT for authorization!`);
  }
  const decoded = jwt.verify(
    token.replace("Bearer ", ""),
    process.env.JWT_SECRET
  );
  const scopes = decoded.scope;
  if (!scopes) {
    throw new AuthenticationError("No scopes supplied!");
  }
  if (scopes && expectedScopes.some((scope) => scopes.indexOf(scope) !== -1)) {
    return controller(params);
  } else {
    throw new AuthenticationError(
      `You are not authorized. Expected scopes: ${expectedScopes.join(", ")}`
    );
  }
};

module.exports = {
  checkScopesAndResolve,
  checkAuthAndResolve,
  signToken,
  verifToken,
  authMiddleWare,
  getUserFromToken,
};
