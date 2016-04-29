(function() {
  'use strict';

  angular
    .module('app.search')
    .controller('SearchHotelController', SearchHotelController);

  function SearchHotelController(SearchHotelService) {
    var vm = this;

    vm.loadHotels = function (query) {
      query['force_error'] = vm.forceError || undefined;

      vm.hotels = {};
      vm.searchHotelForm = {
        error:   false,
        pending: true
      };

      SearchHotelService
        .getHotels(query)
        .then(function (hotels) {
          vm.hotels = hotels;
        })
        .catch(function () {
          vm.searchHotelForm.error = true;
        })
        .finally(function () {
          vm.searchHotelForm.pending = false;
        })
    }
  }
})();
