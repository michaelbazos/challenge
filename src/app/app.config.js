(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
