(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/search');
  }

})();
