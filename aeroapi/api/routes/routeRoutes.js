'use strict';
module.exports = function(app) {
  var route = require('../controllers/routeController');

  // todoList Routes
  app.route('/route')
  .get(airport.list_all_route)
  .post(airport.create_a_route)

app.route('/route/:airportId')
  .get(airport.read_a_route)
  .put(airport.update_a_route)
  .delete(airport.delete_a_route);
};