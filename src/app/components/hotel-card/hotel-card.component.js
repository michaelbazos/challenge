(function() {
  'use strict';

  angular
    .module('app.components')
    .component('hotelCard', {
      templateUrl: 'app/components/hotel-card/hotel-card.html',
      controller: 'HotelCardController',
      controllerAs: 'vm',
      bindings: {
        hotel: '='
      }
  });
})();
