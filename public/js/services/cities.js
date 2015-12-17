 (function() {
  'use strict';

 angular.module('app')
  .factory('Cities', function() {

    var service = {};

    service.clients = [
      {
        "city": "Los Angeles",
      },
      {
        "city": "Hollywood",
      },
       {
        "city": "Long Beach",
      },
       {
        "city": "Santa Monica",
      },
       {
        "city": "Pasadena",
      }

    ];

    service.cities = getUnique(service.clients, 'city');

    return service;

    function getUnique(arr, field) {
      var obj = {};
      arr.forEach(function(e){
        obj[e[field]] = true;
      });
      return Object.keys(obj).sort();
    };

  });

})();

