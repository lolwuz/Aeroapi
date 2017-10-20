'use strict';


var mongoose = require('mongoose');
var Route = mongoose.model('Route');
var Airliner = mongoose.model('Airliner');
var Airport = mongoose.model('Airport');

exports.create_a_route = function (req, res) {
  var new_route = new Route(req.body);
  new_route.save(function (err, route) {
    if (err)
      res.send(err);
  
    Airliner.findOneAndUpdate({_id: req.params.airlinerId}, {
      $push: {
        "routes": new_route._id
      }
    }, {
      safe: true,
      upsert: true
    },
    function (err, airliner) {
      if (err)
        res.send(err);
      res.json(route);
    });
  });
};

exports.read_all_route = function (req, res) {
  Airliner.findById(req.params.airlinerId, function (err, airliner) {
    if (err)
      res.send(err);
    // Find Airliners by ID
    Route.find({'_id': { $in: airliner.routes}}, function (err, route) {
      if (err)
        res.send(err);
      res.json(route);
    });
  });
};

exports.delete_a_route = function (req, res) {
  Route.remove({
    _id: req.params.routeId
  }, function (err, route) {
    if (err)
      res.send(err);
    res.json({
      message: 'route successfully deleted'
    });
  });
};
