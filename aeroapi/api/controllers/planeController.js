'use strict';

var mongoose = require('mongoose');
var Plane = mongoose.model('Plane');
var Airliner = mongoose.model('Airliner');

exports.list_all_plane = function(req, res) {
    Plane.find({}, function(err, plane) {
    if (err)
      res.send(err);
    res.json(plane);
  });
};

exports.create_a_plane = function(req, res) {
    var new_plane = new Plane(req.body);
    new_plane.save(function(err, plane) {
    if (err)
      res.send(err);
    res.json(plane);
  });
};

exports.read_a_plane = function(req, res) {
    Plane.findById(req.params.planeId, function(err, plane) {
    if (err)
      res.send(err);
    res.json(plane);
  });
};

exports.update_a_plane = function(req, res) {
    Plane.findOneAndUpdate({_id: req.params.planeId}, req.body, {new: true}, function(err, plane) {
    if (err)
      res.send(err);
    res.json(plane);
  });
};

exports.delete_a_plane = function(req, res) {
  Plane.remove({
    _id: req.params.planeId
  }, function(err, plane) {
    if (err)
      res.send(err);
    res.json({ message: 'plane successfully deleted' });
  });
};

exports.read_all_airliner_plane = function(req, res) {
  Airliner.findById(req.params.airlinerId, function(err, airliner) {
    if (err)
      res.send(err);
    Plane.find({'_id': { $in: airliner.planes}}, function (err, plane) {
      if (err)
        res.send(err);
      res.json(plane);
    });
  });
};

exports.add_a_airliner_plane = function(req, res) {
  Airliner.findOneAndUpdate({_id: req.params.airlinerId}, {
    $push: {
      "planes": req.body.plane
    }
  }, {
    safe: true,
    upsert: true
  },
  function (err, airliner) {
    if (err)
      res.send(err);
    res.json(airliner);
  });
};