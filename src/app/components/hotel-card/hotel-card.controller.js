(function() {
  'use strict';

  angular
    .module('app.components')
    .controller('HotelCardController', HotelCardController);

  function HotelCardController() {
    var vm = this;

    vm.showReviews = function (hotel) {
      // ...
    }
  }
})();
