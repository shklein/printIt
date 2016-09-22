var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

      .when('/login', {
      templateUrl: '/views/login.html',
      controller: "HomeController"
    })

    .when('/lists', {
      templateUrl: '/views/lists.html',
      controller: "ListController"
    })

    .otherwise({
      redirectTo: 'login'
    });

}
]);
