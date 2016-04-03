angular.module('usersCtrl', []).controller('usersController', function($scope,User,Apt,$location,$cookies){
  while($cookies.user == undefined){
    $cookies.user = prompt("What's your name?")
  }
  $scope.addApt = function(){
    $scope.newApt.user = $cookies.user;
    Apt.create($scope.newApt,function(){
      $location.path('/')
    })
  }
  $scope.getApts = function(){
    Apt.index(function(apts){
      $scope.apts = apts
    })
  }
  $scope.getApts()
})
