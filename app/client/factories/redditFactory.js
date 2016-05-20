angular.module('writingPrompter')
  .factory('redditFactory', function($http){
    var exports = {};
    exports.getRedditPrompts = function(cb){
      $http({
        method: 'GET',
        url: '/external/reddit'
      }).then(function success(res){
        cb(res);
      }, function failure(res){
        console.log('error in getRedditPrompts factory', res);
        cb(res);
      });
    };
    
    return exports;

  });
