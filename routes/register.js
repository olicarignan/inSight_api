const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

module.exports = ({ addUser }) => {
  router.post('/', (req, res, next) => {
    addUser(req.body)
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