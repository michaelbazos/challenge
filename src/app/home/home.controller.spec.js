(function() {
  'use strict';

  describe('home controller', function(){
    var vm;

    beforeEach(function () {
      module('app');
      inject(function(_$controller_) {
        vm = _$controller_('HomeController');
      });
    });

    it('should have a fancy message', function () {
      expect(vm.message).toEqual('AHOI WORLD!');
    });
  });
})();
