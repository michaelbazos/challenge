(function() {
  'use strict';

  angular
    .module('app.search')
    .run(runBlock);

  function runBlock($log) {

    $log.debug('search module initialized');
  }

})();
