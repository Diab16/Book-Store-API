const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

// Verify Token
function verifyToken(req, res, next) {
  const token = req.headers.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      next();
    } catch {
      res.status(401).json({ message: "invalid token" });
    }
  } else {
    res.status(401).json({ message: "no token provided" });
  }
}

// Verify Token & Authorize the user
function verifyTokenAndAuthorization(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.isAdmin || req.user.id === req.params.id) {
      next();
    } else {
      return res.status(403).json({
        message: "You are not allowed",
      });
    }
  });
}

// Verify Token & Admin
function verifyTokenAndAdmin(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({
        message: "You are not allowed , only Admin allowed",
      });
    }
  });
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
