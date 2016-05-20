var redditController = require('./redditController.js');
var userController = require('./userController.js');

module.exports = function(router){
  router.get('/reddit', redditController);
  router.get('/user', userController.get);
  router.post('/user', userController.post);
  router.delete('/user', userController.delete);
};
