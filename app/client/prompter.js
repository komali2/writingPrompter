var app = angular.module('writingPrompter', []);

  app.service('promptServicer', function(){
    this.promptList = [];
    var prompt1 = "Your friend was struck by lightning.";
    var prompt2 = "Describe how fingers feel to fingers.";
    this.promptList.push(prompt1, prompt2)
    this.promptShow = function(){
      return promptList[0];
    }
  });

  app.controller('promptController', function($scope, promptServicer){
    $scope.promptShow = function(){
      $scope.prompt = promptServicer.promptShow();
    }
  });
