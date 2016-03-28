var app = angular.module('writingPrompter', []);

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


  app.service('promptServicer', function(){
    this.promptList = [];
    var prompt1 = "Your friend was struck by lightning.";
    var prompt2 = "Describe how fingers feel to fingers.";
    this.promptList.push(prompt1, prompt2)

    this.promptShow = function(){
      var ourRandomNumber = getRandomArbitrary(0, this.promptList.length);
      return this.promptList[ourRandomNumber];
    }
  });

  app.controller('promptController', function($scope, promptServicer){
    $scope.promptShow = function(){
      $scope.prompt = promptServicer.promptShow();
    }
  });
