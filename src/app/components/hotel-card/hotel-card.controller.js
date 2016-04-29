(function() {
  'use strict';

  angular
    .module('app.components')
    .controller('HotelCardController', HotelCardController);

  function HotelCardController($translate, HotelReviewService, toastr) {
    var vm = this;

    vm.showReviews = function (hotelId) {
      HotelReviewService
        .getReviews(hotelId)
        .then(function (reviews) {
          vm.reviews = reviews;
        })
        .catch(function () {
          $translate('hotel.reviews.error').then(function (message) {
            toastr.error(message);
          });
        });
    }
  }
})();
