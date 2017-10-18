'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var airport = require('../models/airportModel');

var RouteSchema = new Schema({
  destinations: {
    type: [String],
    default: []
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  created_by: {
    type: ObjectId
  }
});

module.exports = mongoose.model('Route', RouteSchema);