'use strict';
module.exports = function(app) {
  var airport = require('../controllers/airportController');

  // todoList Routes
  app.route('/airport')
    .get(airport.list_all_airport)
    .post(airport.create_a_airport);


  app.route('/airport/:airportId')
    .get(airport.read_a_airport)
    .put(airport.update_a_airport)
    .delete(airport.delete_a_airport);
};