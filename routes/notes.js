const express = require('express');
const router = express.Router();
const { getApiResults } = require('../helpers/apiHelpers');

//get users route
module.exports = ({getNotes, addNote, updateNote, deleteNote, getUsersNotesForCategory}) => {
  router.get('/:user_id', function(req, res, next) {
    console.log('notes')
    getNotes(req.params.user_id)
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.get('/:user_id/category/:category_id', (req, res, next) => {
    const user_id = req.params.user_id
    const category_id = req.params.category_id;
    getUsersNotesForCategory(user_id, category_id)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      console.log(error)
    })
  })

  router.post('/:user_id/category/:category_id', (req, res, next) => {

    const note = req.body
    const note_title = note.blocks[0].text
    const note_preview = note.blocks[1].text
    const note_index = note.blocks[0].key
    
    addNote(note_title, note, req.params.category_id, note_preview, note_index, req.params.user_id)
      .then((result) => {
        console.log(result)
        res.json(result)
      })
      .catch(e => {
        throw new Error(e)});
  })
  
  router.put('/:note_id', function (req, res) {
    updateNote(req.params.note_id)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })

  router.delete('/:user_id/categories/:category_id/:note_id', function (req, res) {
    
    deleteNote(req.params.note_id)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  
  return router;
};