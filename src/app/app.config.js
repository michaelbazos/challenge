(function() {
  'use strict';

  angular
    .module('app')
    .config(logConfiguration)
    .config(translateConfiguration);

  function logConfiguration($logProvider) {
    $logProvider.debugEnabled(true);
  }

  function translateConfiguration($translateProvider, $translatePartialLoaderProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/app/{part}/i18n/{lang}.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
    $translatePartialLoaderProvider.addPart('search');
  }
})();
