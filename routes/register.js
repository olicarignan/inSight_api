require("dotenv").config();
const express = require("express");
const router = express.Router();
const { getApiResults } = require("../helpers/apiHelpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = ({ addUser }) => {
  router.post("/", (req, res, next) => {
    console.log(req.body);
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    addUser(user)
      .then(user => {
        console.log(user);
        if (!user) {
          throw new Error("error");
        }
        jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
          // window.localStorage.setItem({token})
          // res.send({token})
          res.json({ user, token }).status(204);
        });
        // res.json(user[0]);
      })
      .catch(e => res.send(e));
  });
  return router;
};
