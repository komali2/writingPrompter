angular.module('writingPrompter', [])
  .factory('localFactory', function(helperFactory){
    var exports = {};
    var promptList = [];
    var prompt1 = "Your friend was struck by lightning.";
    var prompt2 = "Describe how fingers feel to fingers.";
    var prompt3 = "Nothing is quite as satisfying as crushing small bones beneath one's feet.";
    var prompt4 = "Help me bury this body!";
    var prompt5 = "Where did you stash the DNA?";
    promptList.push(prompt1, prompt2, prompt3, prompt4, prompt5);

    exports.getPrompts = function(){
      return helperFactory.randArrayElement(promptList);
    };

    return exports;
  });
