(function() {
  'use strict';

  angular
    .module('app')
    .controller('SearchController', SearchController);

  function SearchController() {
    var vm = this;

    vm.message = 'AHOI WORLD!';
  }
})();
