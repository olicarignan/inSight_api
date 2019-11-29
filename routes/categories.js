const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getCategories }) => {

  router.get('/:user_id', function(req, res, next) {
    getCategories(req.params.user_id)
      .then(result => { 
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  return router;
};