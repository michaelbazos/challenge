(function() {
  'use strict';

  describe('hotel review service', function(){
    var $httpBackend;
    var API;
    var hotelReviewService;

    beforeEach(function () {
      module('app.components');
      inject(function(_$injector_, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        API = _$injector_.get('API');
        hotelReviewService = _$injector_.get('HotelReviewService');
      });
    });

    it('should be registered', function() {
      expect(hotelReviewService).not.toEqual(null);
    });

    describe('getReviews function', function() {
      it('should exist', function() {
        expect(hotelReviewService.getReviews).not.toEqual(null);
      });

      it('should return the expected data', function() {
        $httpBackend.when('GET',  API.origin + '/reviews?hotel_id=12345').respond(200, [{name: 'John Doe'}]);

        var reviews;
        hotelReviewService.getReviews(12345).then(function(data) {
          reviews = data;
        });
        $httpBackend.flush();

        expect(reviews).toEqual(jasmine.any(Array));
        expect(reviews.length).toEqual(1);
        expect(reviews[0].name).toEqual('John Doe');
      });
    });
  });
})();
