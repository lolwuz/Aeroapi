'use strict';

var mongoose = require('mongoose'),
  Plane = mongoose.model('Plane');

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
