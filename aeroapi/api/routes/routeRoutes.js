'use strict';
module.exports = function(app) {
  var route = require('../controllers/routeController');

  // todoList Routes
  app.route('/route')
  .get(route.list_all_route)
  .post(route.create_a_route)

app.route('/route/:routeId')
  .get(route.read_a_route)
  .put(route.update_a_route)
  .delete(route.delete_a_route)
};