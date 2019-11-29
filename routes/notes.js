const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
module.exports = ({getNotes, addNote, updateNote, deleteNote}) => {
  router.get('/', function(req, res, next) {
    console.log('notes')
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

  router.delete('/', function (req, res) {
    deleteNote(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  
  return router;
};