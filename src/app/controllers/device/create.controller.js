(function() {
  'use strict';

  angular
    .module('raspardtica')
    .controller('DeviceCreateController', DeviceCreateController);

    DeviceCreateController.$inject = ['$state', 'errorMessages', 'messages', 'DeviceService'];

    function DeviceCreateController($state, errorMessages, messages, DeviceService) {
      var vm = this;

      vm.form = {};
      vm.errorMessages = errorMessages;
      vm.processingSubmit = false;

      vm.submitFor = function() {
        vm.processingSubmit = true;

        DeviceService.saveDevice({
          address: vm.address,
          alias: vm.alias,
          description: vm.description
        }).then(function successCallback(data) {
          $state.go('user.createSuccess');
        }, function errorCallback(error){
          handleSubmitError(error);
        });
      }
    };

    activate();

    function activate(){
      //Place any logic that should be at the moment this controller is being activated
    }

    function handleSubmitError(error){
      console.log("handleSubmitError");
      console.log(error);
      vm.processingSubmit = false;
      vm.form.$setPristine();
      vm.serverErrorMessage = errorMessages[error.message];
      console.log(error.message,"USER_EMAIL_ALREADY_REGISTERED");
      if (error.message === "USER_EMAIL_ALREADY_REGISTERED") {
        console.log("dio true");
        vm.serverEmailError = true;
      } else {
        console.log("dio false");
      }
    };
})();
