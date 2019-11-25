const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
module.exports = ({getNotes}) => {
  router.get('/', function(req, res, next) {
    
    getNotes()
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  return router;
};