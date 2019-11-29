require('dotenv').config();
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log('header', authHeader)
  const token = authHeader && authHeader.split(' ')[1];
  console.log('token ----> ' + token)
  if (token == null) return req.user = null;

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) req.user = null;

    req.user = user;
    next();
  })
};

module.exports =  { authenticateToken } ;