require('dotenv').config();
const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports = ({ addUser }) => {
  router.post('/', (req, res, next) => {
    const user = req.body
    user.password = bcrypt.hashSync(user.password, 10)
    addUser(user)
      .then(user => {
        const newUser = user[0];
        console.log(user[0])
        if(!newUser) {
          throw new Error('error')
        }
        jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
          res.json({newUser, token})
          .status(200);
        });
      })
      .catch(e => res.send(e));
  })

  
  return router;
};