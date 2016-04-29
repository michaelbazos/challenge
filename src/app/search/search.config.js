(function() {
  'use strict';

  angular
    .module('app.search')
    .config(translateConfiguration);

  function translateConfiguration($translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart('search');
  }
})();
