'use strict';
module.exports = function(app) {
  var airliner = require('../controllers/airlinerController');

  // Auth user
  app.route("/auth/register")
    .post(airliner.register)

  app.route("/auth/sign_in")
    .post(airliner.sign_in)

  // Get all airliners
  app.route('/airliners')
    .get(airliner.list_all_airliner)

  // Airliner functions 
  app.route('/airliner/:airlinerId')
    .get(airliner.read_a_airliner)
    .put(airliner.loginRequired, airliner.update_a_airliner)
    .delete(airliner.loginRequired, airliner.delete_a_airliner);
};