'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AirlinerSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the airliner'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Money: {
    type: String,
    required: 'Kindly enter the money of the airliner'
  }
});

module.exports = mongoose.model('Airliner', AirlinerSchema);