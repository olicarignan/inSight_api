require('dotenv').config();
const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

//get users route
module.exports = ({authenticateToken}) => {
  router.get('/',authenticateToken, (req, res ) => {
    if (!req.user) {
      
    } else {
      res.json(req.user)
    } 

  })

  return router;
}
