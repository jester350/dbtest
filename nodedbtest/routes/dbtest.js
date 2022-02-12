var express = require("express");
var router = express.Router();
const pool = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        pool.end()
      })
    res.send('respond with a resource');
  });
  
  module.exports = router;
  