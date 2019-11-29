const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getCategories, addCategories, updateCategory, deleteCategory}) => {

  router.get('/:user_id', function(req, res, next) {
    getCategories(req.params.user_id)
      .then(result => { 
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.post('/:user_id', (req, res, next) => {
    console.log(req.body)
    const category = req.body;
    addCategories(category)
      .then((result) => {
        if(!category) {
          res.send({error: 'error'});
        }
        res.json(result)
      })
      .catch(e => res.send(e));
  })

  router.put('/', function (req, res) {
    updateCategory(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })

  router.delete('/', function (req, res) {
    deleteCategory(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  
  
  
  return router;
};