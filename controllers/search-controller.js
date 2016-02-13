(function() {
    'use strict';

    function SearchController($scope, $location) {
        $scope.mobileSearch = function(query) {
            if (query == undefined || query == "") {
                $("#mobileSearchField").focus();
                return;
            }
            var path = '/results/' + query;
            $location.search('page', '1');
            $location.path(path);
        };

        $scope.search = function(query) {
            if (query == undefined || query == "") {
                return;
            }
            var path = '/results/' + query;
            $location.search('page', '1');
            $location.path(path);
        };
    }

    angular.module('theStyleApp.controllers')
        .controller('SearchController', ['$scope', '$location', SearchController]);
}());
