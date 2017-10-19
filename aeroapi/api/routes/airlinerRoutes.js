'use strict';
module.exports = function(app) {
  var airliner = require('../controllers/airlinerController');

  // todoList Routes
  app.route('/airliners')
    .get(airliner.list_all_airliner)
    .post(airliner.create_a_airliner);

  app.route('/airliner/:airlinerId')
    .get(airliner.read_a_airliner)
    .put(airliner.update_a_airliner)
    .delete(airliner.delete_a_airliner);

  app.route('/airliner/:airlinerId/routes')
    .get(airliner.read_airliner_routes)

  app.route('/airliner/:airlinerId/route/:routeId')
    .get(airliner.read_a_airliner_route)
    .put(airliner.add_a_airliner_route)
};