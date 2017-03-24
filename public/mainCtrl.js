angular.module('myApp')
.controller('mainCtrl' , function ($scope , github_service , $state){

  console.log("Ctrl");
  $scope.test = "test"
  $scope.getFollowing = github_service.getFollowing().then(function(response){
      $scope.data = response.data
    console.log(response);
    return response;
  })





});
