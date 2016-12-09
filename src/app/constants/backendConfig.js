(function() {
  'use strict';

  angular
    .module('app')
    .constant('backendConfig', {

    ENVIRONMENTS : {
      MOCK : {
        URL : 'http://private-b64fa-bcccertifications.apiary-mock.com:80/api'
      },
      DEV : {
        URL : 'http://localhost:8000/api'
      },
      QA : {
        URL : 'http://10.230.8.145:8090/api'
      },
      PROD : {
        URL : 'http://localhost:8080/api'
      }
    },
    
    // This parameter is modified by 'gulp-replace' 
    // npm run serve / gulp serve -> DEV
    // npm run serve:dev / gulp serve -> DEV
    // npm run serve:mock / gulp serve -> MOCK
    // npm run serve:dist / gulp serve:dist -> PROD
    // npm run build / gulp -> PROD
    CURRENT_ENVIRONMENT : '%CURRENT_ENVIRONMENT%', 
    VERSION : '%VERSION%',

    getCurrentSettings : function() {
      return this.ENVIRONMENTS[this.CURRENT_ENVIRONMENT]
    }
  });
})();
