(function() {
  'use strict';
  angular.module('app').factory('DeviceService', DeviceService);
  DeviceService.$inject = ['$http', '$q', 'backendConfig', 'HttpHandlersService'];

  function DeviceService($http, $q, backendConfig, HttpHandlersService) {

  }
})();
