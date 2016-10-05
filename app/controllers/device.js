(function() {
  'use strict';

  angular.module('raspardtica').controller('deviceController',
    ['$scope', 'deviceFactory','alert', 'errorMessage',
    function ($scope, deviceFactory, alert, errorMessage) {
        deviceFactory.getAll('sock_osg',
        function(result) {
          $scope.devices = result.data[0].devices;
        },
        function(errorDevices) {
          $scope.fail = true;
          $scope.statusMessage = alert.DANGER;
          $scope.message = "MSG_ERROR_UPLOAD";
        }
      );
      }
    ]
  );
})();
