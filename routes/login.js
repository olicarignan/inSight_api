const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
module.exports = ({ getUsersLogin }) => {
  router.post('/', (req, res, next) => {
    const {email, password} = req.body;
    getUsersLogin(email, password)
    .then(user => {
      res.json(user)
      .status(200);
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