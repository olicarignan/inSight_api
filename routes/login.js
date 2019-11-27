require('dotenv').config();
const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const  authenticateToken  = require('../helpers/tokenHelper');

//get users route
module.exports = ({getUsersLogin, addUser}) => {


   
  const login = function(email, password) {
     return getUsersLogin(email)
      .then(user => {
        if(bcrypt.compareSync(password, user[0].password)) {
          return user[0];
        }
        return null;
      })
  }

  router.post('/', (req, res, next) => {
    const { email, password } = req.body;
    
    login(email, password)
    .then(user => {
      if (user === null) {
        res.json(null)
        return
      }
      jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        // window.localStorage.setItem({token})
        res.send({token})
        res.json({user,  token})
        .status(200);
      });
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