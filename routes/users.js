const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
module.exports = ({getUsers}) => {
  router.get('/', function(req, res, next) {
    
    getUsers()
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  return router;
};