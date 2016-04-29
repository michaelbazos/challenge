(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
