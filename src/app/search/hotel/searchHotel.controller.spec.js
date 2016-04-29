(function() {
  'use strict';

  describe('search hotel controller', function(){
    var vm;

    beforeEach(function () {
      module('app.search');
      inject(function(_$controller_) {
        vm = _$controller_('SearchHotelController');
      });
    });

    it('should have a fancy message', function () {
      expect(vm.message).toEqual('AHOI WORLD!');
    });
  });
})();
