angular.module('writingPrompter')
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
    exports.submitPrompt = function(data){
      $http({
        method: 'POST',
        url: '/external/user',
        data: data
      }).then(function success(res){
        cb(res);
      }, function failure(res){
        console.log('error in postUserPrompts factory', res);
        cb(res);
      });
    };
    exports.deletePrompts = function(){
      $http({
        method: 'DELETE',
        url: '/external/user'
      }).then(function success(res){
        return true;
      }, function failure(res){
        console.log('error in deleteUserPrompts factory', res);
      });
    };

    return exports;
  });
