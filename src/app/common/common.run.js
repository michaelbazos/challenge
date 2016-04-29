(function() {
  'use strict';

  angular
    .module('app.common')
    .run(runBlock);

  function runBlock($log) {
    $log.debug('common module initialized');
  }

})();
