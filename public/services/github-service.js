angular.module('myApp').service('github_service' , function($http){
this.getFollowing = function (){
  return $http({
           method: 'GET',
           url: 'api/github/following'
       });

}
})
