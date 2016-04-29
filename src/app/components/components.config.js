(function() {
  'use strict';

  angular
    .module('app.components')
    .config(toastrConfiguration)
    .config(translateConfiguration);

  function toastrConfiguration(toastrConfig) {
    toastrConfig.timeOut = 4000;
    toastrConfig.progressBar = true;
  }

  function translateConfiguration($translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart('components');
  }
})();
