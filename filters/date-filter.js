(function () {
    'use strict';

    function datefilter() {
        return function (input) {
            input = input || '';
            var date = new Date(input);
            var out = date.toLocaleDateString("de-de");
            return out;
        };
    }

    angular.module('theStyleApp.filters')
        .filter('datefilter', [datefilter]);
}());