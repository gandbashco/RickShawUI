(function() {
  'use strict';

  angular
    .module('rickShawUi')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
    .when('/customer', {
        templateUrl: 'app/customer/customer.html',
        controller: 'CustomerController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
