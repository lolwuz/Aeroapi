'use strict';


var mongoose = require('mongoose'),
  Airliner = mongoose.model('Airliner');
Route = mongoos.model('Route');

exports.list_all_airliner = function (req, res) {
  Airliner.find({}, function (err, airliner) {
    if (err)
      res.send(err);
    res.json(airliner);
  });
};

exports.create_a_airliner = function (req, res) {
  var new_airliner = new Airliner(req.body);
  new_airliner.save(function (err, airliner) {
    if (err)
      res.send(err);
    res.json(airliner);
  });
};

exports.read_a_airliner = function (req, res) {
  Airliner.findById(req.params.airlinerId, function (err, airliner) {
    if (err)
      res.send(err);
    res.json(airliner);
  });
};

exports.update_a_airliner = function (req, res) {
  Airliner.findOneAndUpdate({
    _id: req.params.airlinerId
  }, req.body, {
    new: true
  }, function (err, airliner) {
    if (err)
      res.send(err);
    res.json(airliner);
  });
};

exports.delete_a_airliner = function (req, res) {
  Airliner.remove({
    _id: req.params.airlinerId
  }, function (err, airliner) {
    if (err)
      res.send(err);
    res.json({
      message: 'airliner successfully deleted'
    });
  });
};

exports.create_a_airliner_route = function (req, res) {
  var new_route = new Route(req.body);

  Airliner.findOneAndUpdate({
      _id: req.params.airlinerId
    }, {
      $push: {
        "routes": {
          new_route
        }
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