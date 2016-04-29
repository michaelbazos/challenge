(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
