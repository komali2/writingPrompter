angular.module('writingPrompter', [])
  .factory('userFactory', function($http){
    var exports = {};

    exports.getPrompt = function(cb){
      $http({
        method: 'GET',
        url: '/external/user'
      }).then(function success(res){
        cb(res);
      }, function failure(res){
        console.log('error in getUserPrompts factory', res);
        cb(res);
      });
    };
    exports.submitPrompt = function(data){};
    exports.deletePrompts = function(){};

    return exports;
  });
