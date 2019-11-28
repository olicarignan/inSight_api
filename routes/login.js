const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');
const bcrypt = require('bcrypt')

//get users route
module.exports = ({getUsersLogin, addUser}) => {

  const login = function(email, password) {
     return getUsersLogin(email)
      .then(user => {
        if(bcrypt.compareSync(password, user[0].password)) {
          return true;
        }
        return null;
      })
  }

  router.post('/', (req, res, next) => {
    const { email, password } = req.body;
    
    login(email, password)
    .then(user => {
      if (user === null) {
        return
      } else {
      console.log(user, "it worked backend")
      res.json(user)
      .status(200);
      }
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