(function () {
    'use strict'

    angular
        .module('rickShawUi')
        .controller('CustomerController', function ($http, $log, toastr) {

            var vm = this;
            vm.selectedCustomer;

            vm.getCustomer = function () {
                $http.get("http://localhost:8080/customers/")
                    .then(function (response) {
                        vm.customerList = response.data;
                        $log.debug(vm.customerList);
                        toastr.success("Successfully retrieved customer list");
                    });
            };

        });
})();