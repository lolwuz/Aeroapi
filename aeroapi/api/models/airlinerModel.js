'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var routes = require('../models/routeModel');

var AirlinerSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the airliner'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  money: {
    type: String,
    required: 'Kindly enter the money of the airliner'
  },
  routes: {
    type: [String]
  }
});

module.exports = mongoose.model('Airliner', AirlinerSchema);