myApp.controller('HomeController', ['$scope', '$http', function($scope, $http)

{
  var key = 'f36fcd38aad43d04c6b9042c01e91da5';
  var baseURL = 'http://api.petfinder.com/';


  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
      }
    )
  }


}]);
