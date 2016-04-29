(function() {
  'use strict';

  angular
    .module('app.components')
    .service('HotelReviewService', HotelReviewService);

  function HotelReviewService($http, API) {
    this.getReviews = function (hotelId) {
      var params = {
        hotel_id: hotelId
      };
      return $http.get(API.origin + '/reviews', {params: params}).then(function (response) {
        return response.data;
      });
    }
  }
})();
