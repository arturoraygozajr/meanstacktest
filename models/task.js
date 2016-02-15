'use strict'

var mongoose = require('mongoose');
var moment = require('moment');

var Task;

var taskSchema = new mongoose.Schema({
  taskName: String;
  taskDetails: String;
  date: String;
  completion: Boolean;
  Delete: ;
});

Task = mongoose.model('task', taskSchema);

module.exports = Task;