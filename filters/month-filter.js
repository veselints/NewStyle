(function() {
    'use strict';

    function monthFilter() {
        return function(input) {
            input = input || '';
            var date = new Date(input);
            var monthNumber = date.getMonth();
            var out;
            switch (monthNumber) {
                case 0:
                    out = "jan";
                    break;
                case 1:
                    out = "feb";
                    break;
                case 2:
                    out = "mar";
                    break;
                case 3:
                    out = "apr";
                    break;
                case 4:
                    out = "may";
                    break;
                case 5:
                    out = "june";
                    break;
                case 6:
                    out = "july";
                    break;
                case 7:
                    out = "aug";
                    break;
                case 8:
                    out = "sep";
                    break;
                case 9:
                    out = "oct";
                    break;
                case 10:
                    out = "nov";
                    break;
                case 10:
                    out = "dec";
                    break;
                default:
                    out = "dec";
                    break;
            }
            return out;
        };
    }

    angular.module('theStyleApp.filters')
        .filter('monthFilter', [monthFilter]);
}());
