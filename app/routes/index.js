(function () {
  angular.module('raspardtica').config(['$routeProvider', function ($routeProvider) {
    function alreadyLogged($q, $rootScope, $location, userFactory, alert, errorMessage) {
      var deferred = $q.defer();

      //if ($rootScope.user) {
        var params = { email: $rootScope.user.email, password: $rootScope.user.password };
        userFactory.loginUser(params, function (result) {
          if ($rootScope.sid != null || $rootScope.sid != "") {
            $rootScope.publicKey = result.data.publicKey;
            $rootScope.sid = result.data.userId;
            $rootScope.name = result.data.name;
            $rootScope.bank = result.data.bank;
            $rootScope.fail = false;
            $rootScope.statusMessage = null;
            $rootScope.message = null;
            deferred.resolve(true);
          } else {
            $rootScope.user = {};
            deferred.resolve(true);
            $location.path('/');
          }
        },
        function (result) {
          $rootScope.user = {};
          deferred.resolve(true);
          $rootScope.fail = true;
          $rootScope.statusMessage = alert.DANGER;
          $rootScope.message = errorMessage.UNSUCCESSFUL_LOGIN;
          $location.path('/');
        });
      /*} else {
        $location.path('/');
      }*/

      if ($rootScope.sid != null || $rootScope.sid != "") {
        deferred.resolve(true);
      }
      return deferred.promise;
    };

    $routeProvider
      .when('/', {
        redirectTo: '/login'
      })
      .when('/login', {
        templateUrl: 'app/templates/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
    .when('/welcome', {
        templateUrl: 'app/templates/welcome.html',
        controller: 'WelcomeController',
        controllerAs: 'welcome',
        resolve: {
          alreadyLogged: alreadyLogged
        }
      })
      .when('/devices', {
        templateUrl: 'app/templates/devices.html',
        controller: 'deviceController',
        controllerAs: 'devices',
        /*resolve: {
          alreadyLogged: alreadyLogged
        }*/
      })
      .otherwise({
        redirectTo: '/login'
      })
    }]);
})();
