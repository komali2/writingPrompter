var app = angular.module('writingPrompter', []);
  app.controller('mainController', [
    '$scope', 'redditFactory', 'userFactory', 'localFactory',
    function($scope, redditFactory, userFactory, localFactory){

      $scope.localPromptShow = function(){
        $scope.prompt = 'Loading a prompt...';
        $scope.prompt = localFactory.getPrompt();
      };

      $scope.redditPromptShow = function(){
        $scope.prompt = 'Loading a prompt...';
        redditFactory.getPrompt(function(prompt){
          $scope.prompt = prompt.data;
        });
      };
      $scope.userPromptShow = function(){
        $scope.prompt = 'Loading a prompt...';
        userFactory.getPrompt(function(prompt){
          $scope.prompt = prompt.data;
        });
      };
      $scope.userPromptSubmit = function(){
        var sendMe = {prompt: $scope.userPrompt};
        userFactory.submitPrompt(sendMe);
      };
      $scope.userPromptDelete = function(){
        userFactory.deletePrompts();
      };
  }]);
