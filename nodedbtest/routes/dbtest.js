var express = require("express");
var router = express.Router();
const pool = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.query('INSERT INTO oz ("username") values (\'bob\')',(err, res) => {
        if (err) return next(err);
        console.log(err, res)
        pool.end()
      })
    res.send('respond with a resource');
  });
  
  module.exports = router;
  