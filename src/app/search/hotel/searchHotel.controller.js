(function() {
  'use strict';

  angular
    .module('app.search')
    .controller('SearchHotelController', SearchHotelController);

  function SearchHotelController() {
    var vm = this;

    vm.message = 'AHOI WORLD!';
  }
})();
