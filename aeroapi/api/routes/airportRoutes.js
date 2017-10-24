'use strict';
module.exports = function(app) {
  var airport = require('../controllers/airportController');
  var airliner = require('../controllers/airlinerController');

  // todoList Routes
  app.route('/airport')
    .get(airport.list_all_airport)
    .post(airliner.loginRequired, airport.create_a_airport)
    .delete(airliner.loginRequired, airport.delete_all_airport);


  app.route('/airport/:airportId')
    .get(airport.read_a_airport)
    .put(airliner.loginRequired, airport.update_a_airport)
    .delete(airliner.loginRequired, airport.delete_a_airport);
};