(function() {
  'use strict';

  angular
    .module('app.components')
    .config(translateConfiguration);

  function translateConfiguration($translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart('components');
  }
})();
