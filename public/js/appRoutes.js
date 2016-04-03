angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'views/login.html',
    controller: 'usersController'
  })
  .when('/new_appointment', {
    templateUrl:'views/new.html',
    controller: 'usersController'
  })

}]);
