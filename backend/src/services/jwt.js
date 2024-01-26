const jwt = require("jsonwebtoken");

const tables = require("../tables");

const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Token non fournie" });
  }

  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    req.user = await tables.user.readUserById(decoded.id);
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalide" });
  }
};

module.exports = {
  verifyToken,
};
