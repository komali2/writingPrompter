var app = angular.module('writingPrompter', []);

// Returns a random number between min (inclusive) and max (exclusive)
function randArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


  app.service('promptServicer', function(){
    this.promptList = [];
    var prompt1 = "Your friend was struck by lightning.";
    var prompt2 = "Describe how fingers feel to fingers.";
    this.promptList.push(prompt1, prompt2)

    this.promptShow = function(){
      return randArrayElement(this.promptList);
    }
  });

  app.controller('promptController', function($scope, promptServicer){
    $scope.promptShow = function(){
      console.log('hello');
      $scope.prompt = promptServicer.promptShow();
    }
  });
