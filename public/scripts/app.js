angular.module('myApp', []);

angular.module('myApp').controller('MainController', function($scope, $http){

  $scope.studentList = {};

  function handleSuccess(response){
    $scope.studentList = response.data;
  }

  function handleFailure(response){
    console.log('Failure:', response);
  }

  $scope.getNames = function(){
    $http.get('/students').then(handleSuccess, handleFailure)
  }


})//controller
