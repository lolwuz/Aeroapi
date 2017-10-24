'use strict';
module.exports = function(app) {
  var route = require('../controllers/routeController');
  var airliner = require('../controllers/airlinerController');

  // todoList Routes
  app.route('/airliner/:airlinerId/route')
    .get(route.read_all_route)
    .post(airliner.loginRequired, route.create_a_route)

  app.route('/route/:routeId')
    .delete(airliner.loginRequired, route.delete_a_route)
}