'use strict';
module.exports = function(app) {
  var plane = require('../controllers/planeController');

  // todoList Routes
  app.route('/plane')
    .get(plane.list_all_plane)
    .post(plane.create_a_plane);


  app.route('/plane/:planeId')
    .get(plane.read_a_plane)
    .put(plane.update_a_plane)
    .delete(plane.delete_a_plane);
};