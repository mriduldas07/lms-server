const jwt = require("jsonwebtoken");
const { User } = require("../app/user/user.model");

module.exports.createToken = (user) => {
  const token = jwt.sign(
    {
      user,
    },
    "lmsportal",
    {
      expiresIn: "7d",
    }
  );
  let role = null;
  if (user.role) {
    role = user.role;
  }
  const response = {
    token,
    role,
  };
  return response;
};

module.exports.auth =
  (...requiredRoles) =>
  async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json("You are not authorized");
      }
      let verifiedUser = null;
      verifiedUser = jwt.verify(token, "lmsportal");

      if (
        requiredRoles.length &&
        !requiredRoles.includes(verifiedUser.user.role)
      ) {
        return res.status(400).json("You are not authorized");
      }

      req.user = verifiedUser;

      next();
    } catch (error) {}
  };
