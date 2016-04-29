(function() {
  'use strict';

  describe('search hotel service', function(){
    var $httpBackend;
    var API;
    var searchHotelService;

    beforeEach(function () {
      module('app.search');
      inject(function(_$injector_, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        API = _$injector_.get('API');
        searchHotelService = _$injector_.get('SearchHotelService');
      });
    });

    it('should be registered', function() {
      expect(searchHotelService).not.toEqual(null);
    });

    describe('getHotels function', function() {
      it('should exist', function() {
        expect(searchHotelService.getHotels).not.toEqual(null);
      });

      it('should return the expected data', function() {
        $httpBackend.when('GET',  API.origin + '/hotels?count=5').respond(200, [{}, {}, {}, {}, {}]);

        var hotels;
        searchHotelService.getHotels({count: 5}).then(function(data) {
          hotels = data;
        });
        $httpBackend.flush();

        expect(hotels).toEqual(jasmine.any(Array));
        expect(hotels.length).toEqual(5);
      });
    });
  });
})();
