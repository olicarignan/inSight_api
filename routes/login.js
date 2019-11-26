const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
module.exports = ({getUsers, addUser}) => {
  router.post('/', (req, res, next) => {
    getUsersLogin(req.body.email, req.body.password)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log(error);
    });
});
  
  // router.get('/', (req, res, next) => { 
  //   getUsersLogin(req.body.email, req.body.password)
  //     .then(result => {
  //       res.json(result);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // });
  
  return router;
};