require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

//get users route
module.exports = ({}) => {
  router.get('/', (req, res ) => {
    console.log("notification route")
  })

  return router;
}
