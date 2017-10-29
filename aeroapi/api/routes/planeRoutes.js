'use strict';
module.exports = function(app) {
  var plane = require('../controllers/planeController');
  var airliner = require('../controllers/airlinerController');

  // todoList Routes
  app.route('/plane')
    .get(plane.list_all_plane)
    .post(airliner.loginRequired, plane.create_a_plane);

  app.route('/plane/:planeId')
    .get(plane.read_a_plane)
    .put(airliner.loginRequired, plane.update_a_plane)
    .delete(airliner.loginRequired, plane.delete_a_plane);

  app.route('/airliner/:airlinerId/plane')
    .get(plane.read_all_airliner_plane)
    .post(airliner.loginRequired, plane.add_a_airliner_plane)
};