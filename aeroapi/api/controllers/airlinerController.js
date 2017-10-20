"use strict";

var mongoose = require("mongoose");
var Airliner = mongoose.model("Airliner");
var bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


exports.register = function(req, res){
  var newAirliner = new Airliner(req.body);
  newAirliner.hash_password = bcrypt.hashSync(req.body.password, 10);
  newAirliner.save(function(err, airliner) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      airliner.hash_password = undefined;
      return res.json(airliner);
    }
  });
};

exports.sign_in = function(req, res){
  Airliner.findOne({
    email: req.body.email
  }, function(err, airliner) {
    if (err) throw err;
    if (!airliner) {
      res.status(401).json({ message: 'Authentication failed. airliner not found.' });
    } else if (airliner) {
      if (!airliner.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({token: jwt.sign({ email: airliner.email, fullName: airliner.fullName, _id: airliner._id}, 'RESTFULAPIs')});
      }
    }
  });
};

exports.loginRequired = function(req, res, next){
  if (req.airliner) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized airliner!' });
  }
};

exports.list_all_airliner = function(req, res) {
  Airliner.find({}, function(err, airliner) {
    if (err) res.send(err);
    res.json(airliner);
  });
};

exports.read_a_airliner = function(req, res) {
  Airliner.findById(req.params.airlinerId, function(err, airliner) {
    if (err) res.send(err);
    res.json(airliner);
  });
};

exports.update_a_airliner = function(req, res) {
  Airliner.findOneAndUpdate(
    {
      _id: req.params.airlinerId
    },
    req.body,
    {
      new: true
    },
    function(err, airliner) {
      if (err) res.send(err);
      res.json(airliner);
    }
  );
};

exports.delete_a_airliner = function(req, res) {
  Airliner.remove(
    {
      _id: req.params.airlinerId
    },
    function(err, airliner) {
      if (err) res.send(err);
      res.json({
        message: "airliner successfully deleted"
      });
    }
  );
};