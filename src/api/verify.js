var jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens
var config = require("./config"); // get our config file

/**
 * This function is used to check the x-access-token and extract the 2 identifier
 * from it.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function verifyToken(req, res, next) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(403).send({auth: false, message: "No token provided."});

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err)
      return res
        .status(401)
        .send({auth: false, message: "Failed to authenticate token."});

    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
  });
}

module.exports = verifyToken;
