const jsonwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jsonwt.verify(token, "gii_development_secret_key");
    req.userData = { email: decodedToken.email, userId: decodedToken.userId};
    next();
  } catch (error) {
    res.status(401).json({
      alert: "Invalid token. Authentication failed!"
    });
  }
};
