var express = require('express');
var router = express.Router();

var Task = require("../models/task.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
