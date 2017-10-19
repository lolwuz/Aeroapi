'use strict';


var mongoose = require('mongoose');
var Route = mongoose.model('Route');
var Airliner = mongoose.model('Airliner');
var Airport = mongoose.model('Airport');

exports.list_all_route = function (req, res) {
  Route.find({}, function (err, route) {
    if (err)
      res.send(err);
    res.json(route);
  });
};

exports.create_a_route = function (req, res) {
  var new_route = new Route(req.body);
  new_route.save(function (err, route) {
    if (err)
      res.send(err);
    res.json(route);
  });
};

exports.read_a_route = function (req, res) {
  Route.findById(req.params.routeId, function (err, route) {
    if (err)
      res.send(err);
    var destinations = route.destinations;
    var destinationsId = [];
    for(let i = 0; i < destinations.length; i++){
      let id = mongoose.Types.ObjectId(destinations[i]);
      destinationsId.push(id);
    }

    console.log(destinationsId);
    
    // Find Airliners by ID
    Airport.find({
      '_id': { $in: destinationsId}
    }, function (err, airport) {
      if (err)
        res.send(err);
      console.log(airport);
      res.json(airport);
    });
  });
};

exports.update_a_route = function (req, res) {
  Route.findOneAndUpdate({
    _id: req.params.routeId
  }, req.body, {
    new: true
  }, function (err, route) {
    if (err)
      res.send(err);
    res.json(route);
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

exports.update_a_route = function (req, res) {
  var airportId = req.body.airportId;

  Route.findOneAndUpdate({
      _id: req.params.airportId
    }, {
      $push: {
        "routes": {
          airportId
        }
      }
    }, {
      safe: true,
      upsert: true
    },
    function (err, route) {
      if (err)
        res.send(err);
      res.json(route);
    });
};