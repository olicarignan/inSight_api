const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');
const bcrypt = require('bcrypt')

module.exports = ({ addUser }) => {
  router.post('/', (req, res, next) => {
    
    const user = req.body
    user.password = bcrypt.hashSync(user.password, 10)
    addUser(user)
      .then(user => {
        if(!user) {
          res.send({error: 'error'});
        }
        req.send('logged in')
      })
      .catch(e => res.send(e));
  })

  
  return router;
};