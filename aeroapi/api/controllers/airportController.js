'use strict';

var mongoose = require('mongoose'),
  Airport = mongoose.model('Airport');

exports.list_all_airport = function(req, res) {
    Airport.find({size: 'large'}, function(err, airport) {
    if (err)
      res.send(err);
    res.json(airport);
  });
};

exports.create_a_airport = function(req, res) {
    var new_airport = new Airport(req.body);
    new_airport.save(function(err, airport) {
    if (err)
      res.send(err);
    res.json(airport);
  });
};

exports.read_a_airport = function(req, res) {
    Airport.findById(req.params.airportId, function(err, airport) {
    if (err)
      res.send(err);
    res.json(airport);
  });
};

exports.update_a_airport = function(req, res) {
    Airport.findOneAndUpdate({_id: req.params.airportId}, req.body, {new: true}, function(err, airport) {
    if (err)
      res.send(err);
    res.json(airport);
  });
};

exports.delete_a_airport = function(req, res) {
    Airport.remove({
    _id: req.params.airportId
  }, function(err, airport) {
    if (err)
      res.send(err);
    res.json({ message: 'airport successfully deleted' });
  });
};

exports.delete_all_airport = function(req, res){
  Airport.remove({},, function(err, airport) {
    if (err)
      res.send(err);
    res.json({ message: 'airport successfully deleted' });
  });
}
