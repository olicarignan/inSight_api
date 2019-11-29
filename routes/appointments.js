const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getAppointments, addAppointment }) => {

  router.get('/:user_id', function(req, res, next) {
    getAppointments(req.params.user_id)
      .then(result => { 
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.post('/', function(req, res) {
    addAppointment(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(error => {
        console.log(error)
      })
  })
  
  return router;
};