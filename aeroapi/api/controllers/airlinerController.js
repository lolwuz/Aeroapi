"use strict";

var mongoose = require("mongoose"),
  Airliner = mongoose.model("Airliner"),
  Route = mongoose.model("Route"),
  Airport = mongoose.model("Airport");

exports.list_all_airliner = function(req, res) {
  Airliner.find({}, function(err, airliner) {
    if (err) res.send(err);
    res.json(airliner);
  });
};

exports.create_a_airliner = function(req, res) {
  var new_airliner = new Airliner(req.body);
  new_airliner.save(function(err, airliner) {
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

exports.read_airliner_routes = function(req, res) {
  Airliner.findById(req.params.airlinerId, function(err, airliner) {
    if (err) res.send(err);
    res.json(airliner.routes);
  });
};

exports.add_a_airliner_route = function(req, res) {
  var routeId = req.params.routeId;

  Route.findById(req.params.routeId, function(err, route) {
    if (err) res.send(err);

    Airliner.findOneAndUpdate(
      {
        _id: req.params.airlinerId
      },
      {
        $push: {
          routes: route
        }
      },
      {
        safe: true,
        upsert: true
      },
      function(err, airliner) {
        if (err) res.send(err);
        res.json(airliner);
      }
    );
  });
};

exports.read_a_airliner_route = function(req, res) {
  Route.findById(req.params.routeId, function(err, route) {
    if (err) res.send(err);
    var destinations = route.destinations;
    var destinationsId = [];
    for (let i = 0; i < destinations.length; i++) {
      let id = mongoose.Types.ObjectId(destinations[i]);
      destinationsId.push(id);
    }

    console.log(destinationsId);

    // Find Airliners by ID
    Airport.find(
      {
        _id: { $in: destinationsId }
      },
      function(err, airport) {
        if (err) res.send(err);
        console.log(airport);
        res.json(airport);
      }
    );
  });
};
