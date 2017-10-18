'use strict';
module.exports = function(app) {
  var airliner = require('../controllers/airlinerController');

  // todoList Routes
  app.route('/airliner')
    .get(airliner.list_all_airliner)
    .post(airliner.create_a_airliner);

  app.route('/airliner/:airlinerId')
    .get(airliner.read_a_airliner)
    .put(airliner.update_a_airliner)
    .delete(airliner.delete_a_airliner);

  app.route('/airliner/:airlinerId/route')
    .post(airliner.create_a_airliner_route)
};