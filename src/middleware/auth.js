const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json("No token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next(); // ✅ correct place
  } catch (error) {
    res.status(401).json("Invalid token");
  }
};