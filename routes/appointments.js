const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getAppointments, addAppointment, updateAppointmentToggle, deleteAppointment, getAppointmentsById }) => {

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
        console.log(result)
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

  router.put('/:user_id/category/:category_id/toggle', function (req, res) { 
    console.log(req.body)
    const toggleValue = req.body.map(appointment => {
      console.log(appointment)
      return appointment.toggle
    })
    console.log(toggleValue[0])
    updateAppointmentToggle(req.params.category_id, toggleValue[0])
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  router.delete('/:user_id/appointment/:appointment_id', function (req, res) {


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