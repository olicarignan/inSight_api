const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
module.exports = ({getUsers, addUser}) => {
  router.post('/', (req, res, next) => {
    addUser(req.body)
    
    // .then(res => res.rows[0])
      .then(user => {
        if(!user) {
          res.send({error: 'error'});
        }
        req.send('logged in')
      })
      .catch(e => res.send(e));
  })
  router.get('/', (req, res, next) => {
    
    getUsers(req.body.email, req.body.password)
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  return router;
};