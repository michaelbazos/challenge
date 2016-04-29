(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($log) {

    $log.debug('app module initialized');
  }

})();
