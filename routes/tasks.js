var express = require('express');
var router = express.Router();

var Task = require("../models/task.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Task.find({}, function(err, tasks){
    if(!tasks) return res.send("no tasks yet");
    res.send('tasks');
  });
});

router.post('/', function(req, res, next){
  Task.create(req.body, function(err, savedTask){
    if(err) return res.status(400).send(err);
    res.send(savedTask);
  });
});


module.exports = router;
