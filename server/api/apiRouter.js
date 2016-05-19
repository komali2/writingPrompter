var redditController = require('./redditController.js');

module.exports = function(router){
  router.get('/reddit', redditController);
}
