var express = require("express");
var router = express.Router();
const pool = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.query('SELECT * from oz', (err, res) => {
        console.log(err, res)
        pool.end()
      })
    pool.query('INSERT INTO test ("username") values ("bob")',
        (err,res) => {
            if (err) return next(err);
        });
    res.send('respond with a resource');
  });
  
  module.exports = router;
  