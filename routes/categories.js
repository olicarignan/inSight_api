const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getCategories }) => {

  router.get('/', function(req, res, next) {
    console.log('categories', req.body)
    getCategories()
      .then(result => { 
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  return router;
};