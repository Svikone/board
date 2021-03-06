const jwt = require('jsonwebtoken');

module.exports = function(req,res,next) {
  // const cookie_token = req.cookies.token;
  const json_token = req.headers["x-access-token"];
  if (!json_token)
    return res.status(404).send({message:"Not access token"});
  console.log(json_token);
  jwt.verify(json_token, 'secretkey', (err, decoded) => {
    if (err)
      return res.status(500).send({ auth: false, message: "Failed to authenticate token." });
    req.user = decoded;
    next();
  })
}