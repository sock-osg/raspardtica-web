angular.module('raspardtica').factory('deviceFactory', function($http){
  var factory = {};

  factory.getAll = function(username, callback, error) {
    $http.get(appConfig.apiUrl + 'devices/' + username).then(callback, error);
  };

  return factory;
});
