(function() {
  'use strict';

  angular
    .module('app.components')
    .run(runBlock);

  function runBlock($log) {

    $log.debug('components module initialized');
  }

})();
