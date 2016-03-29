var app = angular.module('writingPrompter', []);

/*----------------------
HELPER FUNCTIONS
------------------------*/

// Returns a random array element
function randArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/*----------------------
FACTORIES AND SERVICES
------------------------*/

app.service('promptServicer', ['$http', function($http){
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

  this.redditPromptShow = function(cb){
    $http({
      method: 'GET',
      url: '/reddit'
    }).then(function success(res){
      cb(res);
    }, function failure(res){
      cb(res);
    });
  }

  this.userPromptSubmit = function(data){
    var sendMe = {prompt: data};
    $http.post('/user', sendMe).then(function(response){
    });
  }

  this.userPromptShow = function(cb){
    $http.get('/user').then(function(res){
      cb(res);
    });
  }



}]);

  /*----------------------
  CONTROLLERS
  ------------------------*/


  //controller for all index stuff for now
app.controller('promptController', function($scope, promptServicer){
  //happens on click in the index.html
  $scope.promptShow = function(){
    //sets the {{prompt}} area in index.html to a random element in the
    //prompts array
    $scope.prompt = promptServicer.promptShow();
  }
  $scope.redditPromptShow = function(){
    $scope.prompt = 'Loading a prompt...';
    promptServicer.redditPromptShow(function(res){
      $scope.prompt = res.data;
    });
  }

  $scope.userPromptSubmit = function(){
    promptServicer.userPromptSubmit($scope.userPrompt);
  }

  $scope.userPromptShow = function(){
    promptServicer.userPromptShow(function(res){
      $scope.prompt = res.data;
    });
  }
});
