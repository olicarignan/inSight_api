const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
<<<<<<< HEAD
module.exports = ({getUsers, addUser, getUsersLogin}) => {
=======
module.exports = ({getUsersLogin, addUser}) => {
>>>>>>> 0b9e95011cdc160a5d8ffa99f7b733b5dd5353c1
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