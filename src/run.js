angular
  .module('app')
  .run(runFn);

/** @ngInject */
function runFn($rootScope, $state, AuthorizationService, FixedIntervalExecutionPoolService, ExpirationWatcherService){

  //adding ExpirationWatcherService to FixedIntervalExecutionPoolService, so that it 
  //can periodically check authentication token expiration time
  FixedIntervalExecutionPoolService.submit(ExpirationWatcherService.run, 1000);

  //Authorization goes everytime a $stateChangeStart
  $rootScope.$on('$stateChangeStart', function(e, stateData) {

    if( !AuthorizationService.isAllowed(stateData.name, stateData.allowedRoles) && stateData.name !== 'unauthorized' ){
      e.preventDefault();
      $state.go('unauthorized');
    }
    
  });

}
