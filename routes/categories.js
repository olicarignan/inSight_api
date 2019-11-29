const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getCategories, addCategories, updateCategory }) => {

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

  router.post('/', (req, res, next) => {
    const category = req.body;
    addCategories(category)
      .then(() => {
        if(!category) {
          res.send({error: 'error'});
        }
        res.send('got it')
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
  
  
  
  return router;
};