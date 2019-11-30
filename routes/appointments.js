const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getAppointments, addAppointment, updateAppointment, deleteAppointment }) => {

  router.get('/:user_id', function(req, res, next) {
    getAppointments(req.params.user_id)
      .then(result => { 
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.post('/:user_id', function(req, res) {
    console.log('router', req.params.user_id)
    addAppointment(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(error => {
        console.log(error)
      })
  })

  router.put('/:appointment_id', function (req, res) {
    updateAppointment(req.params.appointment_id)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  router.delete('/:user_id', function (req, res) {
    deleteAppointment(req.params.appointment_id)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  

  
  return router;
}