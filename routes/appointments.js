const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');


module.exports = ({ getAppointments, addAppointment }) => {

  router.get('/', function(req, res, next) {

    getAppointments()
      .then(result => { 
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
  router.post('/', (req, res, next) => {
    const appointment = req.body;
    addAppointment(appointment)
      .then(appointment => {
        if(!appointment) {
          res.send({error: 'error'});
        }
        res.send('got it')
      })
      .catch(e => res.send(e));
  })

  
  return router;
};