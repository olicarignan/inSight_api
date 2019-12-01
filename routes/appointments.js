const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getAppointments, addAppointment, updateAppointmentTrue, updateAppointmentFalse, deleteAppointment, getAppointmentsById }) => {

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

  router.get('/:user_id/category/:category_id', function(req, res) {
    console.log(req.params.category_id)
    getAppointmentsById(req.params.category_id)
      .then(result => {
        console.log(result)
        res.json(result)
      })
      .catch(error => {
        console.log(error)
      })
  })

  router.put('/:user_id/category/:category_id/true', function (req, res) { 
    console.log(req.params.category_id)
    updateAppointmentFalse(req.params.category_id)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })

  router.put('/:user_id/category/:category_id/false', function (req, res) { 
    updateAppointmentTrue(req.params.category_id)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  router.delete('/:user_id/appointment/:appointment_id', function (req, res) {
    console.log(req.params.appointment_id)
    deleteAppointment(req.params.appointment_id) 
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  

  
  return router;
}