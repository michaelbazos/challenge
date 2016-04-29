(function() {
  'use strict';

  angular
    .module('app.search')
    .service('SearchHotelService', SearchHotelService);

  function SearchHotelService($http, API) {

    this.getHotels = function (params) {
      return $http.get(API.origin + '/hotels', {params: params}).then(function (response) {
        return response.data;
      })
    }
  }
})();
