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
        redditFactory.getPrompts(function(prompt){
          $scope.prompt = prompt.data;
        });
      }
  }]);
