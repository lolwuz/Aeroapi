'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var Airport = require('../models/airportModel');

var RouteSchema = new Schema({
  destinations: {
    type: [ObjectId],
    required: 'Kindly enter the name of the route'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Route', RouteSchema);