myApp.controller('HomeController', ['$scope', '$http', function($scope, $http)

{
  var authenticationSuccess = function() { console.log("Successful authentication"); };
  var authenticationFailure = function() { console.log("Failed authentication"); };

  Trello.authorize({
  type: 'popup',
  name: 'Print It Application',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});


}]);
