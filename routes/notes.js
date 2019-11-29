const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
module.exports = ({getNotes, addNote, updateNote}) => {
  router.get('/', function(req, res, next) {
    getNotes()
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.post('/', (req, res, next) => {
    const note = req.body;
    addNote(note)
      .then(() => {
        if(!note) {
          res.send({error: 'error'});
        }
        res.send('got it')
      })
      .catch(e => res.send(e));
  })
  
  router.put('/', function (req, res) {
    updateNote(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  return router;
};