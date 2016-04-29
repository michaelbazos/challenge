(function() {
  'use strict';

  angular
    .module('app.components')
    .component('hotelReview', {
      templateUrl: 'app/components/hotel-review/hotel-review.html',
      controllerAs: 'vm',
      bindings: {
        review: '='
      }
  });
})();
