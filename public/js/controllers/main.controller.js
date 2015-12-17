(function() {
'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$anchorScroll', '$location', 'Cities'];

  function MainController($anchorScroll, $location, Cities) {
    var vm = this;

    vm.clickIcon = function(message) {
      window.alert(message);
    };

    vm.cities = Cities.cities;

    vm.changedCity = function() {
      $location.hash(vm.selectedCity);
      $anchorScroll();
    };


  };

})();

