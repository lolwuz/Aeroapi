'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var airport = require('../routes/airportModel');

var RouteSchema = new Schema({
  distinations: {
    type: [airport],
    required: 'Kindly enter the name of the route'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Route', RouteSchema);