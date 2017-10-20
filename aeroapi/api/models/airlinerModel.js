'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var bcrypt = require('bcrypt');

var AirlinerSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the airliner'
  },
  fullName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  hash_password: {
    type: String,
    required: true
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
    type: [ObjectId]
  }
});

AirlinerSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('Airliner', AirlinerSchema);