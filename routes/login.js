const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');
const bcrypt = require('bcrypt')

//get users route
module.exports = ({ getUsersLogin }) => {

  const login = function(email, password) {
     return getUsersLogin(email)
      .then(user => {
        if(bcrypt.compareSync(password, user[0].password)) {
          return true;
        } else {
        return null
        }
      })
  }

  router.post('/', (req, res, next) => {
    const { email, password } = req.body;
    
    login(email, password)
    .then(user => {
      if (user === null) {
        res.json(null)
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
  return router;
};