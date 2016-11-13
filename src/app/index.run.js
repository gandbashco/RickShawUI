(function() {
  'use strict';

  angular
    .module('rickShawUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
