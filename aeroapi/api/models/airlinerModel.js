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
    required: 'Enter a username'
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Enter a email adress'
  },
  hash_password: {
    type: String,
    required: 'Password required'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  money: {
    type: Number,
    required: 'Kindly enter the money of the airliner'
  },
  routes: {
    type: [ObjectId]
  },
  planes: {
    type: [ObjectId]
  },
  color: {
    type: Number,
    default: 1
  }
});

AirlinerSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('Airliner', AirlinerSchema);