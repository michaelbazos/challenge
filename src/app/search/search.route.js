(function() {
  'use strict';

  angular
    .module('app.search')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'app/search/hotel/searchHotel.html',
        controller: 'SearchHotelController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/search');
  }

})();
