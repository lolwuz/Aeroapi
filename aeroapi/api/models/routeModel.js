'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var Airport = require('../models/airportModel');

var RouteSchema = new Schema({
  destinations: {
<<<<<<< HEAD
    type: [ObjectId],
    required: 'Kindly enter the name of the route'
=======
    type: [String],
    default: []
>>>>>>> 12180e1170a24d138f3e4fc3cb16c4be3dee3255
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