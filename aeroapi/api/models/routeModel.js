'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var airport = require('../models/airportModel');

var RouteSchema = new Schema({
  destinations: {
    type: [String],
    required: 'Kindly enter the name of the route'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Route', RouteSchema);