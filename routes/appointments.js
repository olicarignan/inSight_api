const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getAppointments, addAppointment, updateAppointment, deleteAppointment }) => {

  router.get('/', function(req, res, next) {
    console.log('appointment', req.body)
    getAppointments()
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

  router.put('/', function (req, res) {
    updateAppointment(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  router.delete('/', function (req, res) {
    deleteAppointment(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  

  
  return router;
}