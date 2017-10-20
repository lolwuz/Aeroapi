'use strict';
module.exports = function(app) {
  var route = require('../controllers/routeController');

  // todoList Routes
  app.route('/route/:airlinerId')
    .get(route.read_all_route)
    .post(route.create_a_route)

  app.route('/route/:routeId')
    .delete(route.delete_a_route)
}