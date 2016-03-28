var app = angular.module('writingPrompter', []);

// Returns a random number between min (inclusive) and max (exclusive)
function randArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

  //service function for holding logic
  app.service('promptServicer', function(){
    this.promptList = [];
    var prompt1 = "Your friend was struck by lightning.";
    var prompt2 = "Describe how fingers feel to fingers.";
    var prompt3 = "Nothing is quite as satisfying as crushing small bones beneath one's feet.";
    var prompt4 = "Help me bury this body!";
    var prompt5 = "Where did you stash the DNA?";
    this.promptList.push(prompt1, prompt2, prompt3, prompt4, prompt5);

    this.promptShow = function(){
      return randArrayElement(this.promptList);
    }
  });

  //controller for all things dealing with the prompt area in the view, index.html
  app.controller('promptController', function($scope, promptServicer){
    //happens on click in the index.html
    $scope.promptShow = function(){
      //sets the {{prompt}} area in index.html to a random element in the
      //prompts array
      $scope.prompt = promptServicer.promptShow();
    }
  });
