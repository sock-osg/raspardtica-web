(function() {
  'use strict';
  angular.module('raspardtica').
  controller('LoginController', ['$rootScope', '$scope', 'userFactory', 'alert', 'errorMessage', '$location',
    function ($rootScope, $scope, userFactory, alert, errorMessage, $location) {

    $scope.user = {};

    $scope.loginUser = function(){
      var user = $scope.user;
      if(user.email === undefined || user.email === ''
        || user.password === undefined || user.password === ''){
        $scope.fail = true;
        $scope.statusMessage = alert.WARNING;
        $scope.message = errorMessage.FILL_IN_THE_FIELDS;
      } else {
        $rootScope.user = user;
        $location.path('/welcome');
      }
    }
  }]);
})();
