angular.module('writingPrompter', [])
  .factory('userFactory', function(){
    var exports = {};

    exports.getPrompt = function(){};
    exports.submitPrompt = function(){};
    exports.deletePrompts = function(){};

    return exports;
  });
