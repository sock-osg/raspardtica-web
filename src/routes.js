angular
  .module('app')
  .config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<bcc-home-index></bcc-home-index>'
    })
    .state('user.create', {
      url: '/create',
      template: '<bcc-user-create></bcc-user-create>'
    })
    .state('institute.students', {
      url: '/students',
      templateUrl: 'app/views/instituteStudent/index.html',
      controller: 'InstituteStudentIndexController as vm'
    })
  ;
}
