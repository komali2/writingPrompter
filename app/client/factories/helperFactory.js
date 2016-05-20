angular.module('writingPrompter', [])
  .factory('helperFactory', function(){
    var exports = {};

    exports.randArrayElement = function(array){
      return array[Math.floor(Math.random() * array.length)];
    };
  });
