(function () {
    'use strict';

    function dayFilter() {
        return function (input) {
            input = input || '';
            var date = new Date(input);
            var out = date.getDate();
            if (!out) {
                out = 1;
            }
            
            return out;
        };
    }

    angular.module('theStyleApp.filters')
        .filter('dayFilter', [dayFilter]);
}());