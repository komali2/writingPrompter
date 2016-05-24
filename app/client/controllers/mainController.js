angular.module('writingPrompter', [])
  .controller('mainController', [
    $scope, redditFactory, userFactory, localFactory,
    function($scope, redditFactory){

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
      $scope.userPromptSubmit = function(data){
        var sendMe = {prompt: data};
        userFactory.submitPrompt(sendMe);
      };
      $scope.userPromptDelete = function(){
        userFactory.deletePrompts();
      };
  }]);
